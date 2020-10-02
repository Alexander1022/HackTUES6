var title = document.querySelector('.title_news')
var content = document.querySelector('.content_news')

fetch('https://newsapi.org/v2/top-headlines?country=bg&category=health&apiKey=05ed7e75e7124bbda7fe7ffa2764fb57')
.then(response => response.json())
.then(data => {

    console.log(data)
    var title_data = data['author'];
    var cont_data = data['description'];

    document.querySelector(".name_loc").innerHTML = nameValue;
    desc.innerHTML = "Short description : " + descValue;
    content.innerHTML = cont_data;
})

