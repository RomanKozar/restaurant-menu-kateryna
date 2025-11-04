const menuSections = {
	troutFishing: 'ЛОВЛЯ ФОРЕЛІ',
	breakfast: 'СНІДАНКИ',
	troutDishes: 'СТРАВИ З ФОРЕЛІ',
	coldAppetizers: 'ХОЛОДНІ ЗАКУСКИ',
	beerSnacks: 'ЗАКУСКИ ДО ПИВА',
	firstCourses: 'ПЕРШІ СТРАВИ',
	salads: 'САЛАТИ',
	sides: 'ГАРНІРИ',
	hotAppetizers: 'ГАРЯЧІ ЗАКУСКИ ',
	sauces: 'СОУСИ ДО СТРАВ',
	grillDishes: 'СТРАВИ НА МАНГАЛІ',
	mainDishes: 'ОСНОВНІ СТРАВИ',
	lavashGrill: 'ЛАВАШІ-ГРИЛЬ',
	pizzas: 'ПІЦИ',
	desserts: 'ДЕСЕРТИ',
	vodka: 'ГОРІЛОЧКА',
	variousVodka: 'УСІЛЯКІ ПАЛЕНКИ',
	wine: 'ВИНА',
	beer: 'ПИВО',
	coldDrinks: 'ХОЛОДНІ НАПОЇ',
	hotDrinks: 'ГАРЯЧІ НАПОЇ',
	extras: 'ДОДАТКИ',
}

let currentDish = null
let quantity = 1

function renderMenuSections() {
	const container = document.getElementById('menuContainer')
	for (const key in menuSections) {
		const sectionDiv = document.createElement('div')
		sectionDiv.className = 'menu-section'

		const sectionHeader = document.createElement('div')
		sectionHeader.className = 'section-header'
		sectionHeader.onclick = () => toggleSection(key)

		const sectionTitle = document.createElement('h2')
		sectionTitle.className = 'section-title'
		sectionTitle.textContent = menuSections[key]

		const toggleIcon = document.createElement('span')
		toggleIcon.className = 'toggle-icon'
		toggleIcon.textContent = '▼'

		sectionHeader.appendChild(sectionTitle)
		sectionHeader.appendChild(toggleIcon)

		const sectionContent = document.createElement('div')
		sectionContent.className = 'section-content'
		sectionContent.id = key + '-content'

		const grid = document.createElement('div')
		grid.className = 'menu-grid'
		grid.id = key + '-grid'

		// 🟡 ДОДАЄМО ПРИМІТКУ ТІЛЬКИ ДЛЯ СНІДАНКІВ
		if (key === 'breakfast') {
			const breakfastNote1 = document.createElement('p')
			breakfastNote1.className = 'breakfast-note'
			breakfastNote1.textContent = 'Сніданки доступні до 12:00'

			const breakfastNote2 = document.createElement('p')
			breakfastNote2.className = 'breakfast-note-secondary'
			breakfastNote2.textContent =
				'До будь-якого сніданку входить чай, кава або компот на вибір'

			sectionContent.appendChild(breakfastNote1)
			sectionContent.appendChild(breakfastNote2)
		}
		// 🟡 ДОДАЄМО ПРИМІТКУ ТІЛЬКИ ДЛЯ ЛАВАШІВ-ГРИЛЬ
		if (key === 'lavashGrill') {
			const lavashGrillNote = document.createElement('p')
			lavashGrillNote.className = 'breakfast-note'
			lavashGrillNote.textContent =
				'До кожного лавашу подається картопля фрі та соус на вибір (кетчуп, BBQ або часниковий).'
			sectionContent.appendChild(lavashGrillNote)
		}
		// 🟡 ДОДАЄМО ПРИМІТКУ ТІЛЬКИ ДЛЯ ОСНОВНИХ СТРАВ
		if (key === 'mainDishes') {
			const mainDishesNote = document.createElement('p')
			mainDishesNote.className = 'breakfast-note'
			mainDishesNote.textContent =
				'При замовленні основної страви обирай будь-який гарнір безкоштовно'
			sectionContent.appendChild(mainDishesNote)
		}
		// 🟡 ДОДАЄМО ПРИМІТКУ ТІЛЬКИ ДЛЯ СТРАВ НА МАНГАЛІ
		if (key === 'grillDishes') {
			const grillDishesNote = document.createElement('p')
			grillDishesNote.className = 'breakfast-note'
			grillDishesNote.textContent = 'Мінімальне замовлення – 200 грам.'
			sectionContent.appendChild(grillDishesNote)
		}
		// 🟡 ДОДАЄМО ПРИМІТКУ ТІЛЬКИ ДЛЯ ЛОВЛІ ФОРЕЛІ
		if (key === 'troutFishing') {
			const troutFishingNote = document.createElement('p')
			troutFishingNote.className = 'breakfast-note'
			troutFishingNote.textContent =
				'Ви можете самостійно зловити свіжу форель у нашому ставку та обрати - приготувати її в ресторані або забрати почищеною з собою. Форель не підлягає відпуску. Ціна вказана за 100 грамів живої ваги риби.'
			sectionContent.appendChild(troutFishingNote)
		}

		sectionContent.appendChild(grid)
		sectionDiv.appendChild(sectionHeader)
		sectionDiv.appendChild(sectionContent)
		container.appendChild(sectionDiv)
	}
}

