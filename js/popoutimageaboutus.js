var popoutimage = document.getElementById("popOutImage");

var aboutusimage1 = document.getElementById("aboutusimage1");
var aboutusimage2 = document.getElementById("aboutusimage2");
var aboutusimage3 = document.getElementById("aboutusimage3");

var imagecontent = document.getElementById("imagecontent");
var captionText = document.getElementById("caption");

aboutusimage1.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }

aboutusimage2.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }

aboutusimage3.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  popoutimage.style.display = "none";
}