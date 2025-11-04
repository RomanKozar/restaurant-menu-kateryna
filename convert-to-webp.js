import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const folder = './images/wine' // твоя папка з фото
fs.readdirSync(folder).forEach(file => {
	const inputPath = path.join(folder, file)
	const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp')
	sharp(inputPath)
		.toFile(outputPath)
		.then(() => {
			console.log(`✅ ${file} → ${path.basename(outputPath)}`)
		})
})

//node convert-to-webp.js
