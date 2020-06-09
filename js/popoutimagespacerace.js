var popoutimage = document.getElementById("popOutImage");

var spaceraceimage1 = document.getElementById("spaceraceimage1");
var spaceraceimage2 = document.getElementById("spaceraceimage2");
var spaceraceimage3 = document.getElementById("spaceraceimage3");
var spaceraceimage4 = document.getElementById("spaceraceimage4");
var imagecontent = document.getElementById("imagecontent");
var captionText = document.getElementById("caption");

spaceraceimage1.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }

spaceraceimage2.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }

spaceraceimage3.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }
spaceraceimage4.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }
  
var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  popoutimage.style.display = "none";
}