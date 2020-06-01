var collapsibletext = document.getElementsByClassName("collapsible-text");
var i;

for (i = 0; i < collapsibletext.length; i++) {
    collapsibletext[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}