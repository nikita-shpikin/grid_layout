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
