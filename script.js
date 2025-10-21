const menuSections = {
	breakfast: 'СНІДАНКИ (8)',
	troutDishes: 'СТРАВИ З ФОРЕЛІ (9)',
	coldAppetizers: 'ХОЛОДНІ ЗАКУСКИ (10)',
	firstCourses: 'ПЕРШІ СТРАВИ (4)',
	salads: 'САЛАТИ (7)',
	sides: 'ГАРНІРИ (5)',
	hotAppetizers: 'ГАРЯЧІ ЗАКУСКИ (10)',
	sauces: 'СОУСИ ДО СТРАВ (3)',
	grillDishes: 'СТРАВИ НА МАНГАЛІ (8)',
	mainDishes: 'ОСНОВНІ СТРАВИ (4)',
	lavashGrill: 'ЛАВАШІ-ГРИЛЬ (4)',
	pizzas: 'ПІЦИ (6)',
	desserts: 'ДЕСЕРТИ (6)',
	vodka: 'ГОРІЛОЧКА (3)',
	variousVodka: 'УСІЛЯКІ ПАЛЕНКИ (2)',
	whiskey: 'ВІСКІ (1)',
	cognac: 'КОНЬЯК (1)',
	wine: 'ВИНА (6)',
	beer: 'ПИВО (5)',
	coldDrinks: 'ХОЛОДНІ НАПОЇ (9)',
	hotDrinks: 'ГАРЯЧІ НАПОЇ (11)',
	extras: 'ДОДАТКИ (8)',
}

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
		sectionHeader.appendChild(sectionTitle)

		const sectionContent = document.createElement('div')
		sectionContent.className = 'section-content'
		sectionContent.id = key + '-content'

		const grid = document.createElement('div')
		grid.className = 'menu-grid'
		grid.id = key + '-grid'

		sectionContent.appendChild(grid)
		sectionDiv.appendChild(sectionHeader)
		sectionDiv.appendChild(sectionContent)
		container.appendChild(sectionDiv)
	}
}

document.addEventListener('DOMContentLoaded', () => {
	renderMenuSections()
	renderMenu() // виклик твого script.js функцій для рендеру страв
})

let currentDish = null
let quantity = 1

// Рендеримо всі секції автоматично
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
            <img src="${dish.image}" alt="${dish.name}">
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
            <div class="item-price">${dish.price.toFixed(2)}</div>
        `

		grid.appendChild(item)
	})
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

// Toggle секції (можна відкривати кілька одночасно)
function toggleSection(sectionId) {
	const content = document.getElementById(sectionId + '-content')
	if (!content) return

	content.classList.toggle('open')
	if (content.classList.contains('open')) {
		content.style.maxHeight = content.scrollHeight + 'px'
	} else {
		content.style.maxHeight = null
	}
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

// Закриття модалок при кліку на фон
document.getElementById('dishModal').addEventListener('click', function (e) {
	if (e.target === this) closeModal()
})

document.getElementById('infoModal').addEventListener('click', function (e) {
	if (e.target === this) closeInfoModal()
})

document.addEventListener('DOMContentLoaded', renderMenu)
