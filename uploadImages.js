// uploadImages.js
// node uploadImages.js

// === 1. Імпортуємо необхідні модулі ===
const path = require('path')
const fs = require('fs')
const admin = require('firebase-admin')

// === 2. Важливі налаштування ===
const serviceAccount = require('./serviceAccountKey.json')

//const GCLOUD_STORAGE_BUCKET_NAME = 'restaurant-menu-kateryna.appspot.com'

// ПРАВИЛЬНА НАЗВА БАКЕТА (gs:// прибираємо)
const GCLOUD_STORAGE_BUCKET_NAME =
	'restaurant-menu-kateryna.firebasestorage.app'

const LOCAL_IMAGES_BASE_DIR = path.join(__dirname, 'images')

// === 3. Ініціалізуємо Firebase Admin SDK ===
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	storageBucket: GCLOUD_STORAGE_BUCKET_NAME,
})

const db = admin.firestore()
const bucket = admin.storage().bucket()

// === 4. Допоміжні функції ===

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

// === 5. Головна функція для завантаження зображень та оновлення Firestore ===
async function uploadImagesAndLinkToFirestore() {
	console.log('----------------------------------------------------')
	console.log(
		'Починаємо процес завантаження зображень та оновлення Firestore...',
	)
	console.log('Локальна директорія зображень:', LOCAL_IMAGES_BASE_DIR)
	console.log('Bucket Cloud Storage:', GCLOUD_STORAGE_BUCKET_NAME)
	console.log('----------------------------------------------------')

	// === 5.1. Завантаження зображень до Cloud Storage ===
	console.log('\nКрок 1/2: Завантаження зображень до Cloud Storage...')
	const allLocalImageFullPaths = getAllImageFiles(LOCAL_IMAGES_BASE_DIR)
	let processedCount = 0

	if (allLocalImageFullPaths.length === 0) {
		console.warn(
			'Попередження: У локальній директорії не знайдено жодного файлу зображення.',
		)
		return
	}

	for (const localFullPath of allLocalImageFullPaths) {
		const relativePath = path.relative(LOCAL_IMAGES_BASE_DIR, localFullPath)
		const storagePath = relativePath.replace(/\\/g, '/')

		try {
			const fileRef = bucket.file(storagePath)

			// ПЕРЕВІРКА: чи існує вже такий файл
			const [exists] = await fileRef.exists()

			if (exists) {
				console.log(`- Пропущено (вже є в Storage): ${storagePath}`)
			} else {
				// ЗАВАНТАЖЕННЯ: якщо файлу немає
				await bucket.upload(localFullPath, {
					destination: storagePath,
					metadata: {
						contentType: `image/${path.extname(localFullPath).substring(1)}`,
					},
					public: true,
					predefinedAcl: 'publicRead',
				})
				console.log(`- Успішно завантажено: ${storagePath}`)
			}

			// Формуємо публічний URL (потрібен для оновлення Firestore у будь-якому разі)
			const publicUrl = `https://storage.googleapis.com/${GCLOUD_STORAGE_BUCKET_NAME}/${storagePath}`

			// Ключ мапи - це шлях, який ми очікуємо в Firestore (images/category/file.webp)
			imageUrlMap.set(`images/${storagePath}`, publicUrl)
			processedCount++
		} catch (error) {
			console.error(`!!! Помилка для ${storagePath}:`, error.message)
		}
	}
	console.log(
		`\nКрок 1/2 завершено. Оброблено посилань для ${processedCount} зображень.`,
	)

	// === 5.2. Оновлення посилань на зображення у Firestore ===
	console.log('\nКрок 2/2: Оновлення посилань на зображення у Firestore...')
	const categoriesSnapshot = await db.collection('categories').get()
	let itemsUpdatedInFirestoreCount = 0
	const BATCH_SIZE = 499
	let batch = db.batch()
	let batchOperations = 0

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

				// Оновлюємо, тільки якщо посилання ще не є повним URL
				if (originalImagePathInFirestore !== newImageUrl) {
					batch.update(itemDoc.ref, { image: newImageUrl })
					itemsUpdatedInFirestoreCount++
					batchOperations++
				}

				if (batchOperations >= BATCH_SIZE) {
					await batch.commit()
					console.log(
						`- Коммітовано батч. Оновлено ${itemsUpdatedInFirestoreCount} елементів.`,
					)
					batch = db.batch()
					batchOperations = 0
				}
			}
		}
	}

	if (batchOperations > 0) {
		await batch.commit()
		console.log(
			`- Коммітовано останній батч. Оновлено ${itemsUpdatedInFirestoreCount} елементів.`,
		)
	}

	console.log(
		`\nУспішно оновлено ${itemsUpdatedInFirestoreCount} елементів у Firestore.`,
	)
	console.log('----------------------------------------------------')
	console.log('ГОТОВО!')
}

uploadImagesAndLinkToFirestore().catch(error => {
	console.error('\n!!! КРИТИЧНА ПОМИЛКА !!!')
	console.error(error)
	process.exit(1)
})
