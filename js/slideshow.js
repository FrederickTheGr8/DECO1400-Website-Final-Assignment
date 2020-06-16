var slideNum = 0;

function getSlides() {
  var i;
  var activityslides = document.getElementsByClassName("activity-slide");

  for (i = 0; i < activityslides.length; i++) {
    activityslides[i].style.display = "none";
  }

  slideNum++;

  if (slideNum > activityslides.length) {
    slideNum = 1
  }

  activityslides[slideNum - 1].style.display = "block";
  setTimeout(getSlides, 6000);
}