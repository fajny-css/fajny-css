"use strict";

/*=============================================== Modal ===============================================*/
var modals = document.querySelectorAll(".modal-container");

if (modals.length > 0) {
  modals.forEach(function (container) {
    var button = container.querySelector(".open-modal");
    var modal = container.querySelector(".modal");
    var body = document.body;
    var closeButton = container.querySelector(".btn-close") || undefined;
    button.addEventListener("click", function () {
      modal.classList.add("modal-open");
      body.classList.add("stop-scrolling");
    });
    var iconClose = container.getAttribute("data-close-icon") ? container.getAttribute("data-close-icon") : container.hasAttribute("data-close") ? "close-solid" : undefined;

    var closeModal = function closeModal() {
      modal.classList.remove("modal-open");
      body.classList.remove("stop-scrolling");
    };

    if (iconClose) {
      var createCloseButton = document.createElement("button");
      createCloseButton.setAttribute("class", "button-close");
      createCloseButton.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(iconClose, "\"></use></svg>");
      modal.prepend(createCloseButton);
      createCloseButton.addEventListener("click", function () {
        return closeModal();
      });
    } else if (closeButton) {
      closeButton.addEventListener("click", function () {
        return closeModal();
      });
    } else {
      modal.addEventListener("click", function () {
        return closeModal();
      });
    }
  });
}