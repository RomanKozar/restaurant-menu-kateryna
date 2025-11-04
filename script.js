// Оптимізована версія script.js
// terser script.js -o script.min.js -c -m
//console.log('script.js завантажено') // Діагностичний лог

// Глобальна змінна для доступу до даних меню, отриманих з Firebase
// fullMenuFromFirebase тепер зберігає метадані про категорії та їхні страви після завантаження
// Формат: { categoryId: { name: 'Назва Категорії', items: [...], isLoaded: false, isLoading: false } }
let fullMenuFromFirebase = {}

let currentDish = null
let quantity = 1

// === 1. Оптимізована функція створення елементів ===
function createElement(tag, className, content) {
	const el = document.createElement(tag)
	if (className) el.className = className
	if (content) el.textContent = content
	return el
}

// === 2. Функція для отримання та відображення меню з Firebase (тільки категорій) ===
async function loadMenuFromFirebase() {
	const container = document.getElementById('menuContainer')
	const loadingMessage = document.getElementById('loading-message') // Отримаємо елемент повідомлення про завантаження

	try {
		//console.log('loadMenuFromFirebase() викликано (тільки для категорій)') // Діагностичний лог
		//console.log("db об'єкт:", db) // Діагностичний лог, перевіряємо чи db ініціалізовано

		if (loadingMessage) loadingMessage.textContent = 'Завантаження категорій...'

		// Отримуємо всі категорії з Firestore, відсортовані за полем 'order'
		const categoriesSnapshot = await db
			.collection('categories')
			.orderBy('order') // <--- ТЕПЕР СОРТУЄМО ЗА ПОРЯДКОМ!
			.get()

		//console.log('Отримано snapshot категорій:', categoriesSnapshot.docs.length) // Діагностичний лог

		if (categoriesSnapshot.empty) {
			//console.log('Категорії в Firestore не знайдено.')
			if (loadingMessage) loadingMessage.textContent = 'Меню наразі недоступне.'
			return
		}

		const categoryStructureFragment = document.createDocumentFragment()
		//console.log('Створено documentFragment для структури категорій.') // Діагностичний лог

		// Створюємо заголовки категорій та порожні контейнери для страв
		for (const categoryDoc of categoriesSnapshot.docs) {
			const categoryId = categoryDoc.id
			const categoryData = categoryDoc.data()
			const categoryDisplayName = categoryData.name

			// Ініціалізуємо запис для категорії в fullMenuFromFirebase
			fullMenuFromFirebase[categoryId] = {
				name: categoryDisplayName,
				items: [], // Страви завантажимо пізніше
				isLoaded: false,
				isLoading: false, // Флаг, щоб не робити декілька запитів одночасно
			}

			// Створюємо елементи DOM для секції категорії (заголовок та порожній контент)
			const sectionDiv = createElement('div', 'menu-section')
			const sectionHeader = createElement('div', 'section-header')
			sectionHeader.onclick = () => toggleSection(categoryId) // Використовуємо categoryId

			const sectionTitle = createElement(
				'h2',
				'section-title',
				categoryDisplayName
			)
			const toggleIcon = createElement('span', 'toggle-icon', '▼')

			sectionHeader.append(sectionTitle, toggleIcon)

			const sectionContent = createElement('div', 'section-content')
			sectionContent.id = categoryId + '-content'

			// Додавання приміток (якщо є)
			if (sectionNotes[categoryId]) {
				sectionNotes[categoryId].forEach((note, i) => {
					const noteEl = createElement(
						'p',
						i === 0 ? 'breakfast-note' : 'breakfast-note-secondary',
						note
					)
					sectionContent.appendChild(noteEl)
				})
			}

			const grid = createElement('div', 'menu-grid')
			grid.id = categoryId + '-grid' // Даємо ID для подальшого пошуку
			sectionContent.appendChild(grid) // Grid спочатку порожній
			sectionDiv.append(sectionHeader, sectionContent)
			categoryStructureFragment.appendChild(sectionDiv) // Додаємо створену секцію до фрагмента
		}

		//console.log(
		//	'Фрагмент зі структурою категорій готовий до додавання в DOM. Кількість дочірніх елементів:',
		//	categoryStructureFragment.children.length
		//) // Діагностичний лог
		container.appendChild(categoryStructureFragment) // Додаємо весь фрагмент до контейнера в HTML
		//console.log(
		//	'Фрагмент зі структурою категорій додано до контейнера. Тепер елементи grid є в DOM!'
		//) // Діагностичний лог

		if (loadingMessage) loadingMessage.style.display = 'none' // Ховаємо повідомлення про завантаження
	} catch (error) {
		console.error('Помилка завантаження категорій з Firebase:', error)
		if (container) {
			container.innerHTML =
				'<p style="text-align: center; color: red;">На жаль, виникла помилка при завантаженні категорій. Спробуйте пізніше.</p>'
		}
		if (loadingMessage) loadingMessage.style.display = 'none'
	}
}

