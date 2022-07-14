"use strict";

/*=============================================== Button ===============================================*/

/*==================== Icon button ====================*/
var iconButtonsLeft = document.querySelectorAll(".btn[data-icon-left]");
var iconButtonsRight = document.querySelectorAll(".btn[data-icon-right]");

if (iconButtonsLeft.length > 0 || iconButtonsRight.length > 0) {
  var addIcon = function addIcon(button, position) {
    button.forEach(function (container) {
      var icon = container.getAttribute("data-icon-left") || container.getAttribute("data-icon-right");
      var content = container.childNodes[0];
      var createIcon = document.createElement("span");
      createIcon.setAttribute("class", "icon-container");
      createIcon.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(icon, "\"></use></svg>");

      if (position === "left") {
        container.insertBefore(createIcon, content);
      }

      if (position === "right") {
        container.appendChild(createIcon);
      }
    });
  };

  addIcon(iconButtonsLeft, "left");
  addIcon(iconButtonsRight, "right");
}
/*==================== Loading button ====================*/


var loadingButtons = document.querySelectorAll(".btn[data-loading]");

if (loadingButtons.length > 0) {
  loadingButtons.forEach(function (container) {
    container.setAttribute("disabled", "");
    var firstChild = container.childNodes[0];
    var createLoader = document.createElement("span");
    createLoader.setAttribute("class", "loader");
    createLoader.setAttribute("data-size", "xxs");
    createLoader.setAttribute("data-color", "gray");
    container.insertBefore(createLoader, firstChild);
  });
}