// importToFirestore.js
// node importToFirestore.js
//якщо добавити нові страви або оновити існуючі потрібно просто запустити іщераз цей файл а в firebase видалити старі страви і id щоб не було дублювання

// === 1. Імпортуємо необхідні модулі ===
const path = require('path')
const fs = require('fs')
const admin = require('firebase-admin')

// === 2. Важливі налаштування ===
// !!! 2.1. ПЕРЕВІРТЕ ШЛЯХ ДО ВАШОГО JSON-ФАЙЛУ КЛЮЧА СЛУЖБИ !!!
const serviceAccount = require('./serviceAccountKey.json')

// !!! 2.2. ПЕРЕВІРТЕ НАЗВУ ВАШОГО CLOUD STORAGE BUCKET !!!
const GCLOUD_STORAGE_BUCKET_NAME =
	'restaurant-menu-kateryna.firebasestorage.app'

// !!! 2.3. ПЕРЕВІРТЕ ШЛЯХ ДО ВАШОЇ ЛОКАЛЬНОЇ ПАПКИ З ЗОБРАЖЕННЯМИ !!!
const LOCAL_IMAGES_BASE_DIR = path.join(__dirname, 'images')

// === 3. Ініціалізуємо Firebase Admin SDK ===
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	storageBucket: GCLOUD_STORAGE_BUCKET_NAME,
})

const db = admin.firestore()
const bucket = admin.storage().bucket()

// === 4. Метадані категорій (назва + порядок) ===
// Відрегулюйте порядок (order) відповідно до ваших побажань.
// Чим менше число, тим вище категорія буде відображатися.
const CATEGORY_METADATA = {
	// --- СТРАВИ ---
	troutFishing: { name: 'ЛОВЛЯ ФОРЕЛІ', order: 10 },
	breakfast: { name: 'СНІДАНКИ', order: 20 },
	troutDishes: { name: 'СТРАВИ З ФОРЕЛІ', order: 30 },
	coldAppetizers: { name: 'ХОЛОДНІ ЗАКУСКИ', order: 40 },
	hotAppetizers: { name: 'ГАРЯЧІ ЗАКУСКИ', order: 50 },
	firstCourses: { name: 'ПЕРШІ СТРАВИ', order: 60 },
	salads: { name: 'САЛАТИ', order: 70 },
	grillDishes: { name: 'СТРАВИ НА МАНГАЛІ', order: 80 },
	mainDishes: { name: 'ОСНОВНІ СТРАВИ', order: 90 },
	lavashGrill: { name: 'ЛАВАШІ-ГРИЛЬ', order: 100 },
	pizzas: { name: 'ПІЦИ', order: 110 },
	desserts: { name: 'ДЕСЕРТИ', order: 120 },
	sides: { name: 'ГАРНІРИ', order: 130 },
	sauces: { name: 'СОУСИ ДО СТРАВ', order: 140 },
	extras: { name: 'ДОДАТКИ', order: 150 }, // Залишимо "Додатки" з їжею, якщо це гарніри/соуси

	// --- НАПОЇ ---
	beerSnacks: { name: 'ЗАКУСКИ ДО ПИВА', order: 200 }, // Закуски перед напоями
	vodka: { name: 'ГОРІЛОЧКА', order: 210 },
	variousVodka: { name: 'УСІЛЯКІ ПАЛЕНКИ', order: 220 },
	wine: { name: 'ВИНА', order: 230 },
	beer: { name: 'ПИВО', order: 240 },
	coldDrinks: { name: 'ХОЛОДНІ НАПОЇ', order: 250 },
	hotDrinks: { name: 'ГАРЯЧІ НАПОЇ', order: 260 },
}

