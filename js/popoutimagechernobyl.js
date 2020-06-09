var popoutimage = document.getElementById("popOutImage");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var pripyatimage1 = document.getElementById("chernobylimage1");
var pripyatimage2 = document.getElementById("chernobylimage2");
var pripyatimage3 = document.getElementById("chernobylimage3");
var pripyatimage4 = document.getElementById("chernobylimage4");
var pripyatimage5 = document.getElementById("chernobylimage5");
var imagecontent = document.getElementById("imagecontent");
var captionText = document.getElementById("caption");

chernobylimage1.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }

chernobylimage2.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }

chernobylimage3.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }
chernobylimage4.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }
  
chernobylimage5.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }
    
      
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  popoutimage.style.display = "none";
}