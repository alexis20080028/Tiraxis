const buttonMenu = document.querySelector('.button__wrap');
const burgerInfo = document.querySelector('.header__after');
const btnOn = document.querySelector('.btn__on');
const circleOn = document.querySelector('.circle__on');
const on = document.querySelector('.on');

buttonMenu.addEventListener('click', function () {
    burgerInfo.classList.toggle('header__after');
    burgerInfo.classList.toggle('hide');
});

btnOn.addEventListener('click', function () {
    btnOn.classList.toggle('btn__on');
    btnOn.classList.toggle('btn__off');
    circleOn.classList.toggle('circle__on');
    circleOn.classList.toggle('circle__off');
    on.classList.toggle('on');
    on.classList.toggle('off');
    let oncontent = (on.textContent == 'on' ? "off" : "on");
    if (on.classList.contains('on')) {
        on.textContent = 'ON';
    } else {
        on.textContent = 'OFF';
    }
});