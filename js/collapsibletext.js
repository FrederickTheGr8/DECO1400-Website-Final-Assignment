var collapsibletext = document.getElementsByClassName("collapsible-text");
var i;

for (i = 0; i < collapsibletext.length; i++) {
    collapsibletext[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var core = this.nextElementSibling;

    if (core.style.display === "block") {
      core.style.display = "none";
    } 
    
    else {
      core.style.display = "block";
    }
  }
  );
}