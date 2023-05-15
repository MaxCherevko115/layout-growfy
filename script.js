const menuButton = document.querySelector('.header__button');
const menu = document.querySelector('.header__menu');

window.onload = function() {

    menuButton.addEventListener('click', () => {
        document.body.classList.toggle('lock');
        menuButton.classList.toggle('active');
        menu.classList.toggle('active');
    });
    
};