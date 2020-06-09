var popoutimage = document.getElementById("popOutImage");

var communistrallyimage1 = document.getElementById("communistrallyimage1");
var communistrallyimage2 = document.getElementById("communistrallyimage2");
var communistrallyimage3 = document.getElementById("communistrallyimage3");
var communistrallyimage4 = document.getElementById("communistrallyimage4");
var communistrallyimage5 = document.getElementById("communistrallyimage5");
var communistrallyimage6 = document.getElementById("communistrallyimage6");
var communistrallyimage7 = document.getElementById("communistrallyimage7");
var imagecontent = document.getElementById("imagecontent");
var captionText = document.getElementById("caption");

communistrallyimage1.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }

communistrallyimage2.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }

communistrallyimage3.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }
communistrallyimage4.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }
  
communistrallyimage5.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }
    
communistrallyimage6.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }

communistrallyimage7.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
    aptionText.innerHTML = this.alt;
  }
      
var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  popoutimage.style.display = "none";
}