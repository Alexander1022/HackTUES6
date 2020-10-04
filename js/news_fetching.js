let articles = [];
fetch('https://newsapi.org/v2/top-headlines?country=bg&category=health&apiKey=05ed7e75e7124bbda7fe7ffa2764fb57')
    .then((res)=>{
        return res.json()
})
.then((data)=>{
    data.articles.forEach(article => {
        document.querySelector(".title").innerHTML = 'Заглавие : ' + article.title;
        document.querySelector(".sub_title").innerHTML = 'Новина : ' + article.description;
        document.querySelector(".day").innerHTML = 'Новината е от ' + article.publishedAt;
        console.log('Сегашната новина : ' + article.title + article.description)
    })
})
.catch(err => {
    document.querySelector(".title").innerHTML = 'Има проблем с API-то за новини';
    document.querySelector(".sub_title").innerHTML = '-';
    document.querySelector(".day").innerHTML = '-';
})



window.onload = function() {
    var tips = [
        'Clean your hands often. Use soap and water, or an alcohol-based hand rub.',
        'Avoid close contact',
        'Maintain a safe distance from anyone who is coughing or sneezing.',
        'Wear a mask when physical distancing is not possible.',
        'Don’t touch your eyes, nose or mouth.',
        'Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.',
        'Stay home if you feel unwell.',
        'If you have a fever, cough and difficulty breathing, seek medical attention.'
    ];
    random_tip = Math.floor(Math.random()*tips.length);
    document.querySelector(".tips").innerHTML = tips[random_tip];
    
};




