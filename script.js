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
let imageObserver = null
const categoryLoadPromises = new Map()
const prefetchedModalImages = new Set()
const priceFormatter = new Intl.NumberFormat('uk-UA', {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
})
const FALLBACK_DISH_IMAGE = 'images/image.png'
const IMAGE_PLACEHOLDER =
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23d8d8d8'/%3E%3C/svg%3E"
const ui = {
	menuContainer: null,
	loadingMessage: null,
	dishModal: null,
	infoModal: null,
	infoBtn: null,
	closeDishModalBtn: null,
	closeInfoModalBtn: null,
	increaseQtyBtn: null,
	decreaseQtyBtn: null,
	modalImage: null,
	modalTitle: null,
	modalWeight: null,
	modalTime: null,
	modalDescription: null,
	quantity: null,
	modalPrice: null,
}

// === 1. Допоміжна функція створення елементів ===
function createElement(tag, className, content) {
	const el = document.createElement(tag)
	if (className) el.className = className
	if (content) el.textContent = content
	return el
}

function extractNumericOrder(rawId) {
	return Number.parseInt(String(rawId || '').replace(/\D/g, ''), 10) || 0
}

function initDomCache() {
	ui.menuContainer = document.getElementById('menuContainer')
	ui.loadingMessage = document.getElementById('loading-message')
	ui.dishModal = document.getElementById('dishModal')
	ui.infoModal = document.getElementById('infoModal')
	ui.infoBtn = document.getElementById('infoBtn')
	ui.closeDishModalBtn = document.getElementById('closeDishModalBtn')
	ui.closeInfoModalBtn = document.getElementById('closeInfoModalBtn')
	ui.increaseQtyBtn = document.getElementById('increaseQtyBtn')
	ui.decreaseQtyBtn = document.getElementById('decreaseQtyBtn')
	ui.modalImage = document.getElementById('modalImage')
	ui.modalTitle = document.getElementById('modalTitle')
	ui.modalWeight = document.getElementById('modalWeight')
	ui.modalTime = document.getElementById('modalTime')
	ui.modalDescription = document.getElementById('modalDescription')
	ui.quantity = document.getElementById('quantity')
	ui.modalPrice = document.getElementById('modalPrice')
}

function initImageObserver() {
	if (!('IntersectionObserver' in window)) return
	imageObserver = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) return
				loadDeferredImage(entry.target)
				imageObserver.unobserve(entry.target)
			})
		},
		{
			rootMargin: '250px 0px',
			threshold: 0.01,
		},
	)
}

function getOptimizedImageUrl(rawUrl, width = 320, quality = 75) {
	if (!rawUrl) return FALLBACK_DISH_IMAGE

	try {
		const url = new URL(rawUrl)

		// Unsplash підтримує параметри трансформації прямо в URL.
		if (url.hostname.includes('images.unsplash.com')) {
			url.searchParams.set('w', String(width))
			url.searchParams.set('q', String(quality))
			url.searchParams.set('auto', 'format')
			url.searchParams.set('fit', 'crop')
		}

		return url.toString()
	} catch {
		return rawUrl
	}
}

function isUnsplashUrl(rawUrl) {
	try {
		return new URL(rawUrl).hostname.includes('images.unsplash.com')
	} catch {
		return false
	}
}

function buildUnsplashSrcSet(rawUrl) {
	if (!isUnsplashUrl(rawUrl)) return ''
	const widths = [160, 240, 320]
	return widths
		.map(size => `${getOptimizedImageUrl(rawUrl, size, 72)} ${size}w`)
		.join(', ')
}

function loadDeferredImage(img) {
	const { src } = img.dataset
	if (!src) return

	img.src = src
	img.removeAttribute('data-src')
}

function observeOrLoadImage(img) {
	if (imageObserver) {
		imageObserver.observe(img)
		return
	}

	loadDeferredImage(img)
}

