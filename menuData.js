const menuData = {
	breakfast: [
		{
			nameUk: 'Сніданок №1',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description: 'Яєшня з сосискою, сиром та овочами',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFD700' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='24'>Сніданок №1</text></svg>",
		},
		{
			nameUk: 'Сніданок №2',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description: 'Відварені яйця, тости з маслом, сиром, ковбасою та овочами',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFD700' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='24'>Сніданок №2</text></svg>",
		},
		{
			nameUk: 'Сніданок №3',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description: 'Домашні сирники зі сметаною та джемом',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFD700' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='24'>Сніданок №3</text></svg>",
		},
		{
			nameUk: 'Сніданок №4',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description: 'Смачні творожні гомбовці зі сметаною та шоколадом',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFD700' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='24'>Сніданок №4</text></svg>",
		},
		{
			nameUk: 'Сніданок №5',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description: 'Яєшня бовтунка з шинкою, сиром та овочами',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFD700' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='24'>Сніданок №5</text></svg>",
		},
		{
			nameUk: 'Сніданок №6',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description: 'Омлет з сосискою, сиром та овочами',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFD700' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='24'>Сніданок №6</text></svg>",
		},
		{
			nameUk: 'Сніданок №7',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description:
				'Смачна каша на вибір: рисова, гречана, вівсяна, з родзинками та фруктами',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFD700' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='24'>Сніданок №7</text></svg>",
		},
		{
			nameUk: 'Сніданок №8',
			price: 150,
			weight: '400 г',
			time: '15 хв',
			description: 'Млинці з домашнім сиром або млинці з джемом',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFD700' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='24'>Сніданок №8</text></svg>",
		},
	],

	troutDishes: [
		{
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
			nameUk: 'Форель зі спеціями',
			price: 105,
			weight: '100 г',
			time: '35 хв',
			description:
				'Ніжне філе форелі, приправлене ароматними спеціями, сіллю та свіжомеленим перцем. Простота, що розкриває природний смак риби.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2300CED1' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Форель зі спеціями</text></svg>",
		},
		{
			nameUk: 'Форель з цибулею',
			price: 109,
			weight: '100 г',
			time: '35 хв',
			description:
				'Соковита форель із маринованою цибулею, зеленню та спеціями. Ароматна й ніжна страва для справжніх гурманів.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2300CED1' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Форель з цибулею</text></svg>",
		},
		{
			nameUk: 'Форель з овочами',
			price: 118,
			weight: '100 г',
			time: '35 хв',
			description:
				'Апетитна форель, запечена з овочевим жульєном із перцю, цибулі, кабачка, моркви та баклажану. Смачно й корисно.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2300CED1' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Форель з овочами</text></svg>",
		},
		{
			nameUk: 'Форель з грибами',
			price: 135,
			weight: '100 г',
			time: '35 хв',
			description:
				'Ніжне філе форелі під вершковим соусом із білих грибів і шампіньйонів. Вишукане поєднання смаку та аромату.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2300CED1' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Форель з грибами</text></svg>",
		},
		{
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
			nameUk: 'Закарпатські помазанки',
			price: 137,
			weight: '180 г',
			time: '15 хв',
			description:
				'Три види традиційних закарпатських намазок по 50 г кожна: з сала, зі шкварками та сирна з творогом, паприкою і спеціями. Подаються з хрусткими грінками.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFA500' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Закарпатські помазанки</text></svg>",
		},
		{
			nameUk: 'Тарілка до горілки',
			price: 235,
			weight: '250 г',
			time: '15 хв',
			description:
				'Апетитна тарілка з трьох видів сала, подається з гірчицею, свіжою цибулею, часником та зеленню.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFA500' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Тарілка до горілки</text></svg>",
		},
		{
			nameUk: 'Сирне плато',
			price: 258,
			weight: '180 г',
			time: '15 хв',
			description:
				'Асорті сирів: моцарелла, фета та твердий сир, подається з медом, свіжим яблуком і міксом горіхів.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFA500' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Сирне плато</text></svg>",
		},
	],
	beerSnacks: [
		{
			nameUk: 'Грінки з часником',
			price: 65,
			weight: '100 г',
			time: '15 хв',
			description:
				'Хрусткі грінки з ароматом часнику, обсмажені до золотистої скоринки.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFA500' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Грінки з часником</text></svg>",
		},
		{
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
			nameUk: 'Курячі нагетси',
			price: 135,
			weight: '100 г',
			time: '15 хв',
			description:
				'Ніжні шматочки курячого філе в золотистій паніровці, ідеальні з соусом BBQ або часниковим.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFA500' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Курячі нагетси</text></svg>",
		},
		{
			nameUk: 'Сир “косичка”',
			price: 70,
			weight: '100 г',
			time: '10 хв',
			description:
				'Сирна косичка з ніжним смаком, подається з соусом за вибором.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFA500' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Сир косичка</text></svg>",
		},
		{
			nameUk: 'Чіпси з лавашу',
			price: 65,
			weight: '100 г',
			time: '8 хв',
			description:
				'Хрусткі домашні чипси з лавашу з ароматними спеціями, ідеальні до пива або соусу.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFA500' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Чіпси з лавашу</text></svg>",
		},
		{
			nameUk: 'Снек-тарілка',
			price: 295,
			weight: '400 г',
			time: '20 хв',
			description:
				'Асорті: курячі нагетси, сир фрі, цибулеві кільця, картопля фрі',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFA500' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Снек-тарілка</text></svg>",
		},
		{
			nameUk: 'Пивна тарілка',
			price: 190,
			weight: '250 г',
			time: '15 хв',
			description: 'Закуски до пива: чипси з лавашу, сир косичка, горішки',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFA500' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Пивна тарілка</text></svg>",
		},
	],
	firstCourses: [
		{
			nameUk: 'Бограч “а-ля Катерина”',
			price: 149,
			weight: '350 г',
			time: '12 хв',
			description:
				'Ароматний угорський гуляш зі свинини з картоплею, морквою, болгарським перцем, томатами та спеціями, доповнений баварською сосискою та свинячим салом, прикрашений свіжим кропом і петрушкою.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23A52A2A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Бограч</text></svg>",
		},
		{
			nameUk: 'Традиційний український борщик',
			price: 118,
			weight: '350 г',
			time: '12 хв',
			description:
				'Насичений український борщ із картоплею, капустою, морквою, буряком та цибулею, з відварною корейкою, подається зі сметаною та свіжою зеленню.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23A52A2A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Борщ</text></svg>",
		},
		{
			nameUk: 'Куряча поливка з локшиною',
			price: 94,
			weight: '350 г',
			time: '12 хв',
			description:
				'Легкий та ароматний курячий бульйон із локшиною, морквою та свіжою зеленню кропу і петрушки, приправлений меленим перцем.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23A52A2A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Бульйон курячий</text></svg>",
		},
		{
			nameUk: 'Крем-суп з двох видів грибів',
			price: 138,
			weight: '350 г',
			time: '12 хв',
			description:
				'Ніжний крем-суп із білих грибів та шампіньйонів на основі вершків і курячого бульйону, з обсмаженою цибулею, грінками та оливковою олією, прикрашений свіжою зеленню.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23A52A2A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Крем-суп з грибів</text></svg>",
		},
	],
	salads: [
		{
			nameUk: 'Капустяний салат',
			price: 87,
			weight: '150 г',
			time: '12 хв',
			description:
				'Свіжа капуста та хрустка морква, заправлені ароматною олією, сіллю та меленим перцем.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2380C080' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Капустяний салат</text></svg>",
		},
		{
			nameUk: 'Грецький салат з фетою',
			price: 185,
			weight: '300 г',
			time: '15 хв',
			description:
				'Соковиті томати, свіжі огірки та болгарський перець, мікс салатів, оливки, ніжна фета та оливкова олія - справжній смак Греції.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2380C080' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Грецький салат з фетою</text></svg>",
		},
		{
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
			nameUk: 'Салат “Цезар” класичний',
			price: 215,
			weight: '350 г',
			time: '15 хв',
			description:
				'Світлий мікс салатів, соковитий курячий стейк, грінки, сир пармезан та ніжний соус бальзамік – класика, яка завжди смакує.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2380C080' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Салат “Цезар” класичний</text></svg>",
		},
		{
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
			nameUk: 'Крумплі по-домашньому',
			price: 95,
			weight: '200 г',
			time: '25 хв',
			description:
				'Смажена картопля на сковороді з цибулею, часником, спеціями та шкварками.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFD700' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Крумплі по-домашньому</text></svg>",
		},
		{
			nameUk: 'Крумплі пюре',
			price: 95,
			weight: '200 г',
			time: '25 хв',
			description: 'Картопляне пюре з маслом.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFD700' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Крумплі пюре</text></svg>",
		},
		{
			nameUk: 'Картопля фрі',
			price: 95,
			weight: '200 г',
			time: '25 хв',
			description: 'Хрустка картопля фрі.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFD700' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Картопля фрі</text></svg>",
		},
		{
			nameUk: 'Рис з овочами',
			price: 87,
			weight: '200 г',
			time: '20 хв',
			description: 'Сезонні овочі: кукурудза, горошок, перець, цибуля, морква.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFD700' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Рис з овочами</text></svg>",
		},
		{
			nameUk: 'Каша гречана',
			price: 87,
			weight: '200 г',
			time: '25 хв',
			description: 'Гречана крупа з маслом.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FFD700' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Каша гречана</text></svg>",
		},
	],
	hotAppetizers: [
		{
			nameUk: 'Закарпатська цмунда',
			price: 235,
			weight: '300 г',
			time: '30 хв',
			description:
				'Картопляна маса з яйцем, борошном та спеціями; начинка: білі гриби і курячий стейк; вершковий соус, зелень (кріп, петрушка).',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Закарпатська цмунда</text></svg>",
		},
		{
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
			nameUk: 'Пельмені домашні',
			price: 117,
			weight: '200 г',
			time: '25 хв',
			description: 'Домашні пельмені, порція 15 штук.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Пельмені домашні</text></svg>",
		},
		{
			nameUk: 'Сковорідка "Мисливська"',
			price: 245,
			weight: '300 г',
			time: '35 хв',
			description:
				'Картопля, перець, цибуля, морква, свинна корейка, мисливська ковбаска, томатний соус, BBQ, голландський сир, зелень.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Сковорідка “Мисливська”</text></svg>",
		},
		{
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
			nameUk: 'Деруни з сметаною',
			price: 155,
			weight: '200 г',
			time: '30 хв',
			description: '4 деруни з картопляної маси; подаються зі сметаною.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Деруни з сметаною</text></svg>",
		},
		{
			nameUk: 'Деруни з грибами в глечику',
			price: 185,
			weight: '250 г',
			time: '30 хв',
			description:
				'5 середніх дерунів із картопляної маси, яйця, борошно, сіль, перець, часник, цибуля; подаються з білими грибами, голландським сиром і вершковим соусом.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Деруни з грибами в глечику</text></svg>",
		},
		{
			nameUk: 'Вареники з картоплею',
			price: 97,
			weight: '200 г',
			time: '25 хв',
			description: '11 вареників з картоплею та маслом; подаються зі сметаною.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Вареники з картоплею</text></svg>",
		},
		{
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
			nameUk: 'BBQ',
			price: 20,
			weight: '30 г',
			time: '1 хв',
			description:
				'Ароматний соус BBQ, ідеально підкреслює смак м’яса та страв на мангалі.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23A52A2A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>BBQ</text></svg>",
		},
		{
			nameUk: 'Часниковий',
			price: 20,
			weight: '30 г',
			time: '1 хв',
			description:
				'Ніжний часниковий соус, який додає стравам пікантності та аромату.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23A52A2A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Часниковий</text></svg>",
		},
		{
			nameUk: 'Кетчуп',
			price: 20,
			weight: '30 г',
			time: '1 хв',
			description:
				'Класичний томатний кетчуп для доповнення будь-яких страв на мангалі.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23A52A2A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Кетчуп</text></svg>",
		},
	],
	grillDishes: [
		{
			nameUk: 'Шашлик зі свинини',
			price: 137,
			weight: '100 г',
			time: '45 хв',
			description: 'Соковитий свинний ошийок у маринаді зі спеціями.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2395462A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Шашлик зі свинини</text></svg>",
		},
		{
			nameUk: 'Міні-шашлички з курячого філе',
			price: 117,
			weight: '100 г',
			time: '35 хв',
			description: 'Ніжні курячі шашлички у маринаді, соковиті та ароматні.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2395462A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Міні-шашлички з курячого філе</text></svg>",
		},
		{
			nameUk: 'Стейк зі свинини',
			price: 145,
			weight: '100 г',
			time: '45 хв',
			description: 'Свинний ошийок у маринаді зі спеціями, подається з маслом.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2395462A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Стейк зі свинини</text></svg>",
		},
		{
			nameUk: 'Ребра свинні',
			price: 125,
			weight: '100 г',
			time: '45 хв',
			description: 'Соковиті свинні ребра зі спеціями.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2395462A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Ребра свинні</text></svg>",
		},
		{
			nameUk: 'Ковбаски купати',
			price: 127,
			weight: '100 г',
			time: '35 хв',
			description: 'Соковиті ковбаски купати, 2 шт на 100 г.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2395462A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Ковбаски купати</text></svg>",
		},
		{
			nameUk: 'Крумплі печені',
			price: 109,
			weight: '200 г',
			time: '35 хв',
			description: 'Запечена картопля з шкварками, бринзою та сіллю.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2395462A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Крумплі печені</text></svg>",
		},
		{
			nameUk: 'Овочі-гриль',
			price: 195,
			weight: '250 г',
			time: '35 хв',
			description:
				'Мариновані кабачки, баклажани, перець, цибуля та шампіньйони з соєвим соусом і спеціями.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%2395462A' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Овочі-гриль</text></svg>",
		},
		{
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
			nameUk: 'Доліталася',
			price: 187,
			weight: '335 г',
			time: '20 хв',
			description:
				'Склад: лаваш, курячий стейк, помідор, сир моцарела, твердий сир, соус “Цезар”. Ніжний та ситний лаваш із куркою та сирами.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23DEB887' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Доліталася</text></svg>",
		},
		{
			nameUk: 'Еко',
			price: 178,
			weight: '265 г',
			time: '20 хв',
			description:
				'Склад: лаваш, твердий сир, моцарела, мікс грибів (білі гриби, шампіньйони), цибуля, зелень (кріп, петрушка), соус “Цезар”. Ароматний вегетаріанський лаваш із грибами.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23DEB887' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Еко</text></svg>",
		},
		{
			nameUk: 'Дуже сирний',
			price: 175,
			weight: '430 г',
			time: '20 хв',
			description:
				'Склад: лаваш, сир голландський, моцарела, бринза, соус “Цезар”. Справжня насолода для поціновувачів сиру.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23DEB887' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Дуже сирний</text></svg>",
		},
		{
			nameUk: 'Мисливський',
			price: 205,
			weight: '495 г',
			time: '20 хв',
			description:
				'Склад: лаваш, мисливська ковбаска, курячий стейк, помідор, болгарський перець, цибуля, твердий сир, моцарела, соус “Цезар”. Пікантний ситний лаваш із м’ясом та сиром.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23DEB887' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Мисливський</text></svg>",
		},
	],
	pizzas: [
		{
			nameUk: 'Маргарита',
			price: 197,
			weight: '400 г',
			time: '25 хв',
			description:
				'Класична італійська піца на тонкому тісті з ароматним томатним соусом, соковитими помідорами та свіжим базиліком. Склад: томатний соус, сир моцарела, сир голландський, помідори, базилік.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Маргарита</text></svg>",
		},
		{
			nameUk: 'Салямі',
			price: 217,
			weight: '400 г',
			time: '25 хв',
			description:
				'Піца з пікантною салямі, поєднанням двох видів сиру та ніжним томатним соусом. Склад: томатний соус, сир моцарела, сир голландський, салямі.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Салямі</text></svg>",
		},
		{
			nameUk: 'Чотири сири',
			price: 237,
			weight: '400 г',
			time: '25 хв',
			description:
				'Ніжна вершкова піца з насиченим сирним смаком. Ідеальний вибір для поціновувачів сиру. Склад: вершковий соус, сир моцарела, сир голландський, сир пармезан, сир з блакитною пліснявою.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Чотири сири</text></svg>",
		},
		{
			nameUk: 'Гавайська',
			price: 235,
			weight: '400 г',
			time: '25 хв',
			description:
				'Соковита піца з ніжним курячим філе, ананасами та кукурудзою, що створює ідеальний баланс солодкого та солоного смаку. Склад: томатний соус, сир моцарела, сир голландський, куряче філе, ананас, кукурудза.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Гавайська</text></svg>",
		},
		{
			nameUk: 'Цезар',
			price: 245,
			weight: '400 г',
			time: '25 хв',
			description:
				'Оригінальна піца на основі популярного салату. Склад: томатний соус, сир моцарела, салат мікс, куряче філе, сир пармезан, помідори чері, соус "Цезар".',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Цезар</text></svg>",
		},
		{
			nameUk: 'Мисливська',
			price: 255,
			weight: '400 г',
			time: '25 хв',
			description:
				'Піца з насиченим м’ясним смаком. Склад: томатний соус, сир моцарела, сир голландський, шинка, мисливські ковбаски, купати.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%23FF6347' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Мисливська</text></svg>",
		},
	],
	desserts: [
		{
			nameUk: 'Бабчині палачінти',
			price: 98,
			weight: '270 г',
			time: '15 хв',
			description:
				'Тонкі домашні млинці, які можна замовити з сиром або джемом. Склад: млинцеве тісто, сир, цукор, ваніль, або фруктовий джем на вибір. Подаються зі сметаною або вершками.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%238B0000' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Бабчині палачінти</text></svg>",
		},
		{
			nameUk: 'Сирники з сметаною або джемом',
			price: 115,
			weight: '250 г',
			time: '15 хв',
			description:
				'Ніжні домашні сирники (4 шт) з подачею сметани та джему, доповнені скибочками апельсина або яблука. Склад: сир, яйце, цукор, борошно, ваніль.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%238B0000' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Сирники</text></svg>",
		},
		{
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
			nameUk: 'Морозиво біле класичне',
			price: 75,
			weight: '100 г',
			time: '10 хв',
			description:
				'Класичний білий пломбір із топінгом на вибір: шоколад, вишня або карамель.',
			image:
				"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect fill='%238B0000' width='300' height='300'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23fff' font-size='18'>Морозиво біле класичне</text></svg>",
		},
		{
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
			nameUk: 'Горілка Nemiroff',
			price: 60,
			weight: '50 мл',
			time: '-',
			description:
				'Класична українська горілка з чистим смаком та м’яким післясмаком.',
			image: 'images/vodka/nemiroff.jpg',
		},
		{
			nameUk: 'Горілка Finlandia',
			price: 80,
			weight: '50 мл',
			time: '-',
			description:
				'Преміальна фінська горілка, що поєднує чистоту льодовикової води та зернову м’якість.',
			image: 'images/vodka/finlandia.webp',
		},
		{
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
			nameUk: 'Коньяк Закарпатський',
			price: 65,
			weight: '50 мл',
			time: '-',
			description: 'Витриманий коньяк із благородними нотами дубу та ванілі.',
			image: 'images/variousVodka/konyak-zakarpat.webp',
		},
		{
			nameUk: 'Becherovka',
			price: 105,
			weight: '50 мл',
			time: '-',
			description:
				'Чеський трав’яний лікер із гармонійним поєднанням спецій і кориці.',
			image: 'images/variousVodka/becherovka.jpg',
		},
		{
			nameUk: 'Jagermeister',
			price: 117,
			weight: '50 мл',
			time: '-',
			description:
				'Німецький лікер на травах з інтенсивним ароматом і легкою гірчинкою.',
			image: 'images/variousVodka/jagermeister.webp',
		},
		{
			nameUk: 'Jameson',
			price: 149,
			weight: '50 мл',
			time: '-',
			description:
				'Ірландський віскі з нотами карамелі, дубу та ванілі, м’який і збалансований.',
			image: 'images/variousVodka/jameson.png',
		},
	],

	wine: [
		{
			nameUk: 'Вино Chizay',
			price: 45,
			weight: '50 мл',
			time: '-',
			description:
				'Вино Chizay (біле, червоне; сухе або напівсолодке) з ароматом закарпатських виноградників.',
			image: 'images/wine/vino-chizay.jpg',
		},
		{
			nameUk: 'Вино Домашнє',
			price: 30,
			weight: '50 мл',
			time: '-',
			description:
				'Домашнє червоне вино (сухе) з насиченим фруктовим смаком і легким післясмаком.',
			image: 'images/wine/vino-domashne.jpg',
		},
		{
			nameUk: 'Просекко (розливне)',
			price: 50,
			weight: '50 мл',
			time: '-',
			description:
				'Італійське ігристе вино (сухе) з нотками яблука, груші та цитрусових.',
			image: 'images/wine/prosecco.jpg',
		},
		{
			nameUk: 'Глінтвейн',
			price: 80,
			weight: '200 мл',
			time: '-',
			description:
				'Гарячий ароматний напій із вина, спецій, кориці та цитрусових.',
			image: 'images/wine/hliytvein.jpg',
		},
		{
			nameUk: 'Вино Закарпатське (пляшка)',
			price: 540,
			weight: '700 мл',
			time: '-',
			description:
				'Вино Закарпатське — червоне або біле, сухе чи напівсолодке, з глибоким букетом аромату.',
			image: 'images/wine/vino-chizay.png',
		},
		{
			nameUk: 'Вино Marengo (пляшка)',
			price: 440,
			weight: '700 мл',
			time: '-',
			description: 'Ігристе вино Marengo — біле або червоне, легке і святкове.',
			image: 'images/wine/vino-marengo.png',
		},
	],
	beer: [
		{
			nameUk: 'Пиво розливне світле Krusovice',
			price: 75,
			weight: '330 мл',
			time: '-',
			description: 'Насичене світле пиво з приємною гірчинкою та ніжною піною.',
			image: 'images/beer/pivo-krusovice.jpg',
		},
		{
			nameUk: 'Пиво розливне світле Krusovice',
			price: 85,
			weight: '500 мл',
			time: '-',
			description:
				'Класичне чеське пиво з м’яким смаком та золотистим кольором.',
			image: 'images/beer/pivo-krusovice.jpg',
		},
		{
			nameUk: 'Пиво ж/б світле Закарпатське',
			price: 65,
			weight: '500 мл',
			time: '-',
			description: 'Легке українське пиво з натуральним смаком солоду.',
			image: 'images/beer/pivo-zakarpat.jpg',
		},
		{
			nameUk: 'Пиво ж/б Імпортне',
			price: 85,
			weight: '500 мл',
			time: '-',
			description: 'Преміальне імпортне пиво з яскравим ароматом хмелю.',
			image: 'images/beer/pivo-import.webp',
		},
		{
			nameUk: 'Пиво безалкогольне',
			price: 80,
			weight: '500 мл',
			time: '-',
			description:
				'Легкий безалкогольний варіант для поціновувачів смаку пива.',
			image: 'images/beer/pivo-b-a.jpeg',
		},
	],
	coldDrinks: [
		{
			nameUk: 'Компот з сезонних фруктів',
			price: 35,
			weight: '200 мл',
			time: '-',
			description:
				'Склад: сезонні фрукти, цукор, вода. Домашній освіжаючий компот з натуральних фруктів.',
			image: 'images/coldDrinks/kompot.jpg',
		},
		{
			nameUk: 'Pepsi',
			price: 50,
			weight: '500 мл',
			time: '-',
			description:
				'Склад: вода, цукор, карамель, кофеїн. Класичний смак популярного газованого напою.',
			image: 'images/coldDrinks/pepsi.jpg',
		},
		{
			nameUk: 'Mirinda',
			price: 50,
			weight: '500 мл',
			time: '-',
			description:
				'Склад: вода, цукор, апельсиновий сік, ароматизатори. Яскравий цитрусовий смак і бадьорість.',
			image: 'images/coldDrinks/mirinda.jpg',
		},
		{
			nameUk: '7-Up',
			price: 50,
			weight: '500 мл',
			time: '-',
			description:
				'Склад: вода, цукор, ароматизатор лимона та лайма. Легкий освіжаючий лимонно-лаймовий смак.',
			image: 'images/coldDrinks/7-up.jpg',
		},
		{
			nameUk: 'Поляна квасова',
			price: 50,
			weight: '500 мл',
			time: '-',
			description:
				'Склад: мінеральна вода з природних джерел. Має приємний смак і корисні мінерали.',
			image: 'images/coldDrinks/polyana-kvasova.jpeg',
		},
		{
			nameUk: 'Вода негазована',
			price: 40,
			weight: '500 мл',
			time: '-',
			description:
				'Склад: природна очищена вода. Ідеально підходить для щоденного вживання.',
			image: 'images/coldDrinks/voda-negaz.png',
		},
		{
			nameUk: 'Сік',
			price: 40,
			weight: '200 мл',
			time: '-',
			description:
				'Склад: натуральний сік (мультивітамін, апельсин, яблуко). Освіжаючий вітамінний напій.',
			image: 'images/coldDrinks/sic.png',
		},
		{
			nameUk: 'Лимонад',
			price: 85,
			weight: '350 мл',
			time: '5 хв',
			description:
				'Склад: лимон, цукор, вода, м’ята. Класичний домашній лимонад з освіжаючим смаком.',
			image: 'images/coldDrinks/lymonad.jpg',
		},
		{
			nameUk: 'Мохіто безалкогольне',
			price: 105,
			weight: '350 мл',
			time: '5 хв',
			description:
				'Склад: м’ята, лайм, цукор, спрайт, лід. Освіжаючий коктейль без алкоголю.',
			image: 'images/coldDrinks/lymonad-mokhito.jpg',
		},
		{
			nameUk: 'Мохіто алкогольне',
			price: 125,
			weight: '350 мл',
			time: '5 хв',
			description:
				'Склад: ром, м’ята, лайм, цукор, спрайт, лід. Класичний освіжаючий коктейль.',
			image: 'images/coldDrinks/lymonad-mokhito.jpg',
		},
		{
			nameUk: 'Еспресо тонік',
			price: 90,
			weight: '350 мл',
			time: '5 хв',
			description:
				'Склад: еспресо, тонік, лід. Незвичайне поєднання кавової гірчинки й освіжаючої свіжості.',
			image: 'images/coldDrinks/espreso-tonyk.jpg',
		},
		{
			nameUk: 'Шмель',
			price: 90,
			weight: '350 мл',
			time: '5 хв',
			description:
				'Склад: еспресо, апельсиновий сік, лід. Яскравий напій із цитрусовим смаком.',
			image: 'images/coldDrinks/shmel.jpg',
		},
	],
	hotDrinks: [
		{
			nameUk: 'Еспресо',
			price: 40,
			weight: '30 мл',
			time: '5 хв',
			description:
				'Склад: арабіка, робуста. Насичений класичний смак справжнього еспресо',
			image: 'images/hotDrinks/espreso.webp',
		},
		{
			nameUk: 'Еспресо з молоком',
			price: 40,
			weight: '80 мл',
			time: '5 хв',
			description:
				'Склад: арабіка, робуста, молоко коров’яче. М’який смак кави з ніжною молочною ноткою',
			image: 'images/hotDrinks/espreso-z-molokom.jpg',
		},
		{
			nameUk: 'Американо',
			price: 45,
			weight: '60 мл',
			time: '5 хв',
			description:
				'Склад: арабіка, робуста, вода. Класичний чорний напій із м’яким післясмаком',
			image: 'images/hotDrinks/americano.webp',
		},
		{
			nameUk: 'Американо з молоком',
			price: 50,
			weight: '110 мл',
			time: '5 хв',
			description:
				'Склад: арабіка, робуста, вода, молоко коров’яче. Легкий кавовий смак із вершковими нотами',
			image: 'images/hotDrinks/americano_moloko.jpg',
		},
		{
			nameUk: 'Капучино',
			price: 55,
			weight: '250 мл',
			time: '5 хв',
			description:
				'Склад: еспресо, молоко, молочна піна. Гармонійне поєднання кави та кремової текстури',
			image: 'images/hotDrinks/kapychino.webp',
		},
		{
			nameUk: 'Лате',
			price: 65,
			weight: '250 мл',
			time: '5 хв',
			description:
				'Склад: еспресо, молоко, молочна піна. Ніжний напій із м’яким кавово-молочним смаком',
			image: 'images/hotDrinks/late.jpg',
		},
		{
			nameUk: 'Айс-Лате',
			price: 95,
			weight: '250 мл',
			time: '5 хв',
			description:
				'Склад: еспресо, молоко, лід, сироп за бажанням. Освіжаючий холодний кавовий напій',
			image: 'images/hotDrinks/ajs-late.jpg',
		},
		{
			nameUk: 'Какао',
			price: 75,
			weight: '250 мл',
			time: '5 хв',
			description:
				'Склад: какао-порошок, молоко, цукор. Ніжний солодкий напій для поціновувачів шоколаду',
			image: 'images/hotDrinks/kakao.jpg',
		},
		{
			nameUk: 'Чай в заварнику',
			price: 75,
			weight: '500 мл',
			time: '8 хв',
			description:
				"Склад: чорний, зелений, фруктовий або трав'яний чай. Подається у заварнику для двох осіб.",
			image: 'images/hotDrinks/chai-v-zavarnuc.jpg',
		},
		{
			nameUk: 'Чай в асортименті',
			price: 45,
			weight: '250 мл',
			time: '8 хв',
			description:
				"Склад: чорний, зелений, фруктовий або трав'яний чай. Ароматний напій для будь-якого настрою.",
			image: 'images/hotDrinks/chai-v-asor.jpg',
		},
		{
			nameUk: 'Чай крафтовий',
			price: 55,
			weight: '250 мл',
			time: '5 хв',
			description:
				'Склад: натуральні листки чаю, сушені ягоди та трави. Авторський крафтовий чай ручної роботи.',
			image: 'images/hotDrinks/kraftovuy.jpg',
		},
	],
	extras: [
		{
			nameUk: 'Мед порційний',
			price: 20,
			weight: '20 г',
			time: '-',
			description: 'Склад: натуральний квітковий мед',
			image: 'images/extras/med.jpg',
		},
		{
			nameUk: 'Вершки порційні',
			price: 10,
			weight: '20 г',
			time: '-',
			description: 'Склад: вершки пастеризовані коров’ячі',
			image: 'images/extras/verchku.jpg',
		},
		{
			nameUk: 'Молоко',
			price: 10,
			weight: '20 г',
			time: '-',
			description: 'Склад: свіже коров’яче молоко.',
			image: 'images/extras/moloko.webp',
		},
		{
			nameUk: 'Лимон',
			price: 10,
			weight: '20 г',
			time: '-',
			description: 'Склад: натуральний свіжий лимон',
			image: 'images/extras/lumon.jpg',
		},
		{
			nameUk: 'Шоколад',
			price: 10,
			weight: '20 г',
			time: '-',
			description: 'Склад: какао-маса, какао-масло, цукор',
			image: 'images/extras/surop.webp',
		},
		{
			nameUk: 'Карамель',
			price: 10,
			weight: '20 г',
			time: '-',
			description: 'Склад: цукор, вершки, масло, ваніль.',
			image: 'images/extras/caramel.webp',
		},
		{
			nameUk: 'Вишня',
			price: 10,
			weight: '20 г',
			time: '-',
			description: 'Склад: вишня у власному соку',
			image: 'images/extras/cherry.jpg',
		},
		{
			nameUk: 'Малина',
			price: 10,
			weight: '20 г',
			time: '-',
			description: 'Склад: свіжа малина або малиновий соус',
			image: 'images/extras/maluna.jpg',
		},
	],
}
