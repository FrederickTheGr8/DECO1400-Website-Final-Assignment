/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navBarFunction() {
    var x = document.getElementById("TopNavBar");
    if (x.className === "navbar") {
      x.className += "responsive";
    } else {
      x.className = "navbar";
    }
  }