// === 5. Головна функція для імпорту/оновлення даних ===
async function importMenuData() {
	console.log('----------------------------------------------------')
	console.log('Починаємо імпорт/оновлення даних меню до Firestore...')
	console.log('----------------------------------------------------')

	const categoriesCollectionRef = db.collection('categories')
	let totalItemsProcessed = 0 // Лічильник для оброблених страв (створених/оновлених)
	let totalWritesInBatch = 0 // Лічильник для операцій в поточному батчі
	const BATCH_SIZE = 499
	let batch = db.batch()

	// Проходимося по кожній категорії з нашого fullMenuData
	// menuData повинно бути завантажено з menuData.js раніше
	const menuData = require('./menuData') // Завантажуємо menuData.js тут

	for (const categoryId in menuData) {
		// Використовуємо menuData
		if (menuData.hasOwnProperty(categoryId)) {
			const categoryItems = menuData[categoryId]

			const categoryMetadata = CATEGORY_METADATA[categoryId]
			let categoryDisplayName
			let categoryOrder

			if (categoryMetadata) {
				categoryDisplayName = categoryMetadata.name
				categoryOrder = categoryMetadata.order
			} else {
				console.warn(
					`Попередження: Категорія "${categoryId}" відсутня в CATEGORY_METADATA. Використовуємо ID та порядок 999.`
				)
				categoryDisplayName = categoryId
				categoryOrder = 999
			}

			// === 5.1. Створюємо або оновлюємо документ для самої категорії ===
			const categoryDocRef = categoriesCollectionRef.doc(categoryId)
			batch.set(categoryDocRef, {
				name: categoryDisplayName,
				order: categoryOrder,
			})
			totalWritesInBatch++

			// Коммітимо батч, якщо він досяг ліміту
			if (totalWritesInBatch >= BATCH_SIZE) {
				await batch.commit()
				console.log(
					`- Коммітовано батч (категорії). Всього операцій: ${totalWritesInBatch}`
				)
				batch = db.batch() // Починаємо новий батч
				totalWritesInBatch = 0
			}

			// === 5.2. Додаємо/оновлюємо страви цієї категорії в підколекцію 'items' ===
			if (Array.isArray(categoryItems)) {
				for (const item of categoryItems) {
					if (!item.id) {
						console.error(
							`!!! Помилка: Елемент меню "${
								item.nameUk || 'Без назви'
							}" у категорії "${categoryId}" не має унікального ID. Він буде ПРОПУЩЕНИЙ.`
						)
						continue
					}

					const itemDocRef = categoryDocRef
						.collection('items')
						.doc(item.id.toString())
					batch.set(itemDocRef, item)
					totalWritesInBatch++
					totalItemsProcessed++

					if (totalWritesInBatch >= BATCH_SIZE) {
						await batch.commit()
						console.log(
							`- Коммітовано батч (страви). Всього операцій: ${totalWritesInBatch}`
						)
						batch = db.batch() // Починаємо новий батч
						totalWritesInBatch = 0
					}
				}
			} else {
				console.warn(
					`Попередження: Властивість "${categoryId}" у menuData не є масивом страв або його структура неправильна.`
				)
			}
		}
	}

	// === 5.3. Коммітимо всі записи, що залишилися в останньому батчі ===
	if (totalWritesInBatch > 0) {
		await batch.commit()
		console.log(
			`- Коммітовано останній батч. Всього операцій: ${totalWritesInBatch}`
		)
	}

	console.log('\n----------------------------------------------------')
	console.log(
		`Успішно оброблено (імпортовано/оновлено) ${totalItemsProcessed} елементів меню, організованих за категоріями!`
	)
	console.log('----------------------------------------------------')
}

// === 6. Запускаємо головну функцію ===
importMenuData().catch(error => {
	console.error('\n!!! ВИНИКЛА КРИТИЧНА ПОМИЛКА ПІД ЧАС ВИКОНАННЯ СКРИПТУ !!!')
	console.error(error)
	process.exit(1)
})

// --- Допоміжні функції для завантаження зображень ---
// (Ці функції можуть бути в окремому файлі uploadImages.js, але для зручності додані сюди для повного пакету)

// Функція для рекурсивного отримання всіх файлів зображень з директорії
function getAllImageFiles(dirPath, arrayOfFiles = []) {
	const files = fs.readdirSync(dirPath)

	files.forEach(function (file) {
		const fullPath = path.join(dirPath, file)
		if (fs.statSync(fullPath).isDirectory()) {
			arrayOfFiles = getAllImageFiles(fullPath, arrayOfFiles)
		} else {
			if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)) {
				arrayOfFiles.push(fullPath)
			}
		}
	})
	return arrayOfFiles
}

const imageUrlMap = new Map()

