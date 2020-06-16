var topnavbarelement = document.getElementById("TopNavBar");

function navBarFunction() {

  if (topnavbarelement.className === "navbar") {
    topnavbarelement.className += " reactive";
  } else {
    topnavbarelement.className = "navbar";
  }
}

window.onscroll = function () {
  scrollingFunction()
}

function scrollingFunction() {

  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    document.getElementById("ToTopButton").style.display = "block";
  } else {
    document.getElementById("ToTopButton").style.display = "none";
  }
}

function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}