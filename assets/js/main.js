const buttonMenu = document.querySelector('.button__wrap');
const burgerInfo = document.querySelector('.header__after');
const btnOn = document.querySelector('.btn__on');
const circleOn = document.querySelector('.circle__on');
const on = document.querySelector('.on');

// Mode | Dark/Light

const enableDarkMode = () => {
    document.documentElement.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
};

const disableDarkMode = () => {
    document.documentElement.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
};

const toggleDarkMode = () => {
    const root = document.documentElement;
    if (btnOn.classList.contains('btn__off')) {
        // Mode sombre
        root.style.setProperty('--header-BG', 'var(--linear-gradient-1)');
        root.style.setProperty('--main-BG', 'var(--dark-grey)');
        root.style.setProperty('--wiki-BG', 'var(--linear-gradient-3)');
        root.style.setProperty('--switch__on-to-dark', 'var(--white)');
        root.style.setProperty('--dowload-color', 'var(--white-alternate)');
        root.style.setProperty('--dowload-BG', 'var(--red)');
        root.style.setProperty('--dowload-font', 'var(--white-alternate)');
        root.style.setProperty('--to-darker', 'var(--dark-grey)');
        root.style.setProperty('--button-discord', 'var(--dark-purple)');
        root.style.setProperty('--button-wiki', 'var(--dark-green)');
        root.style.setProperty('--artitcle-color', 'var(--very-dark-grey)');
        root.style.setProperty('--artitcle-box-shadow', 'var(--box-shadow)');
        enableDarkMode();
    } else {
        // Mode clair
        root.style.setProperty('--header-BG', 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(116, 91, 208, 1) 100%)');
        root.style.setProperty('--main-BG', 'var(--white-alternate)');
        root.style.setProperty('--wiki-BG', 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(60, 133, 39, 1) 100%)');
        root.style.setProperty('--switch__on-to-dark', '#1E1E1E');
        root.style.setProperty('--switch__on-to-white', 'var(--white)');
        root.style.setProperty('--dowload-color', '#D90000');
        root.style.setProperty('--dowload-font', '#D90000');
        root.style.setProperty('--dowload-BG', 'var(--white-alternate)');
        root.style.setProperty('--to-darker', 'var(--very-dark-grey)');
        root.style.setProperty('--button-discord', 'var(--mid-purple)');
        root.style.setProperty('--button-wiki', 'url(../images/Snow_BG.jpg)');
        root.style.setProperty('--artitcle-color', 'var(--mid-purple)');
        root.style.setProperty('--artitcle-box-shadow', 'rgba(132, 118, 222, 1) -8px 11px 35px 8px');
        disableDarkMode();
    }
};

const applyDarkMode = () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
};

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

// News | Functions

function divCreater(className, parentElement) {
    let div = document.createElement('div');
    div.classList.add(className);
    parentElement.appendChild(div);
    return div;
}

const articlesWrapper = document.querySelector('.news__articles__wrap');

for (let i = 0; i < 3; i++) {
    const article = divCreater('article', articlesWrapper);
    const newsArticle = divCreater('news__article', article);
    const titleContainer = divCreater('article__title__container', newsArticle);

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

    const link2 = document.createElement('a');
    link2.setAttribute('href', '#');
    link2.textContent = 'Lien';

    artLink.appendChild(link1);
    artLink.appendChild(link2);

    newsArticle.appendChild(articleContent);
    newsArticle.appendChild(artLink);
}