async function uploadImagesToStorage() {
	console.log(
		'\nКрок завантаження зображень: Починаємо завантаження до Cloud Storage...'
	)
	const allLocalImageFullPaths = getAllImageFiles(LOCAL_IMAGES_BASE_DIR)
	let imagesUploadedCount = 0

	if (allLocalImageFullPaths.length === 0) {
		console.warn(
			'Попередження: У локальній директорії не знайдено жодного файлу зображення. Пропускаємо завантаження.'
		)
	}

	for (const localFullPath of allLocalImageFullPaths) {
		const relativePath = path.relative(LOCAL_IMAGES_BASE_DIR, localFullPath)
		const storagePath = relativePath.replace(/\\/g, '/')

		try {
			const [file] = await bucket.upload(localFullPath, {
				destination: storagePath,
				metadata: {
					contentType: `image/${path.extname(localFullPath).substring(1)}`,
				},
				public: true,
				predefinedAcl: 'publicRead',
			})

			const publicUrl = `https://storage.googleapis.com/${GCLOUD_STORAGE_BUCKET_NAME}/${storagePath}`
			imageUrlMap.set(`images/${storagePath}`, publicUrl)
			imagesUploadedCount++
			console.log(`- Завантажено: ${storagePath} -> ${publicUrl}`)
		} catch (error) {
			console.error(`!!! Помилка завантаження ${localFullPath}:`, error.message)
		}
	}
	console.log(
		`\nКрок завантаження зображень завершено. Успішно завантажено ${imagesUploadedCount} зображень.`
	)
}

async function updateFirestoreImageLinks() {
	console.log(
		'\nКрок оновлення посилань: Оновлення посилань на зображення у Firestore...'
	)
	const categoriesSnapshot = await db.collection('categories').get()
	let itemsUpdatedInFirestoreCount = 0
	const BATCH_SIZE_FS = 499 // Окремий батч для оновлення Firestore
	let batchFS = db.batch()
	let batchOperationsFS = 0

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
			const originalImagePathInFirestore = itemData.image

			if (
				originalImagePathInFirestore &&
				imageUrlMap.has(originalImagePathInFirestore)
			) {
				const newImageUrl = imageUrlMap.get(originalImagePathInFirestore)
				batchFS.update(itemDoc.ref, { image: newImageUrl })
				itemsUpdatedInFirestoreCount++
				batchOperationsFS++

				if (batchOperationsFS >= BATCH_SIZE_FS) {
					await batchFS.commit()
					console.log(
						`- Коммітовано батч оновлень Firestore. Оновлено ${itemsUpdatedInFirestoreCount} елементів.`
					)
					batchFS = db.batch()
					batchOperationsFS = 0
				}
			} else if (originalImagePathInFirestore) {
				// Додаємо лог для діагностики, якщо шлях не знайдено, але поле 'image' існує
				console.warn(
					`Попередження: Зображення "${originalImagePathInFirestore}" для елемента "${
						itemData.nameUk || itemDoc.id
					}" (${categoryId}) не знайдено в мапі завантажених файлів або вже оновлено.`
				)
			}
		}
	}

	if (batchOperationsFS > 0) {
		await batchFS.commit()
		console.log(
			`- Коммітовано останній батч оновлень Firestore. Оновлено ${itemsUpdatedInFirestoreCount} елементів.`
		)
	}

	console.log(
		`\nКрок оновлення посилань завершено. Успішно оновлено ${itemsUpdatedInFirestoreCount} елементів меню у Firestore.`
	)
	console.log('\n----------------------------------------------------')
	console.log('Процес завантаження зображень та оновлення Firestore ЗАВЕРШЕНО!')
	console.log('----------------------------------------------------')
}

// --- Функція для послідовного запуску імпорту даних та імпорту зображень ---
// Ця функція не викликається автоматично, ви повинні викликати її вручну в консолі Node.js
// Якщо ви хочете автоматизувати це, можете розкоментувати її виклик в кінці файлу,
// або створити окремий скрипт-оркестратор.
async function fullImportProcess() {
	await importMenuData() // Спочатку імпортуємо/оновлюємо дані
	await uploadImagesToStorage() // Потім завантажуємо зображення
	await updateFirestoreImageLinks() // І оновлюємо посилання у Firestore
	console.log('\n===== ПОВНИЙ ПРОЦЕС ІМПОРТУ ЗАВЕРШЕНО УСПІШНО! =====')
}

// Щоб запустити імпорт, виконайте: node importToFirestore.js
// Якщо вам потрібно запустити повний процес (дані + зображення),
// ви можете розкоментувати рядок нижче або створити окремий скрипт.
// fullImportProcess().catch(console.error);
