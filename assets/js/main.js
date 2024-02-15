const buttonBurger = document.querySelector('.containBurgerMenuOpen');
const burgerWrapper = document.querySelector('.burWrapper');
const buttonOn = document.querySelector('.buttonOn');
const rondOn = document.querySelector('.rondOn');
const on = document.querySelector('.on')

buttonBurger.addEventListener('click', function () {
    burgerWrapper.classList.toggle('burgerWrapper');
    burgerWrapper.classList.toggle('display')
})

buttonOn.addEventListener('click', function () {
    buttonOn.classList.toggle('buttonOn');
    buttonOn.classList.toggle('buttonOff');
    rondOn.classList.toggle('rondOn');
    rondOn.classList.toggle('rondOff');
    on.classList.toggle('on');
    on.classList.toggle('off');
})