
/*var firebaseConfig = {
    apiKey: "AIzaSyC1xe-sbWGq8GujxcfsGmmexMf6ZdICkLY",
    authDomain: "covidnews-e9205.firebaseapp.com",
    databaseURL: "https://covidnews-e9205.firebaseio.com",
    projectId: "covidnews-e9205",
    storageBucket: "covidnews-e9205.appspot.com",
    messagingSenderId: "525444307116",
    appId: "1:525444307116:web:d1d0c2d10fce817f2b6709",
    measurementId: "G-28D8123FTK"
}; 

firebase.initializeApp(firebaseConfig);
firebase.analytics();*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slide = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slide[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//функцията отдолу е за navbar-a
  function myFunction() {
    var x = document.getElementById("navigation");
    if (x.className === "nav_bar") {
        x.className += " responsive";
    } 
    else {
      x.className = "nav_bar";
    }
  }