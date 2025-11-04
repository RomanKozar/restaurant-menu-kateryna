// uploadImages.js
//node uploadImages.js
//якщо добавляти нові фото потрібно просто запустити іщераз цей файл

// === 1. Імпортуємо необхідні модулі ===
const path = require('path') // Для роботи зі шляхами до файлів
const fs = require('fs') // Для роботи з файловою системою
const admin = require('firebase-admin') // Firebase Admin SDK - ОБОВ'ЯЗКОВО ІМПОРТУЄТЬСЯ НА ПОЧАТКУ!

// === 2. Важливі налаштування ===
// !!! 2.1. ПЕРЕВІРТЕ ШЛЯХ ДО ВАШОГО JSON-ФАЙЛУ КЛЮЧА СЛУЖБИ !!!
// Припускаємо, що файл знаходиться у тій же директорії, що й цей скрипт.
const serviceAccount = require('./serviceAccountKey.json')

// !!! 2.2. ПЕРЕВІРТЕ НАЗВУ ВАШОГО CLOUD STORAGE BUCKET !!!
// Її можна знайти в Консолі Firebase -> Storage.
// Зазвичай має вигляд "ваш-project-id.appspot.com".
const GCLOUD_STORAGE_BUCKET_NAME =
	'restaurant-menu-kateryna.firebasestorage.app'

// !!! 2.3. ПЕРЕВІРТЕ ШЛЯХ ДО ВАШОЇ ЛОКАЛЬНОЇ ПАПКИ З ЗОБРАЖЕННЯМИ !!!
// Припускаємо, що папка 'images' знаходиться в тій же директорії, що й цей скрипт.
// Якщо ні, змініть шлях відповідно (наприклад, 'src/assets/images').
const LOCAL_IMAGES_BASE_DIR = path.join(__dirname, 'images')

// === 3. Ініціалізуємо Firebase Admin SDK ===
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	storageBucket: GCLOUD_STORAGE_BUCKET_NAME,
})

const db = admin.firestore()
const bucket = admin.storage().bucket()

// === 4. Допоміжні функції ===

// Функція для рекурсивного отримання всіх файлів зображень з директорії
function getAllImageFiles(dirPath, arrayOfFiles = []) {
	const files = fs.readdirSync(dirPath)

	files.forEach(function (file) {
		const fullPath = path.join(dirPath, file)
		if (fs.statSync(fullPath).isDirectory()) {
			// Якщо це директорія, рекурсивно викликаємо функцію
			arrayOfFiles = getAllImageFiles(fullPath, arrayOfFiles)
		} else {
			// Перевіряємо, чи це файл зображення (можете розширити список розширень)
			if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)) {
				arrayOfFiles.push(fullPath)
			}
		}
	})
	return arrayOfFiles
}

// Мапа для зберігання відповідності локальних шляхів зображень до їхніх URL-адрес у Cloud Storage
const imageUrlMap = new Map()

