/* When user clicks on the burger icon, the reactive class is added, if the user clicks the burger again it will turn it back into the normal navbar class */
function navBarFunction() {
    var topnavbarelement = document.getElementById("TopNavBar");
    if (topnavbarelement.className === "navbar") {
      topnavbarelement.className += " reactive";
    } else {
      topnavbarelement.className = "navbar";
    }
  }

// When the user scrolls the page, call the scrolling function
window.onscroll = function() {
  scrollingFunction()
}

// If the page has been scrolled 15 pixels from the top, display the ToTopButton
function scrollingFunction() {
  //console.log(document.body.scrollTop);
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15 ) {
    document.getElementById("ToTopButton").style.display = "block";
  }
  else {
    document.getElementById("ToTopButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}