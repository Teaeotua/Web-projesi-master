document.write("index.html")
button = document.getElementById("topBtn");
news = document.getElementById("news")
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function topFunc() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

function newsFunc() {
  news.style.display="block"
  }
  
function disappearFunc() {
  news.style.display="none";
}