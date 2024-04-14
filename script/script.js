function toggleNavbar() {
  var navbar = document.getElementById("main-navbar");
  if (navbar.style.maxHeight === "0px") {
    navbar.style.maxHeight = navbar.scrollHeight + "px";
  } else {
    navbar.style.maxHeight = "0px"; 
  }
}

const accordionHeaders = document.querySelectorAll(".service-accordion h3");

accordionHeaders.forEach(header => {
  header.addEventListener("click", function() {
    const content = this.nextElementSibling;
    const isExpanded = content.classList.contains("active");

    content.classList.toggle("active");

    if (isExpanded) {
      content.style.maxHeight = 0;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
