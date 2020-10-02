let articles = [];
fetch('https://newsapi.org/v2/top-headlines?country=bg&category=health&apiKey=05ed7e75e7124bbda7fe7ffa2764fb57')
    .then((res)=>{
        return res.json()
})
.then((data)=>{
    data.articles.forEach(article => {
        document.querySelector(".title_news").innerHTML = 'Заглавие : ' + article.title;
        document.querySelector(".content_news").innerHTML = 'Новина : ' + article.description;
        document.querySelector(".date_of_news").innerHTML = 'Новината е от ' + article.publishedAt;
        console.log('Сегашната новина : ' + article.title + article.description)

    })
})
.catch(err => {
    document.querySelector(".title_news").innerHTML = 'Има проблем с API-то за новини';
    document.querySelector(".content_news").innerHTML = '-';
    document.querySelector(".date_of_news").innerHTML = '-';
})