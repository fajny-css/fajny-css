"use strict";

/*=============================================== Toasts ===============================================*/
var toasts = document.querySelectorAll(".toast");

if (toasts.length > 0) {
  toasts.forEach(function (container) {
    var title = container.getAttribute("data-title") || "Title";
    var icon = container.getAttribute("data-icon") || undefined;
    var iconClose = container.getAttribute("data-icon-close") ? container.getAttribute("data-icon-close") : container.hasAttribute("data-close") ? "close-solid" : undefined;
    var createTitle = document.createElement("h5");
    createTitle.innerText = title;

    if (icon || iconClose) {
      var createTitleContainer = document.createElement("span");
      createTitleContainer.setAttribute("class", "title-container");

      if (icon) {
        var createIcon = document.createElement("span");
        createIcon.setAttribute("class", "icon-container");
        createIcon.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(icon, "\"></use></svg>");
        createTitleContainer.appendChild(createIcon);
      }

      createTitleContainer.appendChild(createTitle);

      if (iconClose) {
        var createButton = document.createElement("button");
        createButton.setAttribute("class", "button-close");
        createButton.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(iconClose, "\"></use></svg>");
        createTitleContainer.appendChild(createButton);
        createButton.addEventListener("click", function () {
          return container.style.display = "none";
        });
      }

      container.prepend(createTitleContainer);
    } else {
      container.prepend(createTitle);
    }
  });
}