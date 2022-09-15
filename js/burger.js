const burgerItem = document.querySelector('#burger');
const burgerCloseItem = document.querySelector('#header__nav-close');
const menu = document.querySelector('#nav');
const menuLinks = document.querySelectorAll('.header__nav__link');



burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav_active');
    burgerItem.classList.add('burger__hidden');
});
burgerCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
    burgerItem.classList.remove('burger__hidden');
});
for (let i = 0; i <= menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
        burgerItem.classList.remove('burger__hidden'); 
    });
};