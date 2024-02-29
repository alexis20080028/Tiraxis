function divCreater(className, parentElement,zoom) {
    let div = document.createElement('div');
    div.classList.add(className+zoom);
    parentElement.appendChild(div);
    return div;
}

function createNews(ok,truc,zoom) {
    let articlesWrapper = document.querySelector(truc);
    console.log(3)
    for (let i = 0; i < ok; i++) {
        let article = divCreater('article', articlesWrapper,zoom);
        let newsArticle = divCreater('news__article', article,zoom);
        let titleContainer = divCreater('article__title__container', newsArticle,zoom);

        let artCircle = document.createElement('div');
        artCircle.classList.add('art-circle'+zoom);

        let articleTitle = document.createElement('h3');
        articleTitle.textContent = (newsListings[i].title);

        titleContainer.appendChild(artCircle);
        titleContainer.appendChild(articleTitle);

        let articleContent = document.createElement('p');
        articleContent.textContent = (newsListings[i].content);

        let artLink = document.createElement('div');
        artLink.classList.add('art-link'+zoom);

        let link1 = document.createElement('p');
        link1.textContent = 'view more';
        link1.classList.add('viewMore'+zoom)

        artLink.appendChild(link1);
        newsArticle.appendChild(articleContent);
        newsArticle.appendChild(artLink);
    }
}