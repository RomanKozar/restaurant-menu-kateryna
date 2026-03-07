const menuData = {
	troutFishing: [
		{
			id: 'troutFishing1',
			nameUk: 'Вилов форелі самостійно',
			price: 49,
			weight: '100 г',
			time: '20 хв',
			description:
				'Ви можете самостійно виловити свіжу форель у нашому ставку — це справжнє задоволення для любителів активного відпочинку. Риба відразу потрапляє на кухню для подальшого приготування або очищення за вашим бажанням.',
			image: 'images/troutFishing/troutFishing.webp',
		},
		{
			id: 'troutFishing2',
			nameUk: 'Чистка форелі',
			price: 20,
			weight: '-',
			time: '10 хв',
			description:
				'Наші кухарі професійно очистять виловлену вами форель, щоб ви могли забрати її з собою. Ідеально для тих, хто цінує зручність і чистоту.',
			image: 'images/troutFishing/сleaningTrout.webp',
		},
		{
			id: 'troutFishing3',
			nameUk: 'Приготування форелі зі спеціями',
			price: 40,
			weight: '100 г',
			time: '40 хв',
			description:
				'Соковита форель, приготована зі спеціями для риби, меленим перцем та сіллю. Просте, але вишукане поєднання, яке підкреслює природний смак свіжої риби.',
			image: 'images/troutFishing/troutWithSpices.webp',
		},
		{
			id: 'troutFishing4',
			nameUk: 'Приготування форелі з овочами',
			price: 45,
			weight: '100 г',
			time: '40 хв',
			description:
				'Ніжна форель у поєднанні з овочевим жульєном із болгарського перцю, цибулі, кабачка, моркви та баклажану. Страва насичена ароматами літа й чудово смакує як основна.',
			image: 'images/troutFishing/troutWithVegetables.webp',
		},
		{
			id: 'troutFishing5',
			nameUk: 'Приготування форелі з цибулею',
			price: 45,
			weight: '100 г',
			time: '40 хв',
			description:
				'Форель, запечена з маринованою цибулею, зеленню, сіллю та перцем. Страва має приємну пікантність і насичений аромат, який чудово доповнює ніжне м’ясо риби.',
			image: 'images/troutFishing/troutWithOnion.webp',
		},
		{
			id: 'troutFishing6',
			nameUk: 'Приготування форелі з грибами',
			price: 50,
			weight: '100 г',
			time: '40 хв',
			description:
				'Делікатна форель із двома видами грибів — білими та шампіньйонами, тушкованими у вершковому соусі з легкою ноткою солі. Вишуканий смак для справжніх гурманів.',
			image: 'images/troutFishing/troutWithMushrooms.webp',
		},
	],
	breakfast: [
		{
			id: 'breakfast1',
			nameUk: 'Сніданок №1',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description: 'Яєшня з сосискою, сиром та овочами',
			image: 'images/breakfast/breakfast1.webp',
		},
		{
			id: 'breakfast2',
			nameUk: 'Сніданок №2',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description: 'Відварені яйця, тости з маслом, сиром, ковбасою та овочами',
			image: 'images/breakfast/breakfast2.webp',
		},
		{
			id: 'breakfast3',
			nameUk: 'Сніданок №3',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description: 'Домашні сирники зі сметаною та джемом',
			image: 'images/breakfast/breakfast3.webp',
		},
		{
			id: 'breakfast4',
			nameUk: 'Сніданок №4',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description: 'Смачні творожні гомбовці зі сметаною та шоколадом',
			image: 'images/breakfast/breakfast4.webp',
		},
		{
			id: 'breakfast5',
			nameUk: 'Сніданок №5',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description: 'Яєшня бовтунка з шинкою, сиром та овочами',
			image: 'images/breakfast/breakfast5.webp',
		},
		{
			id: 'breakfast6',
			nameUk: 'Сніданок №6',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description: 'Омлет з сосискою, сиром та овочами',
			image: 'images/breakfast/breakfast6.webp',
		},
		{
			id: 'breakfast7',
			nameUk: 'Сніданок №7',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description:
				'Смачна каша на вибір: рисова, гречана, вівсяна, з родзинками та фруктами',
			image: 'images/breakfast/breakfast7.webp',
		},
		{
			id: 'breakfast8',
			nameUk: 'Сніданок №8',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description: 'Млинці з домашнім сиром або млинці з джемом',
			image: 'images/breakfast/breakfast8.webp',
		},
	],
	troutDishes: [
		{
			id: 'troutDish1',
			nameUk: 'Шеф салат “Катерина”',
			price: 247,
			weight: '350 г',
			time: '20 хв',
			description:
				'Фірмовий салат із міксу свіжих овочів, копченої форелі, яблука та маринованої цибулі під фірмовим соусом “Катерина” з нотками лимона та бальзаміку.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2300CED1' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Шеф салат “Катерина”</text></svg>",
		},
		{
			id: 'troutDish2',
			nameUk: 'Вареники з начинкою з форелі',
			price: 134,
			weight: '200 г',
			time: '20 хв',
			description:
				'На порцію подається 11 вареників з ніжною начинкою з форелі, зелені та спецій. Подаються з вершковим маслом і соусом “Катерина”.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2300CED1' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Вареники з начинкою з форелі</text></svg>",
		},
		{
			id: 'troutDish3',
			nameUk: 'Фунчоза з форелі',
			price: 275,
			weight: '300 г',
			time: '30 хв',
			description:
				'Рисова локшина з овочами, соєвим та медово-гірчичним соусом, подається з філе форелі у кунжутній паніровці. Страва з яскравим східним смаком.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2300CED1' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Фунчоза з форелі</text></svg>",
		},
		{
			id: 'troutDish4',
			nameUk: 'Форель зі спеціями',
			price: 105,
			weight: '100 г',
			time: '35 хв',
			description:
				'Ніжне філе форелі, приправлене ароматними спеціями, сіллю та свіжомеленим перцем. Простота, що розкриває природний смак риби.',
			image: 'images/troutDishes/forel-z-speziya.jpg',
		},
		{
			id: 'troutDish5',
			nameUk: 'Форель з цибулею',
			price: 109,
			weight: '100 г',
			time: '35 хв',
			description:
				'Соковита форель із маринованою цибулею, зеленню та спеціями. Ароматна й ніжна страва для справжніх гурманів.',
			image: 'images/troutDishes/forel-z-zibylya.jpg',
		},
		{
			id: 'troutDish6',
			nameUk: 'Форель з овочами',
			price: 118,
			weight: '100 г',
			time: '35 хв',
			description:
				'Апетитна форель, запечена з овочевим жульєном із перцю, цибулі, кабачка, моркви та баклажану. Смачно й корисно.',
			image: 'images/troutDishes/forel-z-ovochi.jpg',
		},
		{
			id: 'troutDish7',
			nameUk: 'Форель з грибами',
			price: 135,
			weight: '100 г',
			time: '35 хв',
			description:
				'Ніжне філе форелі під вершковим соусом із білих грибів і шампіньйонів. Вишукане поєднання смаку та аромату.',
			image: 'images/troutDishes/forel-z-gribami.jpg',
		},
		{
			id: 'troutDish8',
			nameUk: 'Форель гарячого копчення',
			price: 155,
			weight: '100 г',
			time: '35 хв',
			description:
				'Форель гарячого копчення власного приготування. Готується протягом трьох годин, має насичений аромат і м’яку текстуру.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2300CED1' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Форель гарячого копчення</text></svg>",
		},
		{
			id: 'troutDish9',
			nameUk: 'Філе у вершково-винному соусі',
			price: 165,
			weight: '100 г',
			time: '35 хв',
			description:
				'Ніжне філе форелі у соусі з білого вина, вершкового масла та вершків. Делікатна страва з витонченим ароматом.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2300CED1' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Філе у вершково-винному соусі</text></svg>",
		},
	],
	coldAppetizers: [
		{
			id: 'coldAppetizer1',
			nameUk: 'Закарпатські помазанки',
			price: 137,
			weight: '180 г',
			time: '15 хв',
			description:
				'Три види традиційних закарпатських намазок по 50 г кожна: з сала, зі шкварками та сирна з творогом, паприкою і спеціями. Подаються з хрусткими грінками.',
			image: '/images/coldAppetizers/zakarpanski-pomazanki.webp',
		},
		{
			id: 'coldAppetizer2',
			nameUk: 'Тарілка до горілки',
			price: 235,
			weight: '250 г',
			time: '15 хв',
			description:
				'Апетитна тарілка з трьох видів сала, подається з гірчицею, свіжою цибулею, часником та зеленню.',
			image: '/images/coldAppetizers/tarilka-do-gorilku.webp',
		},
		{
			id: 'coldAppetizer3',
			nameUk: 'Сирне плато',
			price: 258,
			weight: '180 г',
			time: '15 хв',
			description:
				'Асорті сирів: моцарелла, фета та твердий сир, подається з медом, свіжим яблуком і міксом горіхів.',
			image: '/images/coldAppetizers/sirne-plato.webp',
		},
	],
	beerSnacks: [
		{
			id: 'beerSnack1',
			nameUk: 'Грінки з часником',
			price: 65,
			weight: '100 г',
			time: '15 хв',
			description:
				'Хрусткі грінки з ароматом часнику, обсмажені до золотистої скоринки.',
			image: '/images/beerSnacks/grinki-z-chasnikom.webp',
		},
		{
			id: 'beerSnack2',
			nameUk: 'Цибулеві кільця',
			price: 105,
			weight: '100 г',
			time: '15 хв',
			description:
				'Соковиті цибульні кільця в хрусткій паніровці, подаються з соусом на вибір.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFA500' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Цибулеві кільця</text></svg>",
		},
		{
			id: 'beerSnack3',
			nameUk: 'Курячі нагетси',
			price: 135,
			weight: '100 г',
			time: '15 хв',
			description:
				'Ніжні шматочки курячого філе в золотистій паніровці, ідеальні з соусом BBQ або часниковим.',
			image: '/images/beerSnacks/kyryachi-nagetsu.webp',
		},
		{
			id: 'beerSnack4',
			nameUk: 'Сир “косичка”',
			price: 70,
			weight: '100 г',
			time: '10 хв',
			description:
				'Сирна косичка з ніжним смаком, подається з соусом за вибором.',
			image: '/images/beerSnacks/sir-kosichka.webp',
		},
		{
			id: 'beerSnack5',
			nameUk: 'Чіпси з лавашу',
			price: 65,
			weight: '100 г',
			time: '8 хв',
			description:
				'Хрусткі домашні чипси з лавашу з ароматними спеціями, ідеальні до пива або соусу.',
			image: '/images/beerSnacks/chipsi-z-lavachu.webp',
		},
		{
			id: 'beerSnack6',
			nameUk: 'Снек-тарілка',
			price: 295,
			weight: '400 г',
			time: '20 хв',
			description:
				'Асорті: курячі нагетси, сир фрі, цибулеві кільця, картопля фрі',
			image: '/images/beerSnacks/snek-tarilka.webp',
		},
		{
			id: 'beerSnack7',
			nameUk: 'Пивна тарілка',
			price: 190,
			weight: '250 г',
			time: '15 хв',
			description: 'Закуски до пива: чипси з лавашу, сир косичка, горішки',
			image: '/images/beerSnacks/pivna-tarilka.webp',
		},
	],
	firstCourses: [
		{
			id: 'firstCourse1',
			nameUk: 'Бограч “а-ля Катерина”',
			price: 149,
			weight: '350 г',
			time: '12 хв',
			description:
				'Ароматний угорський гуляш зі свинини з картоплею, морквою, болгарським перцем, томатами та спеціями, доповнений баварською сосискою та свинячим салом, прикрашений свіжим кропом і петрушкою.',
			image: '/images/firstCourses/bograh.webp',
		},
		{
			id: 'firstCourse2',
			nameUk: 'Традиційний український борщик',
			price: 118,
			weight: '350 г',
			time: '12 хв',
			description:
				'Насичений український борщ із картоплею, капустою, морквою, буряком та цибулею, з відварною корейкою, подається зі сметаною та свіжою зеленню.',
			image: '/images/firstCourses/borh.webp',
		},
		{
			id: 'firstCourse3',
			nameUk: 'Куряча поливка з локшиною',
			price: 94,
			weight: '350 г',
			time: '12 хв',
			description:
				'Легкий та ароматний курячий бульйон із локшиною, морквою та свіжою зеленню кропу і петрушки, приправлений меленим перцем.',
			image: '/images/firstCourses/kyracha-polivka.webp',
		},
		{
			id: 'firstCourse4',
			nameUk: 'Крем-суп з двох видів грибів',
			price: 138,
			weight: '350 г',
			time: '12 хв',
			description:
				'Ніжний крем-суп із білих грибів та шампіньйонів на основі вершків і курячого бульйону, з обсмаженою цибулею, грінками та оливковою олією, прикрашений свіжою зеленню.',
			image: 'images/firstCourses/creamMushroomSoup.webp',
		},
	],
	salads: [
		{
			id: 'salad1',
			nameUk: 'Капустяний салат',
			price: 87,
			weight: '150 г',
			time: '12 хв',
			description:
				'Свіжа капуста та хрустка морква, заправлені ароматною олією, сіллю та меленим перцем.',
			image: '/images/salads/kapystani.webp',
		},
		{
			id: 'salad2',
			nameUk: 'Грецький салат з фетою',
			price: 185,
			weight: '300 г',
			time: '15 хв',
			description:
				'Соковиті томати, свіжі огірки та болгарський перець, мікс салатів, оливки, ніжна фета та оливкова олія - справжній смак Греції.',
			image: '/images/salads/hrezkiu.webp',
		},
		{
			id: 'salad3',
			nameUk: 'Шопський з бринзою',
			price: 189,
			weight: '300 г',
			time: '15 хв',
			description:
				'Соковиті овочі, мікс салатів та ароматна бринза – класичний болгарський смак у кожній ложці.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2380C080' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Шопський з бринзою</text></svg>",
		},
		{
			id: 'salad4',
			nameUk: 'Салат “Карпатський”',
			price: 230,
			weight: '300 г',
			time: '15 хв',
			description:
				'Апетитне поєднання вареного яйця, курячого стейку, маринованих грибів, цибулі, соусу “Цезар” та твердого сиру з горіховою ноткою.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2380C080' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Салат “Карпатський”</text></svg>",
		},
		{
			id: 'salad5',
			nameUk: 'Салат “Цезар” класичний',
			price: 215,
			weight: '350 г',
			time: '15 хв',
			description:
				'Світлий мікс салатів, соковитий курячий стейк, грінки, сир пармезан та ніжний соус бальзамік – класика, яка завжди смакує.',
			image: '/images/salads/zezar.webp',
		},
		{
			id: 'salad6',
			nameUk: 'Салат “Цезар” з лососем',
			price: 245,
			weight: '350 г',
			time: '15 хв',
			description:
				'Мікс салатів з ніжним лососем, грінками, сиром пармезан, яйцем та соусом бальзамік – витончений смак для гурманів.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2380C080' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Салат “Цезар” з лососем</text></svg>",
		},
		{
			id: 'salad7',
			nameUk: 'Теплий салат з курячою печінкою',
			price: 195,
			weight: '300 г',
			time: '20 хв',
			description:
				'Теплий мікс салатів з апельсином, томатами, сухариками, маринованою цибулею, соусом “Цезар” та ніжною курячою печінкою з кунжутом.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2380C080' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Теплий салат з курячою печінкою</text></svg>",
		},
	],
	sides: [
		{
			id: 'side1',
			nameUk: 'Крумплі по-домашньому',
			price: 95,
			weight: '200 г',
			time: '25 хв',
			description:
				'Смажена картопля на сковороді з цибулею, часником, спеціями та шкварками.',
			image: '/images/sides/kartoplya-po-domachomy.webp',
		},
		{
			id: 'side2',
			nameUk: 'Крумплі пюре',
			price: 95,
			weight: '200 г',
			time: '25 хв',
			description: 'Картопляне пюре з маслом.',
			image: '/images/sides/pyre.webp',
		},
		{
			id: 'side3',
			nameUk: 'Картопля фрі',
			price: 95,
			weight: '200 г',
			time: '25 хв',
			description: 'Хрустка картопля фрі.',
			image: '/images/sides/kartoplya-fri.webp',
		},
		{
			id: 'side4',
			nameUk: 'Рис з овочами',
			price: 87,
			weight: '200 г',
			time: '20 хв',
			description: 'Сезонні овочі: кукурудза, горошок, перець, цибуля, морква.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFD700' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Рис з овочами</text></svg>",
		},
		{
			id: 'side5',
			nameUk: 'Каша гречана',
			price: 87,
			weight: '200 г',
			time: '25 хв',
			description: 'Гречана крупа з маслом.',
			image: '/images/sides/grechka.webp',
		},
	],
	hotAppetizers: [
		{
			id: 'hotAppetizers1',
			nameUk: 'Закарпатська цмунда',
			price: 235,
			weight: '300 г',
			time: '30 хв',
			description:
				'Картопляна маса з яйцем, борошном та спеціями; начинка: білі гриби і курячий стейк; вершковий соус, зелень (кріп, петрушка).',
			image: '/images/hotAppetizers/zakarpanzka-zmynda.webp',
		},
		{
			id: 'hotAppetizers2',
			nameUk: 'Банош з шкварками та бринзою',
			price: 147,
			weight: '300 г',
			time: '25 хв',
			description:
				'Кукурудзяна крупа з маслом, сметаною та вершками; подається зі шкварками і бринзою.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Банош з шкварками та бринзою</text></svg>",
		},
		{
			id: 'hotAppetizers3',
			nameUk: 'Банош з грибами та бринзою',
			price: 165,
			weight: '300 г',
			time: '25 хв',
			description:
				'Кукурудзяна крупа з маслом, сметаною та вершками; подається з обсмаженими шампіньйонами і бринзою.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Банош з грибами та бринзою</text></svg>",
		},
		{
			id: 'hotAppetizers4',
			nameUk: 'Сковорідка "Мисливська"',
			price: 245,
			weight: '300 г',
			time: '35 хв',
			description:
				'Картопля, перець, цибуля, морква, свинна корейка, мисливська ковбаска, томатний соус, BBQ, голландський сир, зелень.',
			image: '/images/hotAppetizers/skovoridka-muslivsca.webp',
		},
		{
			id: 'hotAppetizers5',
			nameUk: 'Сковорідка "Куряча"',
			price: 205,
			weight: '300 г',
			time: '35 хв',
			description:
				'Перець, кабачок, цибуля, шампіньйони, вершки, куряче філе, карі, куркума, прованські трави; подається з відварним рисом і маслом.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Сковорідка “Куряча”</text></svg>",
		},
		{
			id: 'hotAppetizers6',
			nameUk: 'Деруни з сметаною',
			price: 155,
			weight: '200 г',
			time: '30 хв',
			description: '4 деруни з картопляної маси; подаються зі сметаною.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Деруни з сметаною</text></svg>",
		},
		{
			id: 'hotAppetizers7',
			nameUk: 'Деруни з грибами в глечику',
			price: 185,
			weight: '250 г',
			time: '30 хв',
			description:
				'5 середніх дерунів із картопляної маси, яйця, борошно, сіль, перець, часник, цибуля; подаються з білими грибами, голландським сиром і вершковим соусом.',
			image: '/images/hotAppetizers/derynu-z-hribami.webp',
		},
		{
			id: 'hotAppetizers8',
			nameUk: 'Пельмені домашні',
			price: 117,
			weight: '200 г',
			time: '25 хв',
			description: 'Домашні пельмені, порція 15 штук.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Пельмені домашні</text></svg>",
		},
		{
			id: 'hotAppetizers9',
			nameUk: 'Вареники з картоплею',
			price: 97,
			weight: '200 г',
			time: '25 хв',
			description: '11 вареників з картоплею та маслом; подаються зі сметаною.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Вареники з картоплею</text></svg>",
		},
		{
			id: 'hotAppetizers10',
			nameUk: 'Вареники з вишнею',
			price: 107,
			weight: '200 г',
			time: '25 хв',
			description:
				'11 вареників з вишнею та маслом; подаються з вишневим соусом.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Вареники з вишнею</text></svg>",
		},
	],
	sauces: [
		{
			id: 'sauce1',
			nameUk: 'BBQ',
			price: 20,
			weight: '30 г',
			time: '1 хв',
			description:
				'Ароматний соус BBQ, ідеально підкреслює смак м’яса та страв на мангалі.',
			image: '/images/sauces/BBQ.webp',
		},
		{
			id: 'sauce2',
			nameUk: 'Часниковий',
			price: 20,
			weight: '30 г',
			time: '1 хв',
			description:
				'Ніжний часниковий соус, який додає стравам пікантності та аромату.',
			image: '/images/sauces/chasnikovuy.webp',
		},
		{
			id: 'sauce3',
			nameUk: 'Кетчуп',
			price: 20,
			weight: '30 г',
			time: '1 хв',
			description:
				'Класичний томатний кетчуп для доповнення будь-яких страв на мангалі.',
			image: '/images/sauces/ketzhup.webp',
		},
	],
	grillDishes: [
		{
			id: 'grillDish1',
			nameUk: 'Шашлик зі свинини',
			price: 137,
			weight: '100 г',
			time: '45 хв',
			description: 'Соковитий свинний ошийок у маринаді зі спеціями.',
			image: '/images/grillDishes/schahlik-z-svininu.webp',
		},
		{
			id: 'grillDish2',
			nameUk: 'Міні-шашлички з курячого філе',
			price: 117,
			weight: '100 г',
			time: '35 хв',
			description: 'Ніжні курячі шашлички у маринаді, соковиті та ароматні.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2395462A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Міні-шашлички з курячого філе</text></svg>",
		},
		{
			id: 'grillDish3',
			nameUk: 'Стейк зі свинини',
			price: 145,
			weight: '100 г',
			time: '45 хв',
			description: 'Свинний ошийок у маринаді зі спеціями, подається з маслом.',
			image: '/images/grillDishes/steu-z-svininu.webp',
		},
		{
			id: 'grillDish4',
			nameUk: 'Ребра свинні',
			price: 125,
			weight: '100 г',
			time: '45 хв',
			description: 'Соковиті свинні ребра зі спеціями.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2395462A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Ребра свинні</text></svg>",
		},
		{
			id: 'grillDish5',
			nameUk: 'Ковбаски купати',
			price: 127,
			weight: '100 г',
			time: '35 хв',
			description: 'Соковиті ковбаски купати, 2 шт на 100 г.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2395462A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Ковбаски купати</text></svg>",
		},
		{
			id: 'grillDish6',
			nameUk: 'Крумплі печені',
			price: 109,
			weight: '200 г',
			time: '35 хв',
			description: 'Запечена картопля з шкварками, бринзою та сіллю.',
			image: '/images/grillDishes/krympli-pechini.webp',
		},
		{
			id: 'grillDish7',
			nameUk: 'Овочі-гриль',
			price: 195,
			weight: '250 г',
			time: '35 хв',
			description:
				'Мариновані кабачки, баклажани, перець, цибуля та шампіньйони з соєвим соусом і спеціями.',
			image: '/images/grillDishes/ovochi-gril.webp',
		},
		{
			id: 'grillDish8',
			nameUk: "М'ясний колорит",
			price: 675,
			weight: '500 г',
			time: '45 хв',
			description:
				'Мікс м’яса: куряче філе (200 г), свинна корейка (200 г), ковбаски купати (100 г), подається з кетчупом.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2395462A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>М'ясний колорит</text></svg>",
		},
	],
	mainDishes: [
		{
			id: 'mainDish1',
			nameUk: 'М’ясо “по-закарпатськи”',
			price: 255,
			weight: '180 г + 150 г гарніру',
			time: '25 хв',
			description:
				'Ніжна свинна корейка, тушкована у вершковому грибному соусі з додаванням голландського сиру та ароматних спецій. Справжній закарпатський делікатес.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF4500' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>М’ясо “по-закарпатськи”</text></svg>",
		},
		{
			id: 'mainDish2',
			nameUk: 'Лечо овочеве',
			price: 175,
			weight: '180 г + 150 г гарніру',
			time: '25 хв',
			description:
				'Соковите лечо зі свіжих томатів, болгарського перцю, кабачка та цибулі, тушковане у вершках і сметані, з ароматною зеленню та спеціями. Легка та корисна страва.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF4500' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Лечо овочеве</text></svg>",
		},
		{
			id: 'mainDish3',
			nameUk: 'Домашня куряча відбивна',
			price: 215,
			weight: '100 г + 150 г гарніру',
			time: '25 хв',
			description:
				'Соковите куряче філе у хрусткій паніровці з сухарів, борошна та яйця, приправлене ароматними спеціями. Класика домашньої кухні.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF4500' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Домашня куряча відбивна</text></svg>",
		},
		{
			id: 'mainDish4',
			nameUk: 'Лоці печене',
			price: 215,
			weight: '180 г + 150 г гарніру',
			time: '25 хв',
			description:
				'Соковита свинна корейка, запечена з цибулею та паприкою, злегка підсмажена на олії. Насичений смак та аромат традиційної страви.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF4500' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Лоці печене</text></svg>",
		},
	],
	lavashGrill: [
		{
			id: 'lavashGrill1',
			nameUk: 'Доліталася',
			price: 187,
			weight: '335 г',
			time: '20 хв',
			description:
				'Склад: лаваш, курячий стейк, помідор, сир моцарела, твердий сир, соус “Цезар”. Ніжний та ситний лаваш із куркою та сирами.',
			image: '/images/lavashGrill/dolitali.webp',
		},
		{
			id: 'lavashGrill2',
			nameUk: 'Еко',
			price: 178,
			weight: '265 г',
			time: '20 хв',
			description:
				'Склад: лаваш, твердий сир, моцарела, мікс грибів (білі гриби, шампіньйони), цибуля, зелень (кріп, петрушка), соус “Цезар”. Ароматний вегетаріанський лаваш із грибами.',
			image: '/images/lavashGrill/eko.webp',
		},
		{
			id: 'lavashGrill3',
			nameUk: 'Дуже сирний',
			price: 175,
			weight: '430 г',
			time: '20 хв',
			description:
				'Склад: лаваш, сир голландський, моцарела, бринза, соус “Цезар”. Справжня насолода для поціновувачів сиру.',
			image: '/images/lavashGrill/dyhe-surni.webp',
		},
		{
			id: 'lavashGrill4',
			nameUk: 'Мисливський',
			price: 205,
			weight: '495 г',
			time: '20 хв',
			description:
				'Склад: лаваш, мисливська ковбаска, курячий стейк, помідор, болгарський перець, цибуля, твердий сир, моцарела, соус “Цезар”. Пікантний ситний лаваш із м’ясом та сиром.',
			image: '/images/lavashGrill/mislivski.webp',
		},
	],
	pizzas: [
		{
			id: 'pizza1',
			nameUk: 'Маргарита',
			price: 197,
			weight: '400 г',
			time: '25 хв',
			description:
				'Класична італійська піца на тонкому тісті з ароматним томатним соусом, соковитими помідорами та свіжим базиліком. Склад: томатний соус, сир моцарела, сир голландський, помідори, базилік.',
			image: '/images/pizzas/margarita.webp',
		},
		{
			id: 'pizza2',
			nameUk: 'Салямі',
			price: 217,
			weight: '400 г',
			time: '25 хв',
			description:
				'Піца з пікантною салямі, поєднанням двох видів сиру та ніжним томатним соусом. Склад: томатний соус, сир моцарела, сир голландський, салямі.',
			image: '/images/pizzas/salyami.webp',
		},
		{
			id: 'pizza3',
			nameUk: 'Чотири сири',
			price: 237,
			weight: '400 г',
			time: '25 хв',
			description:
				'Ніжна вершкова піца з насиченим сирним смаком. Ідеальний вибір для поціновувачів сиру. Склад: вершковий соус, сир моцарела, сир голландський, сир пармезан, сир з блакитною пліснявою.',
			image: '/images/pizzas/choturu-suri.webp',
		},
		{
			id: 'pizza4',
			nameUk: 'Гавайська',
			price: 235,
			weight: '400 г',
			time: '25 хв',
			description:
				'Соковита піца з ніжним курячим філе, ананасами та кукурудзою, що створює ідеальний баланс солодкого та солоного смаку. Склад: томатний соус, сир моцарела, сир голландський, куряче філе, ананас, кукурудза.',
			image: '/images/pizzas/havaiski.webp',
		},
		{
			id: 'pizza5',
			nameUk: 'Цезар',
			price: 245,
			weight: '400 г',
			time: '25 хв',
			description:
				'Оригінальна піца на основі популярного салату. Склад: томатний соус, сир моцарела, салат мікс, куряче філе, сир пармезан, помідори чері, соус "Цезар".',
			image: '/images/pizzas/zezar-piza.webp',
		},
		{
			id: 'pizza6',
			nameUk: 'Мисливська',
			price: 255,
			weight: '400 г',
			time: '25 хв',
			description:
				'Піца з насиченим м’ясним смаком. Склад: томатний соус, сир моцарела, сир голландський, шинка, мисливські ковбаски, купати.',
			image: '/images/pizzas/mislivska-piza.webp',
		},
	],
	desserts: [
		{
			id: 'dessert1',
			nameUk: 'Бабчині палачінти',
			price: 98,
			weight: '270 г',
			time: '15 хв',
			description:
				'Тонкі домашні млинці, які можна замовити з сиром або джемом. Склад: млинцеве тісто, сир, цукор, ваніль, або фруктовий джем на вибір. Подаються зі сметаною або вершками.',
			image: 'images/desserts/palacinky.webp',
		},
		{
			id: 'dessert2',
			nameUk: 'Сирники з сметаною або джемом',
			price: 115,
			weight: '250 г',
			time: '15 хв',
			description:
				'Ніжні домашні сирники (4 шт) з подачею сметани та джему, доповнені скибочками апельсина або яблука. Склад: сир, яйце, цукор, борошно, ваніль.',
			image: 'images/desserts/syrnyky.webp',
		},
		{
			id: 'dessert3',
			nameUk: 'Яблучний штрудель з горіхами, родзинками та пломбіром',
			price: 138,
			weight: '220 г',
			time: '15 хв',
			description:
				'Хрустке листкове тісто з ароматною начинкою з яблук, родзинок, кориці та горіхів. Подається з кулькою пломбіру. Склад: листкове тісто, яблука, родзинки, волоський горіх, кориця, цукор, морозиво.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%238B0000' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Яблучний штрудель</text></svg>",
		},
		{
			id: 'dessert4',
			nameUk: 'Закарпатські гомбовці',
			price: 105,
			weight: '300 г',
			time: '15 хв',
			description:
				'Творожні кульки на пару (7 шт) у солодкій паніровці, подаються на сметанково-шоколадній подушці з топінгом. Склад: сир, манка, яйце, цукор, борошно, паніровка, сметана, шоколадний соус.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%238B0000' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Закарпатські гомбовці</text></svg>",
		},
		{
			id: 'dessert5',
			nameUk: 'Морозиво біле класичне',
			price: 75,
			weight: '100 г',
			time: '10 хв',
			description:
				'Класичний білий пломбір із топінгом на вибір: шоколад, вишня або карамель.',
			image: '/images/desserts/morozivo-bile.webp',
		},
		{
			id: 'dessert6',
			nameUk: 'Тирамісу',
			price: 95,
			weight: '150 г',
			time: '10 хв',
			description:
				'Ніжний італійський десерт на основі маскарпоне, кави та бісквіту савоярді, посипаний какао. Склад: сир маскарпоне, яйце, цукор, бісквіт, кава, какао.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%238B0000' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Тирамісу</text></svg>",
		},
	],
	vodka: [
		{
			id: 'vodka1',
			nameUk: 'Горілка Nemiroff',
			price: 60,
			weight: '50 мл',
			time: '-',
			description:
				'Класична українська горілка з чистим смаком та м’яким післясмаком.',
			image: 'images/vodka/nemiroff.webp',
		},
		{
			id: 'vodka2',
			nameUk: 'Горілка Finlandia',
			price: 80,
			weight: '50 мл',
			time: '-',
			description:
				'Преміальна фінська горілка, що поєднує чистоту льодовикової води та зернову м’якість.',
			image: 'images/vodka/finlandia.webp',
		},
		{
			id: 'vodka3',
			nameUk: 'Наливки',
			price: 50,
			weight: '50 мл',
			time: '-',
			description:
				'Домашні наливки з вишні, журавлини, полуниці, ожини та горобини.',
			image: 'images/vodka/nalivki.webp',
		},
	],
	variousVodka: [
		{
			id: 'variousVodka1',
			nameUk: 'Коньяк Закарпатський',
			price: 65,
			weight: '50 мл',
			time: '-',
			description: 'Витриманий коньяк із благородними нотами дубу та ванілі.',
			image: 'images/variousVodka/konyak-zakarpat.webp',
		},
		{
			id: 'variousVodka2',
			nameUk: 'Becherovka',
			price: 105,
			weight: '50 мл',
			time: '-',
			description:
				'Чеський трав’яний лікер із гармонійним поєднанням спецій і кориці.',
			image: 'images/variousVodka/becherovka.webp',
		},
		{
			id: 'variousVodka3',
			nameUk: 'Jagermeister',
			price: 117,
			weight: '50 мл',
			time: '-',
			description:
				'Німецький лікер на травах з інтенсивним ароматом і легкою гірчинкою.',
			image: 'images/variousVodka/jagermeister.webp',
		},
		{
			id: 'variousVodka4',
			nameUk: 'Jameson',
			price: 149,
			weight: '50 мл',
			time: '-',
			description:
				'Ірландський віскі з нотами карамелі, дубу та ванілі, м’який і збалансований.',
			image: 'images/variousVodka/jameson.webp',
		},
	],
	wine: [
		{
			id: 'wine1',
			nameUk: 'Вино Chizay',
			price: 45,
			weight: '50 мл',
			time: '-',
			description:
				'Вино Chizay (біле, червоне; сухе або напівсолодке) з ароматом закарпатських виноградників.',
			image: 'images/wine/vino-chizay.webp',
		},
		{
			id: 'wine2',
			nameUk: 'Вино Домашнє',
			price: 30,
			weight: '50 мл',
			time: '-',
			description:
				'Домашнє червоне вино (сухе) з насиченим фруктовим смаком і легким післясмаком.',
			image: 'images/wine/vino-domashne.webp',
		},
		{
			id: 'wine3',
			nameUk: 'Просекко (розливне)',
			price: 50,
			weight: '50 мл',
			time: '-',
			description:
				'Італійське ігристе вино (сухе) з нотками яблука, груші та цитрусових.',
			image: 'images/wine/prosecco.webp',
		},
		{
			id: 'wine4',
			nameUk: 'Глінтвейн',
			price: 80,
			weight: '200 мл',
			time: '-',
			description:
				'Гарячий ароматний напій із вина, спецій, кориці та цитрусових.',
			image: 'images/wine/hliytvein.webp',
		},
		{
			id: 'wine5',
			nameUk: 'Вино Закарпатське (пляшка)',
			price: 540,
			weight: '700 мл',
			time: '-',
			description:
				'Вино Закарпатське — червоне або біле, сухе чи напівсолодке, з глибоким букетом аромату.',
			image: 'images/wine/vino-chizay.webp',
		},
		{
			id: 'wine6',
			nameUk: 'Вино Marengo (пляшка)',
			price: 440,
			weight: '700 мл',
			time: '-',
			description: 'Ігристе вино Marengo — біле або червоне, легке і святкове.',
			image: 'images/wine/vino-marengo.webp',
		},
	],
	beer: [
		{
			id: 'beer1',
			nameUk: 'Пиво розливне світле Krusovice',
			price: 75,
			weight: '330 мл',
			time: '-',
			description: 'Насичене світле пиво з приємною гірчинкою та ніжною піною.',
			image: 'images/beer/pivo-krusovice.webp',
		},
		{
			id: 'beer2',
			nameUk: 'Пиво розливне світле Krusovice',
			price: 85,
			weight: '500 мл',
			time: '-',
			description:
				'Класичне чеське пиво з м’яким смаком та золотистим кольором.',
			image: 'images/beer/pivo-krusovice.webp',
		},
		{
			id: 'beer3',
			nameUk: 'Пиво ж/б світле Закарпатське',
			price: 65,
			weight: '500 мл',
			time: '-',
			description: 'Легке українське пиво з натуральним смаком солоду.',
			image: 'images/beer/pivo-zakarpat.webp',
		},
		{
			id: 'beer4',
			nameUk: 'Пиво ж/б Імпортне',
			price: 85,
			weight: '500 мл',
			time: '-',
			description: 'Преміальне імпортне пиво з яскравим ароматом хмелю.',
			image: 'images/beer/pivo-import.webp',
		},
		{
			id: 'beer5',
			nameUk: 'Пиво безалкогольне',
			price: 80,
			weight: '500 мл',
			time: '-',
			description:
				'Легкий безалкогольний варіант для поціновувачів смаку пива.',
			image: 'images/beer/pivo-b-a.webp',
		},
	],
	coldDrinks: [
		{
			id: 'coldDrink1',
			nameUk: 'Компот з сезонних фруктів',
			price: 35,
			weight: '200 мл',
			time: '-',
			description:
				'Склад: сезонні фрукти, цукор, вода. Домашній освіжаючий компот з натуральних фруктів.',
			image: 'images/coldDrinks/kompot.webp',
		},
		{
			id: 'coldDrink2',
			nameUk: 'Pepsi',
			price: 50,
			weight: '500 мл',
			time: '-',
			description:
				'Склад: вода, цукор, карамель, кофеїн. Класичний смак популярного газованого напою.',
			image: 'images/coldDrinks/pepsi.webp',
		},
		{
			id: 'coldDrink3',
			nameUk: 'Mirinda',
			price: 50,
			weight: '500 мл',
			time: '-',
			description:
				'Склад: вода, цукор, апельсиновий сік, ароматизатори. Яскравий цитрусовий смак і бадьорість.',
			image: 'images/coldDrinks/mirinda.webp',
		},
		{
			id: 'coldDrink4',
			nameUk: '7-Up',
			price: 50,
			weight: '500 мл',
			time: '-',
			description:
				'Склад: вода, цукор, ароматизатор лимона та лайма. Легкий освіжаючий лимонно-лаймовий смак.',
			image: 'images/coldDrinks/7-up.webp',
		},
		{
			id: 'coldDrink5',
			nameUk: 'Поляна квасова',
			price: 50,
			weight: '500 мл',
			time: '-',
			description:
				'Склад: мінеральна вода з природних джерел. Має приємний смак і корисні мінерали.',
			image: 'images/coldDrinks/polyana-kvasova.webp',
		},
		{
			id: 'coldDrink6',
			nameUk: 'Вода негазована',
			price: 40,
			weight: '500 мл',
			time: '-',
			description:
				'Склад: природна очищена вода. Ідеально підходить для щоденного вживання.',
			image: 'images/coldDrinks/voda-negaz.webp',
		},
		{
			id: 'coldDrink7',
			nameUk: 'Сік',
			price: 40,
			weight: '200 мл',
			time: '-',
			description:
				'Склад: натуральний сік (мультивітамін, апельсин, яблуко). Освіжаючий вітамінний напій.',
			image: 'images/coldDrinks/sic.webp',
		},
		{
			id: 'coldDrink8',
			nameUk: 'Лимонад',
			price: 85,
			weight: '350 мл',
			time: '5 хв',
			description:
				'Склад: лимон, цукор, вода, м’ята. Класичний домашній лимонад з освіжаючим смаком.',
			image: 'images/coldDrinks/lymonad.webp',
		},
		{
			id: 'coldDrink9',
			nameUk: 'Мохіто безалкогольне',
			price: 105,
			weight: '350 мл',
			time: '5 хв',
			description:
				'Склад: м’ята, лайм, цукор, спрайт, лід. Освіжаючий коктейль без алкоголю.',
			image: 'images/coldDrinks/lymonad-mokhito.webp',
		},
		{
			id: 'coldDrink10',
			nameUk: 'Мохіто алкогольне',
			price: 125,
			weight: '350 мл',
			time: '5 хв',
			description:
				'Склад: ром, м’ята, лайм, цукор, спрайт, лід. Класичний освіжаючий коктейль.',
			image: 'images/coldDrinks/lymonad-mokhito.webp',
		},
		// {
		//  id: 'coldDrink11',
		// 	nameUk: 'Еспресо тонік',
		// 	price: 90,
		// 	weight: '350 мл',
		// 	time: '5 хв',
		// 	description:
		// 		'Склад: еспресо, тонік, лід. Незвичайне поєднання кавової гірчинки й освіжаючої свіжості.',
		// 	image: 'images/coldDrinks/espreso-tonyk.webp',
		// },
		// {
		//  id: 'coldDrink12',
		// 	nameUk: 'Шмель',
		// 	price: 90,
		// 	weight: '350 мл',
		// 	time: '5 хв',
		// 	description:
		// 		'Склад: еспресо, апельсиновий сік, лід. Яскравий напій із цитрусовим смаком.',
		// 	image: 'images/coldDrinks/shmel.webp',
		// },
	],
	hotDrinks: [
		{
			id: 'hotDrink1',
			nameUk: 'Еспресо',
			price: 40,
			weight: '30 мл',
			time: '5 хв',
			description:
				'Склад: арабіка, робуста. Насичений класичний смак справжнього еспресо',
			image: 'images/hotDrinks/espreso.webp',
		},
		{
			id: 'hotDrink2',
			nameUk: 'Еспресо з молоком',
			price: 40,
			weight: '80 мл',
			time: '5 хв',
			description:
				'Склад: арабіка, робуста, молоко коров’яче. М’який смак кави з ніжною молочною ноткою',
			image: 'images/hotDrinks/espreso-z-molokom.webp',
		},
		{
			id: 'hotDrink3',
			nameUk: 'Американо',
			price: 45,
			weight: '60 мл',
			time: '5 хв',
			description:
				'Склад: арабіка, робуста, вода. Класичний чорний напій із м’яким післясмаком',
			image: 'images/hotDrinks/americano.webp',
		},
		{
			id: 'hotDrink4',
			nameUk: 'Американо з молоком',
			price: 50,
			weight: '110 мл',
			time: '5 хв',
			description:
				'Склад: арабіка, робуста, вода, молоко коров’яче. Легкий кавовий смак із вершковими нотами',
			image: 'images/hotDrinks/americano_moloko.webp',
		},
		{
			id: 'hotDrink5',
			nameUk: 'Капучино',
			price: 55,
			weight: '250 мл',
			time: '5 хв',
			description:
				'Склад: еспресо, молоко, молочна піна. Гармонійне поєднання кави та кремової текстури',
			image: 'images/hotDrinks/kapychino.webp',
		},
		{
			id: 'hotDrink6',
			nameUk: 'Лате',
			price: 65,
			weight: '250 мл',
			time: '5 хв',
			description:
				'Склад: еспресо, молоко, молочна піна. Ніжний напій із м’яким кавово-молочним смаком',
			image: 'images/hotDrinks/late.webp',
		},
		{
			id: 'hotDrink7',
			nameUk: 'Айс-Лате',
			price: 95,
			weight: '250 мл',
			time: '5 хв',
			description:
				'Склад: еспресо, молоко, лід, сироп за бажанням. Освіжаючий холодний кавовий напій',
			image: 'images/hotDrinks/ajs-late.webp',
		},
		{
			id: 'hotDrink8',
			nameUk: 'Какао',
			price: 75,
			weight: '250 мл',
			time: '5 хв',
			description:
				'Склад: какао-порошок, молоко, цукор. Ніжний солодкий напій для поціновувачів шоколаду',
			image: 'images/hotDrinks/kakao.webp',
		},
		{
			id: 'hotDrink9',
			nameUk: 'Чай в заварнику',
			price: 75,
			weight: '500 мл',
			time: '8 хв',
			description:
				"Склад: чорний, зелений, фруктовий або трав'яний чай. Подається у заварнику для двох осіб.",
			image: 'images/hotDrinks/chai-v-zavarnuc.webp',
		},
		{
			id: 'hotDrink10',
			nameUk: 'Чай в асортименті',
			price: 45,
			weight: '250 мл',
			time: '8 хв',
			description:
				"Склад: чорний, зелений, фруктовий або трав'яний чай. Ароматний напій для будь-якого настрою.",
			image: 'images/hotDrinks/chai-v-asor.webp',
		},
		{
			id: 'hotDrink11',
			nameUk: 'Чай крафтовий',
			price: 55,
			weight: '250 мл',
			time: '5 хв',
			description:
				'Склад: натуральні листки чаю, сушені ягоди та трави. Авторський крафтовий чай ручної роботи.',
			image: 'images/hotDrinks/kraftovuy.webp',
		},
	],
	extras: [
		{
			id: 'extra1',
			nameUk: 'Мед порційний',
			price: 20,
			weight: '20 г',
			time: '-',
			description: 'Склад: натуральний квітковий мед',
			image: 'images/extras/med.webp',
		},
		{
			id: 'extra2',
			nameUk: 'Вершки порційні',
			price: 10,
			weight: '20 г',
			time: '-',
			description: 'Склад: вершки пастеризовані коров’ячі',
			image: 'images/extras/verchku.webp',
		},
		{
			id: 'extra3',
			nameUk: 'Молоко',
			price: 10,
			weight: '20 г',
			time: '-',
			description: 'Склад: свіже коров’яче молоко.',
			image: 'images/extras/moloko.webp',
		},
		{
			id: 'extra4',
			nameUk: 'Лимон',
			price: 10,
			weight: '20 г',
			time: '-',
			description: 'Склад: натуральний свіжий лимон',
			image: 'images/extras/lumon.webp',
		},
		{
			id: 'extra5',
			nameUk: 'Шоколад',
			price: 10,
			weight: '20 г',
			time: '-',
			description: 'Склад: какао-маса, какао-масло, цукор',
			image: 'images/extras/surop.webp',
		},
		{
			id: 'extra6',
			nameUk: 'Карамель',
			price: 10,
			weight: '20 г',
			time: '-',
			description: 'Склад: цукор, вершки, масло, ваніль.',
			image: 'images/extras/caramel.webp',
		},
		{
			id: 'extra7',
			nameUk: 'Вишня',
			price: 10,
			weight: '20 г',
			time: '-',
			description: 'Склад: вишня у власному соку',
			image: 'images/extras/cherry.webp',
		},
		{
			id: 'extra8',
			nameUk: 'Малина',
			price: 10,
			weight: '20 г',
			time: '-',
			description: 'Склад: свіжа малина або малиновий соус',
			image: 'images/extras/maluna.webp',
		},
	],
}
module.exports = menuData
