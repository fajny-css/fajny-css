"use strict";

/*=============================================== Slideshow ===============================================*/
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