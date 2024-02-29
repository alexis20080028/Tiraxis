/*
1. Sélectionne des éléments sur le DOM
2. Crée tes fonctions
3. Ajoute tes eventListeners
4. Ajoute une fonction main
*/
let viewMor = document.querySelectorAll('.viewMore')
let buttonMenu = document.querySelector('.button__wrap');
let burgerInfo = document.querySelector('.header__after');
let btnOn = document.querySelector('.btn__on');
let circleOn = document.querySelector('.circle__on');
let on = document.querySelector('.on');
let buttonzoom = document.querySelectorAll('.viewMore');



function name(params) {
    
}

// Button | On/Off
buttonMenu.addEventListener('click', () => {
    buttonMenu.classList.toggle('cross');
    burgerInfo.classList.toggle('close');

    buttonMenu.classList.toggle('closedbtn');
    buttonMenu.classList.toggle('openbtn');

    burgerInfo.classList.toggle('openMenu');
});

btnOn.addEventListener('click', () => {
    toggleDarkMode();
    btnOn.classList.toggle('btn__on');
    btnOn.classList.toggle('btn__off');
    circleOn.classList.toggle('circle__on');
    circleOn.classList.toggle('circle__off');
    on.classList.toggle('on');
    on.classList.toggle('off');
    on.textContent = (on.classList.contains('on') ? 'ON' : 'OFF');
});

for (let i = 0; i < buttonzoom.length; i++) {
    buttonzoom[i].addEventListener('click', function() {
		createNews(1, ".news__articles__wrap","__zoom",i);
    })
}
