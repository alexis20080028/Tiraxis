const buttonBurger = document.querySelector('.containBurgerMenuOpen');
const burgerWrapper = document.querySelector('.burWrapper');

buttonBurger.addEventListener('click', function () {
    burgerWrapper.classList.toggle('burgerWrapper');
    burgerWrapper.classList.toggle('display')
})