async function getSnapshotWithCacheFallback(queryRef) {
	try {
		// Спочатку беремо актуальні дані з сервера, щоб бачити свіжі зміни після імпорту.
		return await queryRef.get({ source: 'server' })
	} catch (serverError) {
		// Якщо мережа недоступна - fallback на кеш.
		try {
			return await queryRef.get({ source: 'cache' })
		} catch {
			// Якщо немає і кешу, кидаємо початкову помилку мережі.
			throw serverError
		}
	}
}

function createDishImage(dish) {
	const img = createElement('img')
	img.src = IMAGE_PLACEHOLDER
	img.dataset.src = getOptimizedImageUrl(dish.image, 240)
	const srcSet = buildUnsplashSrcSet(dish.image)
	if (srcSet) {
		img.srcset = srcSet
		img.sizes = '(max-width: 720px) 70px, 80px'
	}
	img.alt = dish.nameUk || dish.name
	img.loading = 'lazy'
	img.decoding = 'async'
	img.fetchPriority = 'low'
	img.width = 80
	img.height = 80
	img.onerror = () => {
		img.onerror = null
		img.src = FALLBACK_DISH_IMAGE
	}
	observeOrLoadImage(img)
	return img
}

function preloadImage(url) {
	if (!url) return
	if (prefetchedModalImages.has(url)) return

	const image = new Image()
	image.decoding = 'async'
	image.src = url
	prefetchedModalImages.add(url)

	if (prefetchedModalImages.size > 180) {
		const firstKey = prefetchedModalImages.values().next().value
		prefetchedModalImages.delete(firstKey)
	}
}

function prefetchDishModalImage(categoryId, dishId) {
	const categoryData = fullMenuFromFirebase[categoryId]
	if (!categoryData?.itemsById) return

	const dish = categoryData.itemsById.get(dishId)
	if (!dish?.image) return

	preloadImage(getOptimizedImageUrl(dish.image, 900, 82))
}

