function zoomCreator(className, parentElement, zoom) {
    let div = document.createElement('div');
    div.classList.add(className + zoom);
    parentElement.appendChild(div);
    return div;
}

function createNews(truc, zoom, i, ok) {
    let articlesWrapper = document.querySelector(truc);
    let article = zoomCreator('article', articlesWrapper, zoom);
    let newsArticle = zoomCreator('news__article', article, zoom);
    let titleContainer = zoomCreator('article__title__container', newsArticle, zoom);

    let artCircle = document.createElement('div');
    artCircle.classList.add('art-circle' + zoom);

    let articleTitle = document.createElement('h3');
    articleTitle.textContent = (newsListings[i].title);

    titleContainer.appendChild(artCircle);
    titleContainer.appendChild(articleTitle);

    let articleContent = document.createElement('p');
    articleContent.textContent = (newsListings[i].content);

    let artLink = document.createElement('div');
    artLink.classList.add('art-link' + zoom);
    if (ok == true) {
        let link1 = document.createElement('p');
        link1.textContent = 'view more';
        link1.classList.add('viewMore' + zoom)
        artLink.appendChild(link1);
    }

    newsArticle.appendChild(articleContent);
    newsArticle.appendChild(artLink);

}