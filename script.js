// Оптимізована версія script.js
// terser script.js -o script.min.js -c -m
const menuSections = {
	troutFishing: 'ЛОВЛЯ ФОРЕЛІ',
	breakfast: 'СНІДАНКИ',
	troutDishes: 'СТРАВИ З ФОРЕЛІ',
	coldAppetizers: 'ХОЛОДНІ ЗАКУСКИ',
	beerSnacks: 'ЗАКУСКИ ДО ПИВА',
	firstCourses: 'ПЕРШІ СТРАВИ',
	salads: 'САЛАТИ',
	sides: 'ГАРНІРИ',
	hotAppetizers: 'ГАРЯЧІ ЗАКУСКИ',
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

// Примітки для секцій (винесено окремо для зменшення дублювання)
const sectionNotes = {
	breakfast: [
		'Сніданки доступні до 12:00',
		'До будь-якого сніданку входить чай, кава або компот на вибір',
	],
	lavashGrill: [
		'До кожного лавашу подається картопля фрі та соус на вибір (кетчуп, BBQ або часниковий).',
	],
	mainDishes: [
		'При замовленні основної страви обирай будь-який гарнір безкоштовно',
	],
	grillDishes: ['Мінімальне замовлення – 200 грам.'],
	troutFishing: [
		'Ви можете самостійно зловити свіжу форель у нашому ставку та обрати - приготувати її в ресторані або забрати почищеною з собою. Форель не підлягає відпуску. Ціна вказана за 100 грамів живої ваги риби.',
	],
}

let currentDish = null
let quantity = 1

// Оптимізована функція створення елементів
function createElement(tag, className, content) {
	const el = document.createElement(tag)
	if (className) el.className = className
	if (content) el.textContent = content
	return el
}

function renderMenuSections() {
	const container = document.getElementById('menuContainer')
	const fragment = document.createDocumentFragment() // Оптимізація DOM

	for (const key in menuSections) {
		const sectionDiv = createElement('div', 'menu-section')
		const sectionHeader = createElement('div', 'section-header')
		sectionHeader.onclick = () => toggleSection(key)

		const sectionTitle = createElement('h2', 'section-title', menuSections[key])
		const toggleIcon = createElement('span', 'toggle-icon', '▼')

		sectionHeader.append(sectionTitle, toggleIcon)

		const sectionContent = createElement('div', 'section-content')
		sectionContent.id = key + '-content'

		// Додавання приміток (якщо є)
		if (sectionNotes[key]) {
			sectionNotes[key].forEach((note, i) => {
				const noteEl = createElement(
					'p',
					i === 0 ? 'breakfast-note' : 'breakfast-note-secondary',
					note
				)
				sectionContent.appendChild(noteEl)
			})
		}

		const grid = createElement('div', 'menu-grid')
		grid.id = key + '-grid'

		sectionContent.appendChild(grid)
		sectionDiv.append(sectionHeader, sectionContent)
		fragment.appendChild(sectionDiv)
	}

	container.appendChild(fragment)
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
	const fragment = document.createDocumentFragment() // Оптимізація DOM

	items.forEach((dish, index) => {
		const item = createElement('div', 'menu-item')
		item.onclick = () => openModal(section, index)

		// Використовуємо template strings тільки там, де потрібно
		const img = createElement('img')
		img.src = dish.image
		img.alt = dish.nameUk || dish.name
		img.loading = 'lazy' // ⭐ ВАЖЛИВО: Lazy loading для зображень

		const itemInfo = createElement('div', 'item-info')

		const itemName = createElement('div', 'item-name')
		itemName.textContent = dish.nameUk || dish.name
		if (dish.isNew) {
			const badge = createElement('span', 'new-badge', 'New')
			itemName.appendChild(badge)
		}

		itemInfo.appendChild(itemName)

		if (dish.weight) {
			const weight = createElement('div', 'item-weight', dish.weight)
			itemInfo.appendChild(weight)
		}

		const itemPrice = createElement(
			'div',
			'item-price',
			`₴ ${dish.price.toFixed(2)}`
		)

		item.append(img, itemInfo, itemPrice)
		fragment.appendChild(item)
	})

	grid.appendChild(fragment)
}

function toggleSection(sectionId) {
	const content = document.getElementById(sectionId + '-content')
	if (!content) return

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

	const modal = document.getElementById('dishModal')
	document.getElementById('modalImage').src = currentDish.image
	document.getElementById('modalTitle').textContent =
		currentDish.nameUk || currentDish.name
	document.getElementById('modalWeight').textContent = currentDish.weight
	document.getElementById('modalTime').textContent = currentDish.time
	document.getElementById('modalDescription').textContent =
		currentDish.description
	document.getElementById('quantity').textContent = quantity
	updatePrice()

	modal.classList.add('active')
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
	document.getElementById('modalPrice').textContent = (
		currentDish.price * quantity
	).toFixed(2)
}

// Делегування подій для модалок (оптимізація)
document.addEventListener('DOMContentLoaded', () => {
	renderMenuSections()
	renderMenu()

	// Використовуємо делегування подій
	const dishModal = document.getElementById('dishModal')
	const infoModal = document.getElementById('infoModal')

	dishModal.addEventListener(
		'click',
		e => e.target === dishModal && closeModal()
	)
	infoModal.addEventListener(
		'click',
		e => e.target === infoModal && closeInfoModal()
	)
})
