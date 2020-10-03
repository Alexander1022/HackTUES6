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