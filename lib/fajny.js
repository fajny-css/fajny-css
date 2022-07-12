"use strict";

/*=============================================== Fajny CSS ===============================================*/

/*============================= Accordion =============================*/
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
/*============================= Badge =============================*/


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
/*============================= Burger =============================*/


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
/*============================= Button =============================*/

/*==================== Icon button ====================*/


var iconButtonsLeft = document.querySelectorAll("button[data-icon-left]");
var iconButtonsRight = document.querySelectorAll("button[data-icon-right]");

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


var loadingButtons = document.querySelectorAll("button[data-loading]");

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
/*============================= Button icon =============================*/

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
/*============================= Dropdown =============================*/


var dropdowns = document.querySelectorAll(".dropdown-container");

if (dropdowns.length > 0) {
  dropdowns.forEach(function (container) {
    var button = container.querySelector(".btn");
    var dropdown = container.querySelector(".dropdown");
    button.addEventListener("click", function () {
      dropdown.classList.toggle("dropdown-open");
    });
  });
}
/*============================= Header =============================*/


var headers = document.querySelectorAll(".header");

if (headers.length > 0) {
  headers.forEach(function (container) {
    var burger = container.querySelector(".burger");
    burger.addEventListener("click", function () {
      return container.classList.toggle("header-open");
    });
  });
}
/*============================= Input =============================*/

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
/*============================= Input image =============================*/


var imageInputs = document.querySelectorAll(".input-image");

