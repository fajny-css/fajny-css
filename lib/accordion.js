"use strict";

/*=============================================== Accordion ===============================================*/
var accordions = document.querySelectorAll(".accordion");

if (accordions.length > 0) {
  accordions.forEach(function (container) {
    var items = container.querySelectorAll(".accordion-item");
    var icon = container.getAttribute("data-icon") || "plus";
    items.forEach(function (item) {
      var title = item.getAttribute("data-title") || "Title";
      var content = item.childNodes[0];
      var createButton = document.createElement("button");
      createButton.setAttribute("class", "button-accordion");
      createButton.innerText = title;
      var createIcon = document.createElement("span");
      createIcon.setAttribute("class", "icon-container");
      createIcon.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(icon !== "plus" ? "chevron-down-solid" : "plus-solid", "\"></use></svg>");
      createButton.appendChild(createIcon);
      item.insertBefore(createButton, content);
      createButton.addEventListener("click", function () {
        item.classList.toggle("accordion-item-open");
      });
    });
  });
}