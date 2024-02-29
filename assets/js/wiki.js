const buttonMenuWiki = document.querySelectorAll('.wiki-button-menu');
const fontawesome = document.querySelectorAll('.fontawesome');
const wikiList = document.querySelectorAll('.wiki-list');
const wikiListInfo = document.querySelectorAll('.wiki-list li');

for (let i = 0; i < wikiList.length; i++) {
  buttonMenuWiki[i].addEventListener('click', () => {
    fontawesome[i].classList.toggle('fa-caret-down');
    fontawesome[i].classList.toggle('fa-xmark');
    buttonMenuWiki[i].backgroundColor = "var(--very-dark-grey)"
    wikiList[i].classList.toggle('hide')
  })
}