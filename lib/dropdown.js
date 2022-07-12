"use strict";

/*=============================================== Dropdown ===============================================*/
var dropdowns = document.querySelectorAll(".dropdown-container");

if (dropdowns.length > 0) {
  dropdowns.forEach(function (container) {
    var button = container.querySelector(".btn");
    var dropdown = container.querySelector(".dropdown");
    button.addEventListener("click", function () {
      dropdown.classList.toggle("dropdown-open");
    });
  });
}