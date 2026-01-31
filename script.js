const menuButton = document.getElementById('header-button');
const menu = document.getElementById('header-menu');

window.onload = function() {
    menuButton.addEventListener('click', () => {
        document.body.classList.toggle('lock');
        menuButton.classList.toggle('active');
        menu.classList.toggle('active');
    });
};