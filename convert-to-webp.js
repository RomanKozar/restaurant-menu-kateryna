import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const folder = './images/desserts'

fs.readdirSync(folder).forEach(file => {
	const ext = path.extname(file).toLowerCase()

	// 1. Пропускаємо те, що вже webp або не є картинкою
	if (ext === '.webp' || !['.jpg', '.jpeg', '.png', '.heic'].includes(ext)) {
		return
	}

	const inputPath = path.join(folder, file)
	const outputPath = inputPath.replace(new RegExp(`\\${ext}$`, 'i'), '.webp')

	// 2. Перевірка на існування
	if (fs.existsSync(outputPath)) {
		console.log(`⏩ Вже існує: ${path.basename(outputPath)}`)
		return
	}

	// 3. Конвертація
	sharp(inputPath)
		.toFormat('webp')
		.webp({ quality: 80 })
		.toFile(outputPath)
		.then(() => {
			console.log(`✅ ${ext.toUpperCase()} → WEBP: ${file}`)

			// ПОРАДА: Якщо все ок, старий HEIC можна видалити, щоб не займав місце
			// fs.unlinkSync(inputPath);
		})
		.catch(err => {
			console.error(`❌ Помилка ${file}:`, err.message)
			if (err.message.includes('heif')) {
				console.warn(
					'💡 Підказка: Для підтримки HEIC може знадобитися встановлення libheif у системі.',
				)
			}
		})
})

//node convert-to-webp.js
