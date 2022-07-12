"use strict";

/*=============================================== Button ===============================================*/

/*==================== Icon ====================*/
var buttonIcons = document.querySelectorAll(".btn-icon");

if (buttonIcons.length > 0) {
  buttonIcons.forEach(function (container) {
    var icon = container.getAttribute("data-icon");
    var createIcon = document.createElement("span");
    createIcon.setAttribute("class", "icon-container");
    createIcon.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(icon, "\"></use></svg>");
    container.appendChild(createIcon);
  });
}
/*==================== Loading ====================*/


var loadingIconButtons = document.querySelectorAll(".btn-icon[data-loading]");

if (loadingIconButtons.length > 0) {
  loadingIconButtons.forEach(function (container) {
    var icon = container.childNodes[0];
    container.removeChild(icon);
    container.setAttribute("disabled", "");
    var createLoader = document.createElement("span");
    createLoader.setAttribute("class", "loader");
    createLoader.setAttribute("data-size", "s");
    createLoader.setAttribute("data-color", "gray");
    container.appendChild(createLoader);
  });
}