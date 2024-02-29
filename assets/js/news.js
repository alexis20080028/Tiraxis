let viewMor = document.querySelectorAll('.viewMore')
let buttonMenu = document.querySelector('.button__wrap');
let burgerInfo = document.querySelector('.header__after');
let btnOn = document.querySelector('.btn__on');
let circleOn = document.querySelector('.circle__on');
let on = document.querySelector('.on');
let buttonzoom = document.querySelectorAll('.viewMore');



function createExit() {
    let mainNews = document.querySelector('.article__title__container__zoom')
    let cross = document.createElement('div');
    cross.classList.add('close');
    mainNews.append(cross);

    cross.addEventListener('click', function() {
        let articleZoom = document.querySelector(".article__zoom")
        cross.remove()
        articleZoom.remove()

    })
    
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

for (let i = 0; i < buttonzoom.length; i++) {
    buttonzoom[i].addEventListener('click', function () {
        createNews(".main__news", "__zoom", i,false);
        createExit()
    })
}