var popoutimage = document.getElementById("popOutImage");

var chernobylimage1 = document.getElementById("chernobylimage1");
var chernobylimage2 = document.getElementById("chernobylimage2");
var chernobylimage3 = document.getElementById("chernobylimage3");
var chernobylimage4 = document.getElementById("chernobylimage4");
var chernobylimage5 = document.getElementById("chernobylimage5");
var chernobylimage6 = document.getElementById("chernobylimage5");
var imagecontent = document.getElementById("imagecontent");
var captionText = document.getElementById("caption");

chernobylimage1.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

chernobylimage2.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

chernobylimage3.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}
chernobylimage4.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

chernobylimage5.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

chernobylimage6.onclick = function () {
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  popoutimage.style.display = "none";
}