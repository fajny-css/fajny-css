"use strict";

/*=============================================== Input ===============================================*/

/*==================== Common functions ====================*/
var createRightContainer = function createRightContainer() {
  var rightContainer = document.createElement("span");
  rightContainer.setAttribute("class", "right-container");
  return rightContainer;
};

var createButtonInput = function createButtonInput(iconName) {
  var button = document.createElement("button");
  button.setAttribute("class", "btn-input");
  button.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(iconName, "\"></use></svg>");
  return button;
};
/*==================== Input password ====================*/


var passwordInputs = document.querySelectorAll(".input-password");

if (passwordInputs.length > 0) {
  passwordInputs.forEach(function (container) {
    var input = container.querySelector("input");
    var isDisabled = input.getAttributeNames().includes("disabled");
    var rightContainer = createRightContainer();
    container.appendChild(rightContainer);
    var button = createButtonInput();
    rightContainer.appendChild(button);
    var iconHide = container.getAttribute("data-icon-hide") || undefined;
    var iconShow = container.getAttribute("data-icon-show") || undefined;
    var textHide = container.getAttribute("data-text-hide") || "Hide";
    var textShow = container.getAttribute("data-text-show") || "Show";
    input.setAttribute("type", "password");

    if (iconHide && iconShow) {
      button.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(input.getAttribute("type") === "password" ? iconShow : iconHide, "\"></use></svg>");
    } else {
      button.innerText = input.getAttribute("type") === "password" ? textShow : textHide;
    }

    if (isDisabled) {
      button.setAttribute("disabled", "");
    }

    button.addEventListener("click", function () {
      if (input.getAttribute("type") === "password") {
        input.setAttribute("type", "text");

        if (iconHide && iconShow) {
          button.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(iconHide, "\"></use></svg>");
        } else {
          button.innerText = textHide;
        }
      } else {
        input.setAttribute("type", "password");

        if (iconHide && iconShow) {
          button.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(iconShow, "\"></use></svg>");
        } else {
          button.innerText = textShow;
        }
      }
    });
  });
}
/*==================== Input url ====================*/


var urlInputs = document.querySelectorAll(".input-url");

if (urlInputs.length > 0) {
  urlInputs.forEach(function (container) {
    var input = container.querySelector("input");
    var isDisabled = input.getAttributeNames().includes("disabled");
    var createLeftContainer = document.createElement("span");
    createLeftContainer.setAttribute("class", "url-container");
    createLeftContainer.innerText = "http://";

    if (isDisabled) {
      createLeftContainer.classList.add("disabled");
    }

    container.insertBefore(createLeftContainer, input);
  });
}
/*==================== Input search ====================*/


var searchInputs = document.querySelectorAll(".input-search");

if (searchInputs.length > 0) {
  searchInputs.forEach(function (container) {
    var input = container.querySelector("input");
    var icon = container.getAttribute("data-icon-clear") || "close-solid";
    var rightContainer = createRightContainer();

    if (input.value.length > 0) {
      container.appendChild(rightContainer);
    }

    var button = createButtonInput(icon);
    rightContainer.appendChild(button);
    input.addEventListener("input", function () {
      if (input.value.length > 0) {
        container.appendChild(rightContainer);
      } else {
        container.removeChild(rightContainer);
      }
    });
    button.addEventListener("click", function () {
      input.value = "";
      container.removeChild(rightContainer);
    });
  });
}
/*==================== Input date ====================*/


var dateInputs = document.querySelectorAll(".input-date");

if (dateInputs.length > 0) {
  dateInputs.forEach(function (container) {
    var input = container.querySelector("input");
    var icon = container.getAttribute("data-icon-calendar") || "calendar-solid";
    var isDisabled = input.getAttributeNames().includes("disabled");
    var rightContainer = createRightContainer();
    container.appendChild(rightContainer);
    var button = createButtonInput(icon);
    rightContainer.appendChild(button);

    if (isDisabled) {
      button.setAttribute("disabled", "");
    }

    container.addEventListener("click", function () {
      return input.showPicker();
    });
  });
}
/*==================== Input time ====================*/


var timeInputs = document.querySelectorAll(".input-time");

if (timeInputs.length > 0) {
  timeInputs.forEach(function (container) {
    var input = container.querySelector("input");
    var icon = container.getAttribute("data-icon-clock") || "clock-solid";
    var isDisabled = input.getAttributeNames().includes("disabled");
    var rightContainer = createRightContainer();
    container.appendChild(rightContainer);
    var button = createButtonInput(icon);
    rightContainer.appendChild(button);

    if (isDisabled) {
      button.setAttribute("disabled", "");
    }

    container.addEventListener("click", function () {
      return input.showPicker();
    });
  });
}
/*==================== Input with icon ====================*/


var iconInputs = document.querySelectorAll(".input-content[data-icon]");

if (iconInputs.length > 0) {
  iconInputs.forEach(function (container) {
    var icon = container.getAttribute("data-icon") || undefined;
    var input = container.querySelector("input");
    var iconContainer = document.createElement("span");
    iconContainer.setAttribute("class", "input-icon-container");

    if (icon) {
      container.insertBefore(iconContainer, input);
      iconContainer.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(icon, "\"></use></svg>");
    }
  });
}
/*==================== Input with counter ====================*/


var counterInputs = document.querySelectorAll(".input-counter");

if (counterInputs.length > 0) {
  counterInputs.forEach(function (container) {
    var input = container.querySelector("input") || container.querySelector("textarea");
    var maxLength = input.getAttribute("maxlength") || undefined;
    var counter = document.createElement("small");
    counter.setAttribute("class", "counter");
    counter.innerText = "".concat(input.value.length).concat(maxLength ? " / ".concat(maxLength) : "");
    container.appendChild(counter);
    input.addEventListener("input", function () {
      counter.innerText = "".concat(input.value.length).concat(maxLength ? " / ".concat(maxLength) : "");
    });
  });
}
/*==================== Input with validation ====================*/


var validationInputs = document.querySelectorAll(".input-validate");

if (validationInputs.length > 0) {
  validationInputs.forEach(function (container) {
    var rightContainer = container.querySelector(".right-container") || undefined;
    var validate = container.getAttribute("data-validate");
    var createdRightContainer = createRightContainer();

    if (!rightContainer) {
      container.appendChild(createdRightContainer);
    }

    var iconPassed = container.getAttribute("data-icon-passed") || "check-circle-solid";
    var iconNotPassed = container.getAttribute("data-icon-not-passed") || "close-circle-solid";
    var createIcon = document.createElement("span");
    createIcon.setAttribute("class", "icon-container");
    createIcon.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(validate === "passed" ? iconPassed : iconNotPassed, "\"></use></svg>");

    if (rightContainer) {
      rightContainer.appendChild(createIcon);
    } else {
      createdRightContainer.appendChild(createIcon);
    }
  });
}
/*==================== Select ====================*/


var selectInputs = document.querySelectorAll(".input-select");

if (selectInputs.length > 0) {
  selectInputs.forEach(function (container) {
    var input = container.querySelector("select");
    var isDisabled = input.getAttributeNames().includes("disabled");

    if (isDisabled) {
      container.classList.add("disabled");
    }
  });
}