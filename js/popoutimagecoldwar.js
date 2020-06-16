var popoutimage = document.getElementById("popOutImage");

var coldwarimage1 = document.getElementById("coldwarimage1");
var coldwarimage2 = document.getElementById("coldwarimage2");
var coldwarimage3 = document.getElementById("coldwarimage3");
var coldwarimage4 = document.getElementById("coldwarimage4");
var coldwarimage5 = document.getElementById("coldwarimage5");
var coldwarimage6 = document.getElementById("coldwarimage6");
var coldwarimage7 = document.getElementById("coldwarimage7");
var coldwarimage8 = document.getElementById("coldwarimage8");
var coldwarimage9 = document.getElementById("coldwarimage9");
var imagecontent = document.getElementById("imagecontent");
var captionText = document.getElementById("caption");

coldwarimage1.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

coldwarimage2.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

coldwarimage3.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}
coldwarimage4.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

coldwarimage5.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

coldwarimage6.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

coldwarimage7.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

coldwarimage8.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

coldwarimage9.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  popoutimage.style.display = "none";
}