var popoutimage = document.getElementById("popOutImage");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var pripyatimage1 = document.getElementById("pripyatimage1");
var pripyatimage2 = document.getElementById("pripyatimage2");
var pripyatimage3 = document.getElementById("pripyatimage3");
var pripyatimage4 = document.getElementById("pripyatimage4");
var pripyatimage5 = document.getElementById("pripyatimage5");
var pripyatimage6 = document.getElementById("pripyatimage6");
var imagecontent = document.getElementById("imagecontent");
var captionText = document.getElementById("caption");

pripyatimage1.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }

pripyatimage2.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }

pripyatimage3.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }
pripyatimage4.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }
  
pripyatimage5.onclick= function(){
  popoutimage.style.display = "block";
  imagecontent.src = this.src;
  captionText.innerHTML = this.alt;
  }
    
pripyatimage6.onclick= function(){
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