var slideNum = 0;

function getSlides() {
  var i;
  var activityslides = document.getElementsByClassName("activity-slide");
  var slideshowdots = document.getElementsByClassName("slide-show-dot");
  for (i = 0; i < activityslides.length; i++) {
    activityslides[i].style.display = "none";  
  }
  slideNum++;
  if (slideNum > activityslides.length) {slideNum = 1}    
  for (i = 0; i < slideshowdots.length; i++) {
    slideshowdots[i].className = slideshowdots[i].className.replace(" active", "");
  }
  activityslides[slideNum-1].style.display = "block";  
  slideshowdots[slideNum-1].className += " active";
  setTimeout(getSlides, 5000);
}