var popoutimage = document.getElementById("popOutImage");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var surfer = document.getElementById("surfer");
var redsquare = document.getElementById("redsquare");
var widevodka = document.getElementById("widevodka");
var imagecontent = document.getElementById("imagecontent");
var captionText = document.getElementById("caption");

surfer.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

redsquare.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

widevodka.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  popoutimage.style.display = "none";
}