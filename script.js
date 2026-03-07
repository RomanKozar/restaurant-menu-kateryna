// Оптимізована версія script.js
// terser script.js -o script.min.js -c -m
//console.log('script.js завантажено') // Діагностичний лог

// Глобальна змінна для доступу до даних меню, отриманих з Firebase
// fullMenuFromFirebase тепер зберігає метадані про категорії та їхні страви після завантаження
// Формат: { categoryId: { name: 'Назва Категорії', items: [...], isLoaded: false, isLoading: false } }
// Глобальна змінна для збереження даних меню
let fullMenuFromFirebase = {}
let currentDish = null
let quantity = 1

// === 1. Допоміжна функція створення елементів ===
function createElement(tag, className, content) {
	const el = document.createElement(tag)
	if (className) el.className = className
	if (content) el.textContent = content
	return el
}

// === 2. Завантаження категорій при старті ===
async function loadMenuFromFirebase() {
	const container = document.getElementById('menuContainer')
	const loadingMessage = document.getElementById('loading-message')

	try {
		if (loadingMessage) loadingMessage.textContent = 'Завантаження категорій...'

		const categoriesSnapshot = await db
			.collection('categories')
			.orderBy('order')
			.get()

		if (categoriesSnapshot.empty) {
			if (loadingMessage) loadingMessage.textContent = 'Меню наразі недоступне.'
			return
		}

		const categoryStructureFragment = document.createDocumentFragment()

		categoriesSnapshot.forEach(categoryDoc => {
			const categoryId = categoryDoc.id
			const categoryData = categoryDoc.data()

			fullMenuFromFirebase[categoryId] = {
				name: categoryData.name,
				items: [],
				isLoaded: false,
				isLoading: false,
			}

			const sectionDiv = createElement('div', 'menu-section')
			const sectionHeader = createElement('div', 'section-header')
			sectionHeader.onclick = () => toggleSection(categoryId)

			const sectionTitle = createElement(
				'h2',
				'section-title',
				categoryData.name,
			)
			const toggleIcon = createElement('span', 'toggle-icon', '▼')

			sectionHeader.append(sectionTitle, toggleIcon)

			const sectionContent = createElement('div', 'section-content')
			sectionContent.id = categoryId + '-content'

			// Додавання нотаток до категорій (якщо є в об'єкті sectionNotes)
			if (sectionNotes[categoryId]) {
				sectionNotes[categoryId].forEach((note, i) => {
					const noteEl = createElement(
						'p',
						i === 0 ? 'breakfast-note' : 'breakfast-note-secondary',
						note,
					)
					sectionContent.appendChild(noteEl)
				})
			}

			const grid = createElement('div', 'menu-grid')
			grid.id = categoryId + '-grid'
			sectionContent.appendChild(grid)

			sectionDiv.append(sectionHeader, sectionContent)
			categoryStructureFragment.appendChild(sectionDiv)
		})

		container.appendChild(categoryStructureFragment)
		if (loadingMessage) loadingMessage.style.display = 'none'
	} catch (error) {
		console.error('Помилка завантаження:', error)
		if (container)
			container.innerHTML =
				'<p style="color:red; text-align:center;">Помилка завантаження меню.</p>'
	}
}

// === 3. Нотатки для секцій (локальні) ===
const sectionNotes = {
	breakfast: [
		'Сніданки доступні до 12:00',
		'До будь-якого сніданку входить чай, кава або компот на вибір',
	],
	lavashGrill: ['До кожного лавашу подається картопля фрі та соус на вибір.'],
	mainDishes: [
		'При замовленні основної страви обирай будь-який гарнір безкоштовно',
	],
	grillDishes: ['Мінімальне замовлення – 200 грам.'],
	troutFishing: [
		'Ви можете самостійно зловити свіжу форель. Ціна за 100г живої ваги.',
	],
}