if (imageInputs.length > 0) {
  imageInputs.forEach(function (container) {
    var input = container.querySelector("input");
    var id = input.getAttribute("id");
    var isDisabled = input.getAttributeNames().includes("disabled");
    var iconEmpty = container.getAttribute("data-icon-empty") || "user-solid";
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
/*============================= Modal =============================*/


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
/*============================= Slideshow =============================*/


var slideshows = document.querySelectorAll(".slideshow");

if (slideshows.length > 0) {
  slideshows.forEach(function (container) {
    var slides = container.querySelectorAll(".slide");
    var createSlidesContainer = document.createElement("div");
    createSlidesContainer.setAttribute("class", "slides");
    container.appendChild(createSlidesContainer);
    slides.forEach(function (slide, i) {
      container.removeChild(slide);
      createSlidesContainer.appendChild(slide);

      if (i === 0) {
        slide.classList.add("slide-active");
      } else if (i > 0) {
        slide.classList.add("slide-next");
      }
    });
    var firstSlide = slides[0];
    var lastSlide = slides[slides.length - 1]; // Controls

    var hasControls = container.hasAttribute("data-controls") || undefined;

    if (hasControls) {
      var iconPrev = container.getAttribute("data-icon-previous") || "chevron-left-solid";
      var iconNext = container.getAttribute("data-icon-next") || "chevron-right-solid";

      var createButton = function createButton(position, icon) {
        var button = document.createElement("button");
        button.setAttribute("class", "slideshow-button slideshow-button-".concat(position));
        button.innerHTML = "<svg class=\"icon\"><use xlink:href=\"/assets/icons/icon-sprite.svg#".concat(icon, "\"></use></svg>");
        return button;
      };

      var createPrevButton = createButton("previous", iconPrev);
      var createNextButton = createButton("next", iconNext);
      container.appendChild(createPrevButton);
      container.appendChild(createNextButton);
    }

    var buttonPrev = container.querySelector(".slideshow-button-previous") || undefined;
    var buttonNext = container.querySelector(".slideshow-button-next") || undefined; // Pagination

    var hasPagination = container.hasAttribute("data-pagination");

    if (hasPagination) {
      var createPagination = document.createElement("div");
      createPagination.setAttribute("class", "slideshow-pagination");
      container.appendChild(createPagination);
      slides.forEach(function (_, i) {
        var createPaginationItem = document.createElement("button");
        createPaginationItem.setAttribute("class", "slideshow-pagination-item");
        createPagination.appendChild(createPaginationItem);

        if (i === 0) {
          createPaginationItem.classList.add("slideshow-pagination-item-active");
        }
      });
    }

    var pagination = container.querySelector(".slideshow-pagination") || undefined;
    var paginationItems = container.querySelectorAll(".slideshow-pagination-item") || undefined;
    var firstPaginationItem = paginationItems[0] || undefined;
    var lastPaginationItem = paginationItems[paginationItems.length - 1] || undefined; // Functions

    var goToNextSlide = function goToNextSlide() {
      var currentSlide = container.querySelector(".slide-active");
      var nextSlide = currentSlide.nextElementSibling || firstSlide;

      if (currentSlide === lastSlide) {
        slides.forEach(function (slide) {
          slide.classList.add("slide-next");
          slide.classList.remove("slide-previous");
        });
        lastSlide.classList.remove("slide-active");
        firstSlide.classList.remove("slide-next");
        firstSlide.classList.add("slide-active");
      } else {
        currentSlide.classList.add("slide-previous");
        currentSlide.classList.remove("slide-active");
        nextSlide.classList.remove("slide-next");
        nextSlide.classList.add("slide-active");
      }

      if (hasPagination) {
        var currentPaginationItem = pagination.querySelector(".slideshow-pagination-item-active");
        var nextPaginationItem = currentPaginationItem.nextElementSibling || firstPaginationItem;
        currentPaginationItem.classList.remove("slideshow-pagination-item-active");

        if (currentSlide === lastSlide) {
          firstPaginationItem.classList.add("slideshow-pagination-item-active");
        } else {
          nextPaginationItem.classList.add("slideshow-pagination-item-active");
        }
      }
    };

    var goToPrevSlide = function goToPrevSlide() {
      var currentSlide = container.querySelector(".slide-active");
      var prevSlide = currentSlide.previousElementSibling || lastSlide;

      if (currentSlide === firstSlide) {
        slides.forEach(function (slide) {
          slide.classList.remove("slide-next");
          slide.classList.add("slide-previous");
        });
        firstSlide.classList.remove("slide-active");
        lastSlide.classList.remove("slide-previous");
        lastSlide.classList.add("slide-active");
      } else {
        currentSlide.classList.remove("slide-active");
        currentSlide.classList.add("slide-next");
        prevSlide.classList.remove("slide-previous");
        prevSlide.classList.add("slide-active");
      }

      if (hasPagination) {
        var currentPaginationItem = pagination.querySelector(".slideshow-pagination-item-active");
        var prevPaginationItem = currentPaginationItem.previousElementSibling || lastPaginationItem;
        currentPaginationItem.classList.remove("slideshow-pagination-item-active");

        if (currentSlide === firstSlide) {
          lastPaginationItem.classList.add("slideshow-pagination-item-active");
        } else {
          prevPaginationItem.classList.add("slideshow-pagination-item-active");
        }
      }
    };

    var goToSlide = function goToSlide(slideNumber) {
      var selectedSlide = slides[slideNumber];
      var selectedPage = paginationItems[slideNumber] || undefined;
      slides.forEach(function (slide, i) {
        slide.classList.remove("slide-next");
        slide.classList.remove("slide-previous");
        slide.classList.remove("slide-active");
        selectedSlide.classList.add("slide-active");

        if (i < slideNumber) {
          slide.classList.add("slide-previous");
        }

        if (i > slideNumber) {
          slide.classList.add("slide-next");
        }

        if (hasPagination) {
          paginationItems.forEach(function (item) {
            item.classList.remove("slideshow-pagination-item-active");
          });
          selectedPage.classList.add("slideshow-pagination-item-active");
        }
      });
    };

    if (hasControls) {
      buttonNext.addEventListener("click", function () {
        return goToNextSlide();
      });
      buttonPrev.addEventListener("click", function () {
        return goToPrevSlide();
      });
    }

    if (hasPagination) {
      paginationItems.forEach(function (item, i) {
        return item.addEventListener("click", function () {
          return goToSlide(i);
        });
      });
    } // Autoplay


    var hasAutoplay = container.getAttribute("data-autoplay") ? parseInt(container.getAttribute("data-autoplay")) : !container.getAttribute("data-autoplay") && !hasControls && !hasPagination ? 1000 : container.hasAttribute("data-autoplay") ? 1000 : undefined;

    if (hasAutoplay) {
      setInterval(function () {
        return goToNextSlide();
      }, hasAutoplay);
    }
  });
}
/*============================= Tabs =============================*/


var tabsContainers = document.querySelectorAll(".tabs");

if (tabsContainers.length > 0) {
  tabsContainers.forEach(function (container) {
    var items = container.querySelectorAll(".tab");
    var createButtonsContainer = document.createElement("div");
    createButtonsContainer.setAttribute("class", "tabs-buttons-container");
    container.prepend(createButtonsContainer);
    items.forEach(function (item, i) {
      var title = item.getAttribute("data-title") || "Title";
      var createButton = document.createElement("button");
      createButton.setAttribute("class", "tab-button");
      createButton.innerText = title;
      createButtonsContainer.appendChild(createButton);

      if (i === 0) {
        item.classList.add("tab-active");
        createButton.classList.add("button-active");
      }
    });
    var allButtons = container.querySelectorAll(".tab-button");

    var setActive = function setActive(tabNumber) {
      var selectedButton = allButtons[tabNumber];
      var selectedTab = items[tabNumber];
      allButtons.forEach(function (button) {
        return button.classList.remove("button-active");
      });
      items.forEach(function (item) {
        return item.classList.remove("tab-active");
      });
      selectedButton.classList.add("button-active");
      selectedTab.classList.add("tab-active");
    };

    allButtons.forEach(function (button, i) {
      button.addEventListener("click", function () {
        return setActive(i);
      });
    });
  });
}
/*============================= Toast =============================*/


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