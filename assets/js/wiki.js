const buttonMenuWiki = document.querySelectorAll('.wiki-button-menu');
const wikiMenu = document.querySelector('.wiki-menu');

for (let i = 0; i < WikiMenuNavListings.length; i++) {
  const listWrapper = document.createElement('div');
  listWrapper.classList.add('list__wrapp');

  const button = document.createElement('button');
  button.classList.add('wiki-button-menu');
  button.textContent = WikiMenuNavListings[i].button;

  const caretIcon = document.createElement('i');
  caretIcon.classList.add('fa-solid', 'fa-caret-down', 'fontawesome');

  const xmarkIcon = document.createElement('i');
  xmarkIcon.classList.add('fa-solid', 'fa-xmark', 'menu-cross', 'hide');

  button.appendChild(caretIcon);
  button.appendChild(xmarkIcon);

  const ul = document.createElement('ul');
  ul.classList.add('wiki-list');

  for (let j = 0; j < WikiMenuNavListings[i].infos.length; j++) {
    const li = document.createElement('li');
    li.classList.add('wiki-list--li');

    const a = document.createElement('a');
    a.href = '#';
    a.textContent = WikiMenuNavListings[i].infos[j];

    li.appendChild(a);
    ul.appendChild(li);
  }

  listWrapper.appendChild(button);
  listWrapper.appendChild(ul);

  wikiMenu.appendChild(listWrapper);

  // Ajouter un écouteur d'événements sur chaque bouton
  button.addEventListener('click', () => {
    const fontawesome = button.querySelector('.fontawesome');
    const wikiListInfo = listWrapper.querySelectorAll('.wiki-list--li');

    fontawesome.classList.toggle('fa-caret-down');
    fontawesome.classList.toggle('fa-xmark');

    for (let j = 0; j < wikiListInfo.length; j++) {
      wikiListInfo[j].classList.toggle('after');
    }
  });
}

