"use strict";

/*=============================================== Input image ===============================================*/
var imageInputs = document.querySelectorAll(".input-image");

if (imageInputs.length > 0) {
  imageInputs.forEach(function (container) {
    var input = container.querySelector("input");
    var id = input.getAttribute("id");
    var isDisabled = input.getAttributeNames().includes("disabled");
    var iconEmpty = container.getAttribute("data-icon-empty") || "image-solid";
    var iconHover = container.getAttribute("data-icon-hover") || "edit-solid";
    var createContainer = document.createElement("label");
    createContainer.setAttribute("for", id);
    container.appendChild(createContainer);
    var createEmptyContainer = document.createElement("span");
    createEmptyContainer.setAttribute("class", "empty-container");
    createEmptyContainer.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(iconEmpty, "\"></use></svg>");
    createContainer.appendChild(createEmptyContainer);
    var createHoverContainer = document.createElement("span");
    createHoverContainer.setAttribute("class", "hover-container");
    createHoverContainer.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(iconHover, "\"></use></svg>");
    createContainer.appendChild(createHoverContainer);

    if (isDisabled) {
      createContainer.classList.add("disabled");
    }

    var emptyContainer = createContainer.querySelector(".empty-container") || undefined;
    input.addEventListener("change", function () {
      var file = input.files[0];
      var picture = document.createElement("img");
      var url = URL.createObjectURL(file);
      picture.setAttribute("src", url);

      if (createContainer.firstElementChild.tagName === "SPAN") {
        createContainer.removeChild(emptyContainer);
      } else {
        var img = createContainer.querySelector("img");
        createContainer.removeChild(img);
      }

      createContainer.insertBefore(picture, createHoverContainer);
    });
  });
}