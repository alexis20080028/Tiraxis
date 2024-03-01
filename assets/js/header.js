const body = document.body;
const buttonMenu = document.querySelector('.button__wrap');
const burgerInfo = document.querySelector('.header__after');
const btnOn = document.querySelector('.btn__on');
const circleOn = document.querySelector('.circle__on');
const on = document.querySelector('.on');
let buttonSign = document.querySelectorAll('.signUpButton');
let buttonLogin = document.querySelectorAll('.loginButton');
// Button | On/Off

buttonMenu.addEventListener('click', () => {
    buttonMenu.classList.toggle('cross');
    burgerInfo.classList.toggle('close');

    buttonMenu.classList.toggle('closedbtn');
    buttonMenu.classList.toggle('openbtn');

    burgerInfo.classList.toggle('openMenu');
});

btnOn.addEventListener('click', () => {
    btnOn.classList.toggle('btn__on');
    btnOn.classList.toggle('btn__off');
    circleOn.classList.toggle('circle__on');
    circleOn.classList.toggle('circle__off');
    on.classList.toggle('on');
    on.classList.toggle('off');
    on.textContent = (on.classList.contains('on') ? 'ON' : 'OFF');

    if (body.dataset.theme === 'light') {
        body.dataset.theme = 'dark';
    } else {
        body.dataset.theme = 'light';
    }

});