const buttonMenu = document.querySelector('.button__wrap');
const burgerInfo = document.querySelector('.header__after');
const btnOn = document.querySelector('.btn__on');
const circleOn = document.querySelector('.circle__on');
const on = document.querySelector('.on');

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
        root.style.setProperty('--artitcle-color', 'var(--very-dark-grey)');
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
        root.style.setProperty('--artitcle-color', 'var(--mid-purple)');
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

buttonMenu.addEventListener('click', () => {
    burgerInfo.classList.toggle('header__after');
    burgerInfo.classList.toggle('hide');
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


