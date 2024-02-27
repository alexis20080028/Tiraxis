function divCreater(className, parentElement) {
    console.log(parentElement)
    let div = document.createElement('div');
    div.classList.add(className);
    parentElement.appendChild(div);
    return div;
}

function createNews(ok,truc) {
    let articlesWrapper = document.querySelector(truc);
    for (let i = 0; i < ok; i++) {
        let article = divCreater('article', articlesWrapper);
        let newsArticle = divCreater('news__article', article);
        let titleContainer = divCreater('article__title__container', newsArticle);

        let artCircle = document.createElement('div');
        artCircle.classList.add('art-circle');

        let articleTitle = document.createElement('h3');
        articleTitle.textContent = (newsListings[i].title);

        titleContainer.appendChild(artCircle);
        titleContainer.appendChild(articleTitle);

        let articleContent = document.createElement('p');
        articleContent.textContent = (newsListings[i].content);

        let artLink = document.createElement('div');
        artLink.classList.add('art-link');

        let link1 = document.createElement('p');
        link1.textContent = 'view more';
        link1.classList.add('viewMore')

        artLink.appendChild(link1);
        newsArticle.appendChild(articleContent);
        newsArticle.appendChild(artLink);
    }
}