// === 3. Локальні дані (які ми тепер отримуємо з Firebase) ===
// Ці нотатки для секцій можуть залишатися тут, якщо вони не зберігаються в Firestore.
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

// === 4. Функція для рендерингу секції (без змін, викликатиметься з toggleSection) ===
function renderSection(categoryId, gridId, items) {
	const grid = document.getElementById(gridId)
	if (!grid) {
		console.error(
			`renderSection: Елемент grid з ID "${gridId}" не знайдено. Це не повинно відбуватися.`
		)
		return
	}

	//console.log(
	//	`Рендеринг страв для секції ${categoryId} в grid "${gridId}". Кількість страв: ${items.length}`
	//) // Діагностичний лог

	const fragment = document.createDocumentFragment()

	items.forEach(dish => {
		const item = createElement('div', 'menu-item')
		item.onclick = () => openModal(categoryId, dish.id) // Використовуємо dish.id

		const img = createElement('img')
		img.src = dish.image
		img.alt = dish.nameUk || dish.name
		img.loading = 'lazy'

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

	//console.log(
	//	`Grid '${gridId}' готовий до додавання фрагмента страв. Кількість страв у фрагменті:`,
	//	fragment.children.length
	//) // Діагностичний лог
	grid.appendChild(fragment) // Додаємо фрагмент страв до сітки категорії
	//console.log(`Страви додано до grid '${gridId}'.`) // Діагностичний лог
}

// === 5. Функція перемикання секції (ОНОВЛЕНО для Lazy Loading) ===
async function toggleSection(categoryId) {
	const content = document.getElementById(categoryId + '-content')
	if (!content) return

	const header = content.previousElementSibling
	const icon = header.querySelector('.toggle-icon')
	const grid = document.getElementById(categoryId + '-grid') // Отримуємо посилання на сітку

	content.classList.toggle('open')

	if (content.classList.contains('open')) {
		// Секція відкривається
		content.style.maxHeight = content.scrollHeight + 'px' // Розширюємо, щоб вмістити контент
		if (icon) icon.style.transform = 'rotate(180deg)' // Обертаємо іконку

		// --- ЛОГІКА ЛІНИВОГО ЗАВАНТАЖЕННЯ ---
		const categoryData = fullMenuFromFirebase[categoryId]
		if (categoryData && !categoryData.isLoaded && !categoryData.isLoading) {
			categoryData.isLoading = true // Встановлюємо флаг завантаження

			// Відображаємо тимчасове повідомлення "Завантаження..." у сітці
			if (grid)
				grid.innerHTML =
					'<p style="text-align: center; margin-top: 15px;">Завантаження страв...</p>'
			//console.log(
			//	`Починаємо ліниве завантаження страв для категорії: ${categoryId}`
			//)

			try {
				const itemsSnapshot = await db
					.collection('categories')
					.doc(categoryId)
					.collection('items')
					.get()

				categoryData.items = [] // Очищаємо, якщо раніше були порожні
				if (!itemsSnapshot.empty) {
					itemsSnapshot.forEach(itemDoc => {
						const itemData = itemDoc.data()
						itemData.id = itemDoc.id // Додаємо ID документа
						categoryData.items.push(itemData)
					})
				}
				categoryData.isLoaded = true // Позначаємо, що страви завантажені
				//console.log(
				//	`Ліниве завантаження завершено для категорії ${categoryId}. Завантажено ${categoryData.items.length} страв.`
				//)

				// Очищаємо повідомлення "Завантаження..." та рендеримо страви
				if (grid) grid.innerHTML = '' // Очищаємо вміст сітки
				if (categoryData.items.length > 0) {
					renderSection(categoryId, categoryId + '-grid', categoryData.items)
				} else {
					if (grid)
						grid.innerHTML =
							'<p style="text-align: center; margin-top: 15px;">У цій категорії поки що немає страв.</p>'
				}
			} catch (error) {
				console.error(
					`Помилка лінивого завантаження страв для категорії ${categoryId}:`,
					error
				)
				if (grid)
					grid.innerHTML =
						'<p style="text-align: center; color: red;">Помилка завантаження страв.</p>'
			} finally {
				categoryData.isLoading = false // Скидаємо флаг завантаження
				// Перераховуємо max-height, якщо вміст змінився після завантаження страв
				// Це потрібно зробити з таймаутом, щоб браузер мав час відрендерити елементи
				setTimeout(() => {
					content.style.maxHeight = content.scrollHeight + 'px'
				}, 0)
			}
		} else if (categoryData && categoryData.isLoaded) {
			// Якщо вже завантажено, просто перераховуємо висоту для коректної анімації
			setTimeout(() => {
				content.style.maxHeight = content.scrollHeight + 'px'
			}, 0)
		}
	} else {
		// Секція закривається
		content.style.maxHeight = null // Згортаємо
		if (icon) icon.style.transform = 'rotate(0deg)' // Повертаємо іконку назад
	}
}

// === 6. Функції модального вікна страви (ОНОВЛЕНО) ===
function openModal(categoryId, dishId) {
	const categoryData = fullMenuFromFirebase[categoryId]
	if (!categoryData || !categoryData.isLoaded) {
		// Додаткова перевірка: чи завантажені страви
		console.error(`Категорія ${categoryId} або її страви не завантажені.`)
		return
	}
	currentDish = categoryData.items.find(dish => dish.id === dishId)

	if (!currentDish) {
		console.error(
			`Страва з ID ${dishId} у категорії ${categoryId} не знайдена в завантажених даних.`
		)
		return
	}

	quantity = 1

	const modal = document.getElementById('dishModal')
	document.getElementById('modalImage').src = currentDish.image
	document.getElementById('modalTitle').textContent =
		currentDish.nameUk || currentDish.name
	document.getElementById('modalWeight').textContent =
		currentDish.weight || 'N/A'
	document.getElementById('modalTime').textContent = currentDish.time || 'N/A'
	document.getElementById('modalDescription').textContent =
		currentDish.description
	document.getElementById('quantity').textContent = quantity
	updatePrice()

	modal.classList.add('active')
}

function closeModal() {
	document.getElementById('dishModal').classList.remove('active')
}

// === 7. Функції модального вікна інформації (без змін) ===
function openInfoModal() {
	document.getElementById('infoModal').classList.add('active')
}

function closeInfoModal() {
	document.getElementById('infoModal').classList.remove('active')
}

// === 8. Функції контролю кількості та ціни (без змін) ===
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

// === 9. Делегування подій та запуск ===
document.addEventListener('DOMContentLoaded', () => {
	//console.log('DOMContentLoaded спрацював') // Діагностичний лог
	loadMenuFromFirebase() // Тепер завантажуємо меню з Firebase

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
