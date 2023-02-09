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