// === 5. Головна функція для завантаження зображень та оновлення Firestore ===
async function uploadImagesAndLinkToFirestore() {
	console.log('----------------------------------------------------')
	console.log(
		'Починаємо процес завантаження зображень та оновлення Firestore...'
	)
	console.log('Локальна директорія зображень:', LOCAL_IMAGES_BASE_DIR)
	console.log('Bucket Cloud Storage:', GCLOUD_STORAGE_BUCKET_NAME)
	console.log('----------------------------------------------------')

	// === 5.1. Завантаження зображень до Cloud Storage ===
	console.log('\nКрок 1/2: Завантаження зображень до Cloud Storage...')
	const allLocalImageFullPaths = getAllImageFiles(LOCAL_IMAGES_BASE_DIR)
	let imagesUploadedCount = 0

	if (allLocalImageFullPaths.length === 0) {
		console.warn(
			'Попередження: У локальній директорії не знайдено жодного файлу зображення. Пропускаємо завантаження.'
		)
	}

	for (const localFullPath of allLocalImageFullPaths) {
		// Отримуємо відносний шлях від базової папки зображень
		// Наприклад: 'D:\...\images\troutFishing\troutFishing.webp'
		// стає 'troutFishing/troutFishing.webp' у Cloud Storage
		const relativePath = path.relative(LOCAL_IMAGES_BASE_DIR, localFullPath)
		const storagePath = relativePath.replace(/\\/g, '/') // Замінюємо зворотні слеші на прямі для Cloud Storage

		try {
			// Опції для завантаження: робимо файл публічно доступним
			const [file] = await bucket.upload(localFullPath, {
				destination: storagePath, // Шлях у Cloud Storage
				metadata: {
					contentType: `image/${path.extname(localFullPath).substring(1)}`, // Визначаємо тип вмісту за розширенням
				},
				public: true, // Встановлюємо файл як публічний
				predefinedAcl: 'publicRead', // Дозволяє публічне читання
			})

			// Формуємо публічний URL зображення
			// Приклад: https://storage.googleapis.com/restaurant-menu-kateryna.appspot.com/troutFishing/troutFishing.webp
			const publicUrl = `https://storage.googleapis.com/${GCLOUD_STORAGE_BUCKET_NAME}/${storagePath}`

			// Зберігаємо мапування: 'images/troutFishing/troutFishing.webp' -> 'https://...'
			// Зверніть увагу: ключем мапи є оригінальний шлях, що починається з 'images/'
			imageUrlMap.set(`images/${storagePath}`, publicUrl)
			imagesUploadedCount++
			console.log(`- Завантажено: ${storagePath} -> ${publicUrl}`)
		} catch (error) {
			console.error(`!!! Помилка завантаження ${localFullPath}:`, error.message)
		}
	}
	console.log(
		`\nКрок 1/2 завершено. Успішно завантажено ${imagesUploadedCount} зображень.`
	)

	// === 5.2. Оновлення посилань на зображення у Firestore ===
	console.log('\nКрок 2/2: Оновлення посилань на зображення у Firestore...')
	const categoriesSnapshot = await db.collection('categories').get()
	let itemsUpdatedInFirestoreCount = 0
	const BATCH_SIZE = 499
	let batch = db.batch()
	let batchOperations = 0

	if (categoriesSnapshot.empty) {
		console.warn(
			'Попередження: Колекція "categories" у Firestore порожня. Немає чого оновлювати.'
		)
	}

	for (const categoryDoc of categoriesSnapshot.docs) {
		const categoryId = categoryDoc.id
		const itemsSnapshot = await db
			.collection('categories')
			.doc(categoryId)
			.collection('items')
			.get()

		for (const itemDoc of itemsSnapshot.docs) {
			const itemData = itemDoc.data()
			// Очікуємо, що поле 'image' містить шлях на зразок 'images/beer/pivo-zakarpat.webp'
			const originalImagePathInFirestore = itemData.image

			if (
				originalImagePathInFirestore &&
				imageUrlMap.has(originalImagePathInFirestore)
			) {
				const newImageUrl = imageUrlMap.get(originalImagePathInFirestore)
				batch.update(itemDoc.ref, { image: newImageUrl }) // Оновлюємо поле 'image'
				itemsUpdatedInFirestoreCount++
				batchOperations++

				if (batchOperations >= BATCH_SIZE) {
					await batch.commit()
					console.log(
						`- Коммітовано батч оновлень Firestore. Всього оновлено ${itemsUpdatedInFirestoreCount} елементів.`
					)
					batch = db.batch()
					batchOperations = 0
				}
			} else if (originalImagePathInFirestore) {
				console.warn(
					`Попередження: Зображення "${originalImagePathInFirestore}" для елемента "${itemData.nameUk}" (${categoryId}) не знайдено в локальних файлах або вже оновлено.`
				)
			}
		}
	}

	// Коммітимо всі операції, що залишилися в останньому батчі
	if (batchOperations > 0) {
		await batch.commit()
		console.log(
			`- Коммітовано останній батч оновлень Firestore. Всього оновлено ${itemsUpdatedInFirestoreCount} елементів.`
		)
	}

	console.log(
		`\nКрок 2/2 завершено. Успішно оновлено ${itemsUpdatedInFirestoreCount} елементів меню у Firestore.`
	)
	console.log('\n----------------------------------------------------')
	console.log('Процес завантаження зображень та оновлення Firestore ЗАВЕРШЕНО!')
	console.log('----------------------------------------------------')
}

// === 6. Запускаємо головну функцію ===
uploadImagesAndLinkToFirestore().catch(error => {
	console.error('\n!!! ВИНИКЛА КРИТИЧНА ПОМИЛКА ПІД ЧАС ВИКОНАННЯ СКРИПТУ !!!')
	console.error(error)
	process.exit(1) // Завершуємо процес з помилкою
})
