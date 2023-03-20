let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
headerBurger.addEventListener('click', () => {
	if (headerMenu.style.display === 'grid') {
		headerMenu.style.display = 'none';
	} else {
		headerMenu.style.display = 'grid';
		headerMenu.style.opacity = '1';
	}
});

let headerLinks = document.querySelectorAll('.header__link');
headerLinks.forEach((link, index) => {
	link.addEventListener('click', function () {
		headerLinks.forEach(item => {
			item.classList.remove('header__link_active');
		});

		headerLinks[index].classList.add('header__link_active');
	});
});

let affordableItems = document.querySelectorAll('.affordable__item');
affordableItems.forEach((item, index) => {
	item.addEventListener('click', function () {
		affordableItems.forEach(item => {
			console.log('x');
			item.classList.remove('affordable__item_active');
		});

		affordableItems[index].classList.add('affordable__item_active');
	});
});

document.addEventListener('click', function (e) {
	if (
		!e.target.closest('.header__menu') &&
		!e.target.closest('.header__burger')
	) {
		if (document.documentElement.clientWidth > 950) {
			headerMenu.style.display = 'grid';
		} else {
			headerMenu.style.display = 'none';
		}
	}
});
