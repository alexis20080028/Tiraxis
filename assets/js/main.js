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
    let oncontent = (on.textContent == 'on' ? "off" : "on")
    if (on.classList.contains('on')) {
        on.textContent = 'ON';
    } else {
        on.textContent = 'OFF';
    }
});

//news full js

const containNews = document.querySelector('.containNews');

for (let i = 0; i < 3; i++) {
    let div = document.createElement('div');
    div.classList.add('wrapperContainNews')
    containNews.append(div);
    let wrapperContainNews = document.querySelectorAll('.wrapperContainNews')
    let htre = document.createElement('h3');
    htre.textContent = (newsListings[i].title)
    htre.classList.add('titleNews');
    wrapperContainNews[i].append(htre)
    let p = document.createElement('p');
    p.classList.add('pNews')
    p.textContent = (newsListings[i].content)
    wrapperContainNews[i].append(p)
    let divContainA = document.createElement('div')
    divContainA.classList.add('containANews')
    wrapperContainNews[i].append(divContainA)
    let containANews = document.querySelectorAll('.containANews');
    let a = document.createElement('a')
    a.textContent = "En savoir plus"
    a.classList.add('aNews')
    containANews[i].append(a)
}