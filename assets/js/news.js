const body = document.body;
let viewMor = document.querySelectorAll('.viewMore')
let buttonMenu = document.querySelector('.button__wrap');
let burgerInfo = document.querySelector('.header__after');
let btnOn = document.querySelector('.btn__on');
let circleOn = document.querySelector('.circle__on');
let on = document.querySelector('.on');

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

// Zoom

function createExit() {
    let mainNews = document.querySelector('.news__article__zoom')
    let cross = document.createElement('div');
    cross.classList.add('zoom-arrow-close');
    mainNews.append(cross);

    cross.addEventListener('click', function () {
        let articleZoom = document.querySelector(".article__zoom")
        cross.remove()
        articleZoom.remove()
        body.classList.remove('overflowHid');
    })

}

// Div Creator 

function divCreator(className, parentElement) {
    let div = document.createElement('div');
    div.classList.add(className);
    parentElement.appendChild(div);
    return div;
}

let viewMore;

const articlesWrapper = document.querySelector('.news__articles__wrap');

for (let i = 0; i < newsListings.length; i++) {
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

    link1.addEventListener('click', function () {
        createNews(".main__news", "__zoom", i, false);
        createExit()
        body.classList.add('overflowHid');
    })

    newsArticle.appendChild(articleContent);
    newsArticle.appendChild(artLink);
}

