"use strict";

/*=============================================== Header ===============================================*/
var headers = document.querySelectorAll(".header");

if (headers.length > 0) {
  headers.forEach(function (container) {
    var burger = container.querySelector(".burger");
    burger.addEventListener("click", function () {
      return container.classList.toggle("header-open");
    });
  });
}