// === 4. Рендеринг страв ===
function renderSection(categoryId, gridId, items) {
	const grid = document.getElementById(gridId)
	if (!grid) return

	const fragment = document.createDocumentFragment()

	items.forEach(dish => {
		const item = createElement('div', 'menu-item')
		item.onclick = () => openModal(categoryId, dish.id)

		const img = createElement('img')
		img.src = dish.image
		img.alt = dish.nameUk || dish.name
		img.loading = 'lazy'

		const itemInfo = createElement('div', 'item-info')
		const itemName = createElement('div', 'item-name', dish.nameUk || dish.name)

		if (dish.isNew) {
			itemName.appendChild(createElement('span', 'new-badge', 'New'))
		}

		itemInfo.appendChild(itemName)
		if (dish.weight)
			itemInfo.appendChild(createElement('div', 'item-weight', dish.weight))

		const itemPrice = createElement(
			'div',
			'item-price',
			`₴ ${dish.price.toFixed(2)}`,
		)

		item.append(img, itemInfo, itemPrice)
		fragment.appendChild(item)
	})

	grid.appendChild(fragment)
}

// === 5. Перемикання секції та Lazy Loading з СОРТУВАННЯМ ===
async function toggleSection(categoryId) {
	const content = document.getElementById(categoryId + '-content')
	const grid = document.getElementById(categoryId + '-grid')
	if (!content) return

	const header = content.previousElementSibling
	const icon = header.querySelector('.toggle-icon')

	content.classList.toggle('open')

	if (content.classList.contains('open')) {
		content.style.maxHeight = content.scrollHeight + 'px'
		if (icon) icon.style.transform = 'rotate(180deg)'

		const categoryData = fullMenuFromFirebase[categoryId]
		if (categoryData && !categoryData.isLoaded && !categoryData.isLoading) {
			categoryData.isLoading = true
			if (grid)
				grid.innerHTML =
					'<p style="text-align:center; padding:20px;">Завантаження страв...</p>'

			try {
				const itemsSnapshot = await db
					.collection('categories')
					.doc(categoryId)
					.collection('items')
					.get()

				categoryData.items = []
				itemsSnapshot.forEach(itemDoc => {
					const data = itemDoc.data()
					data.id = itemDoc.id
					categoryData.items.push(data)
				})

				// ⭐ СОРТУВАННЯ ЗА ЧИСЛОМ В ID (щоб Вареники 9 та 10 йшли в кінці)
				categoryData.items.sort((a, b) => {
					const numA = parseInt(a.id.replace(/\D/g, '')) || 0
					const numB = parseInt(b.id.replace(/\D/g, '')) || 0
					return numA - numB
				})

				categoryData.isLoaded = true
				if (grid) grid.innerHTML = ''

				if (categoryData.items.length > 0) {
					renderSection(categoryId, categoryId + '-grid', categoryData.items)
				} else {
					if (grid)
						grid.innerHTML =
							'<p style="text-align:center;">Поки що немає страв.</p>'
				}
			} catch (error) {
				console.error('Помилка завантаження страв:', error)
			} finally {
				categoryData.isLoading = false
				setTimeout(() => {
					content.style.maxHeight = content.scrollHeight + 'px'
				}, 50)
			}
		}
	} else {
		content.style.maxHeight = null
		if (icon) icon.style.transform = 'rotate(0deg)'
	}
}

// === 6. Модальне вікно страви ===
function openModal(categoryId, dishId) {
	const categoryData = fullMenuFromFirebase[categoryId]
	if (!categoryData) return

	currentDish = categoryData.items.find(dish => dish.id === dishId)
	if (!currentDish) return

	quantity = 1
	const modal = document.getElementById('dishModal')

	document.getElementById('modalImage').src = currentDish.image
	document.getElementById('modalTitle').textContent =
		currentDish.nameUk || currentDish.name
	document.getElementById('modalWeight').textContent = currentDish.weight || '-'
	document.getElementById('modalTime').textContent = currentDish.time || '-'
	document.getElementById('modalDescription').textContent =
		currentDish.description || ''
	document.getElementById('quantity').textContent = quantity

	updatePrice()
	modal.classList.add('active')
}

function closeModal() {
	document.getElementById('dishModal').classList.remove('active')
}

// === 7. Контакти та ціна ===
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
	const totalPrice = (currentDish.price * quantity).toFixed(2)
	document.getElementById('modalPrice').textContent = totalPrice
}

// === 8. Ініціалізація ===
document.addEventListener('DOMContentLoaded', () => {
	loadMenuFromFirebase()

	const dishModal = document.getElementById('dishModal')
	const infoModal = document.getElementById('infoModal')

	dishModal.addEventListener(
		'click',
		e => e.target === dishModal && closeModal(),
	)
	infoModal.addEventListener(
		'click',
		e => e.target === infoModal && closeInfoModal(),
	)
})