// === 2. Завантаження категорій при старті ===
async function loadMenuFromFirebase() {
	const container = ui.menuContainer
	const loadingMessage = ui.loadingMessage

	try {
		if (loadingMessage) loadingMessage.textContent = 'Завантаження категорій...'

		const categoriesQuery = db
			.collection('categories')
			.orderBy('order')
		const categoriesSnapshot = await getSnapshotWithCacheFallback(categoriesQuery)

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
				itemsById: new Map(),
				isLoaded: false,
				isLoading: false,
			}

			const sectionDiv = createElement('div', 'menu-section')
			const sectionHeader = createElement('div', 'section-header')
			sectionHeader.dataset.categoryId = categoryId

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

async function loadCategoryItems(categoryId) {
	const categoryData = fullMenuFromFirebase[categoryId]
	if (!categoryData) return []
	if (categoryData.isLoaded) return categoryData.items

	const existingPromise = categoryLoadPromises.get(categoryId)
	if (existingPromise) return existingPromise

	const loadPromise = (async () => {
		categoryData.isLoading = true

		try {
			const itemsQuery = db
				.collection('categories')
				.doc(categoryId)
				.collection('items')
			const itemsSnapshot = await getSnapshotWithCacheFallback(itemsQuery)

			const items = []
			const itemsById = new Map()

			itemsSnapshot.forEach(itemDoc => {
				const data = itemDoc.data()
				data.id = itemDoc.id
				data._sortOrder = extractNumericOrder(data.id)
				items.push(data)
				itemsById.set(data.id, data)
			})

			items.sort((a, b) => a._sortOrder - b._sortOrder)

			categoryData.items = items
			categoryData.itemsById = itemsById
			categoryData.isLoaded = true

			return items
		} finally {
			categoryData.isLoading = false
			categoryLoadPromises.delete(categoryId)
		}
	})()

	categoryLoadPromises.set(categoryId, loadPromise)
	return loadPromise
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
		item.dataset.categoryId = categoryId
		item.dataset.dishId = dish.id

		const img = createDishImage(dish)

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
			`₴ ${priceFormatter.format(dish.price)}`,
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
		if (categoryData && !categoryData.isLoaded) {
			if (grid)
				grid.innerHTML =
					'<p style="text-align:center; padding:20px;">Завантаження страв...</p>'

			try {
				const items = await loadCategoryItems(categoryId)
				if (grid) grid.innerHTML = ''

				if (items.length > 0) {
					renderSection(categoryId, categoryId + '-grid', items)
				} else {
					if (grid)
						grid.innerHTML =
							'<p style="text-align:center;">Поки що немає страв.</p>'
				}
			} catch (error) {
				console.error('Помилка завантаження страв:', error)
			} finally {
				requestAnimationFrame(() => {
					// Якщо користувач закрив секцію під час async-завантаження, не розкриваємо її знову.
					if (!content.classList.contains('open')) return
					content.style.maxHeight = content.scrollHeight + 'px'
				})
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

	currentDish = categoryData.itemsById?.get(dishId)
	if (!currentDish) return

	quantity = 1
	const modal = ui.dishModal
	const modalImage = ui.modalImage
	modalImage.loading = 'eager'
	modalImage.decoding = 'async'
	modalImage.fetchPriority = 'high'
	modalImage.src = getOptimizedImageUrl(currentDish.image, 900, 82)
	modalImage.onerror = () => {
		modalImage.onerror = null
		modalImage.src = FALLBACK_DISH_IMAGE
	}
	ui.modalTitle.textContent = currentDish.nameUk || currentDish.name
	ui.modalWeight.textContent = currentDish.weight || '-'
	ui.modalTime.textContent = currentDish.time || '-'
	ui.modalDescription.textContent = currentDish.description || ''
	ui.quantity.textContent = quantity

	updatePrice()
	modal.classList.add('active')
}

function closeModal() {
	ui.dishModal.classList.remove('active')
}

// === 7. Контакти та ціна ===
function openInfoModal() {
	ui.infoModal.classList.add('active')
}
function closeInfoModal() {
	ui.infoModal.classList.remove('active')
}

function increaseQuantity() {
	quantity++
	ui.quantity.textContent = quantity
	updatePrice()
}
function decreaseQuantity() {
	if (quantity > 1) {
		quantity--
		ui.quantity.textContent = quantity
		updatePrice()
	}
}

function updatePrice() {
	if (!currentDish || !ui.modalPrice) return
	const totalPrice = currentDish.price * quantity
	ui.modalPrice.textContent = priceFormatter.format(totalPrice)
}

// === 8. Ініціалізація ===
function bindUiEvents() {
	if (ui.menuContainer) {
		ui.menuContainer.addEventListener('click', e => {
			const header = e.target.closest('.section-header')
			if (header && ui.menuContainer.contains(header)) {
				const { categoryId } = header.dataset
				if (categoryId) toggleSection(categoryId)
				return
			}

			const menuItem = e.target.closest('.menu-item')
			if (menuItem && ui.menuContainer.contains(menuItem)) {
				const { categoryId, dishId } = menuItem.dataset
				if (categoryId && dishId) openModal(categoryId, dishId)
			}
		})

		ui.menuContainer.addEventListener('mouseover', e => {
			const menuItem = e.target.closest('.menu-item')
			if (!menuItem || !ui.menuContainer.contains(menuItem)) return

			const { categoryId, dishId } = menuItem.dataset
			if (categoryId && dishId) prefetchDishModalImage(categoryId, dishId)
		})
	}

	ui.infoBtn?.addEventListener('click', openInfoModal)
	ui.closeDishModalBtn?.addEventListener('click', closeModal)
	ui.closeInfoModalBtn?.addEventListener('click', closeInfoModal)
	ui.increaseQtyBtn?.addEventListener('click', increaseQuantity)
	ui.decreaseQtyBtn?.addEventListener('click', decreaseQuantity)

	if (ui.dishModal) {
		ui.dishModal.addEventListener('click', e => {
			if (e.target === ui.dishModal) closeModal()
		})
	}
	if (ui.infoModal) {
		ui.infoModal.addEventListener('click', e => {
			if (e.target === ui.infoModal) closeInfoModal()
		})
	}
}

document.addEventListener('DOMContentLoaded', () => {
	initDomCache()
	initImageObserver()
	bindUiEvents()
	loadMenuFromFirebase()
})
