const body = document.body;
const buttonMenu = document.querySelector('.button__wrap');
const burgerInfo = document.querySelector('.header__after');
const btnOn = document.querySelector('.btn__on');
const circleOn = document.querySelector('.circle__on');
const on = document.querySelector('.on');

// Burger Menu

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

// News | Functions

function divCreator(className, parentElement) {
    let div = document.createElement('div');
    div.classList.add(className);
    parentElement.appendChild(div);
    return div;
}

const articlesWrapper = document.querySelector('.news__articles__wrap');

for (let i = 0; i < 3; i++) {
    const article = divCreator('article', articlesWrapper);
    const newsArticle = divCreator('news__article', article);
    const titleContainer = divCreator('article__title__container', newsArticle);

    const artCircle = document.createElement('div');
    artCircle.classList.add('art-circle');

    const articleTitle = document.createElement('h3');
    articleTitle.textContent = (newsListings[i].title);

    titleContainer.appendChild(artCircle);
    titleContainer.appendChild(articleTitle);

    const articleContent = document.createElement('p');
    articleContent.textContent = (newsListings[i].content);

    const artLink = document.createElement('div');
    artLink.classList.add('art-link');

    const link1 = document.createElement('a');
    link1.setAttribute('href', '#');
    link1.textContent = 'Lien';

    artLink.appendChild(link1);

    newsArticle.appendChild(articleContent);
    newsArticle.appendChild(artLink);
}


