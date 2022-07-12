"use strict";

/*=============================================== Tabs ===============================================*/
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