function renderMenu() {
	for (const section in menuData) {
		renderSection(section, section + '-grid')
	}
}

function renderSection(section, gridId) {
	const grid = document.getElementById(gridId)
	if (!grid) return
	const items = menuData[section]

	items.forEach((dish, index) => {
		const item = document.createElement('div')
		item.className = 'menu-item'
		item.onclick = () => openModal(section, index)

		item.innerHTML = `
            <img src="${dish.image}" alt="${dish.nameUk || dish.name}">
            <div class="item-info">
                <div class="item-name">
                    ${dish.nameUk || dish.name}
                    ${dish.isNew ? '<span class="new-badge">New</span>' : ''}
                </div>
                ${
									dish.weight
										? `<div class="item-weight">${dish.weight}</div>`
										: ''
								}
            </div>
            <div class="item-price">₴ ${dish.price.toFixed(2)}</div>
        `

		grid.appendChild(item)
	})
}

function toggleSection(sectionId) {
	const content = document.getElementById(sectionId + '-content')
	if (!content) return

	// ⭐ ЗНАХОДИМО ІКОНКУ В HEADER
	const header = content.previousElementSibling
	const icon = header.querySelector('.toggle-icon')

	content.classList.toggle('open')

	if (content.classList.contains('open')) {
		content.style.maxHeight = content.scrollHeight + 'px'
		if (icon) icon.style.transform = 'rotate(180deg)'
	} else {
		content.style.maxHeight = null
		if (icon) icon.style.transform = 'rotate(0deg)'
	}
}

function openModal(section, index) {
	currentDish = menuData[section][index]
	quantity = 1

	document.getElementById('modalImage').src = currentDish.image
	document.getElementById('modalTitle').textContent =
		currentDish.nameUk || currentDish.name
	document.getElementById('modalWeight').textContent = currentDish.weight
	document.getElementById('modalTime').textContent = currentDish.time
	document.getElementById('modalDescription').textContent =
		currentDish.description
	document.getElementById('quantity').textContent = quantity
	updatePrice()

	document.getElementById('dishModal').classList.add('active')
}

function closeModal() {
	document.getElementById('dishModal').classList.remove('active')
}

function openInfoModal() {
	document.getElementById('infoModal').classList.add('active')
}

function closeInfoModal() {
	document.getElementById('infoModal').classList.remove('active')
}

function increaseQuantity() {
	quantity++
	document.getElementById('quantity').textContent = quantity
	updatePrice()
}

function decreaseQuantity() {
	if (quantity > 1) {
		quantity--
		document.getElementById('quantity').textContent = quantity
		updatePrice()
	}
}

function updatePrice() {
	const total = (currentDish.price * quantity).toFixed(2)
	document.getElementById('modalPrice').textContent = total
}

// ⭐ ОДИН ЄДИНИЙ ВХІД
document.addEventListener('DOMContentLoaded', () => {
	renderMenuSections()
	renderMenu()

	// Event listeners для модалок
	document.getElementById('dishModal').addEventListener('click', function (e) {
		if (e.target === this) closeModal()
	})

	document.getElementById('infoModal').addEventListener('click', function (e) {
		if (e.target === this) closeInfoModal()
	})
})
