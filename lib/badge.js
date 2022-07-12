"use strict";

/*=============================================== Badge ===============================================*/
var iconBadges = document.querySelectorAll(".badge[data-icon]");

if (iconBadges.length > 0) {
  iconBadges.forEach(function (container) {
    var icon = container.getAttribute("data-icon");
    var createIcon = document.createElement("span");
    createIcon.setAttribute("class", "icon-container");
    createIcon.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(icon, "\"></use></svg>");
    container.appendChild(createIcon);
  });
}