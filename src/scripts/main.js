document.addEventListener('DOMContentLoaded', function() {
    const headerMobileMenu = document.querySelector('.header__mobile');
    const navMenu = document.querySelector('.header__nav');

    headerMobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('header__nav--is-active')
    })
})