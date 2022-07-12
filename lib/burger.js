"use strict";

/*=============================================== Burger ===============================================*/
var burgers = document.querySelectorAll(".burger");

var openBurger = function openBurger(burger) {
  return burger.classList.toggle("burger-open");
};

if (burgers.length > 0) {
  burgers.forEach(function (container) {
    var topBar = document.createElement("span");
    var middleBar = document.createElement("span");
    var bottomBar = document.createElement("span");
    container.appendChild(topBar);
    container.appendChild(middleBar);
    container.appendChild(bottomBar);
    container.addEventListener("click", function () {
      return openBurger(container);
    });
  });
}