/*=============================================== Tabs ===============================================*/

const tabsContainers = document.querySelectorAll(".tabs")

if (tabsContainers.length > 0) {
    tabsContainers.forEach(container => {
        const items = container.querySelectorAll(".tab")

        const createButtonsContainer = document.createElement("div")
        createButtonsContainer.setAttribute("class", "tabs-buttons-container")
        container.prepend(createButtonsContainer)

        items.forEach((item, i) => {
            const title = item.getAttribute("data-title") || "Title"

            const createButton = document.createElement("button")
            createButton.setAttribute("class", "tab-button")
            createButton.innerText = title

            createButtonsContainer.appendChild(createButton)

            if (i === 0) {
                item.classList.add("tab-active")
                createButton.classList.add("button-active")
            }
        })

        const allButtons = container.querySelectorAll(".tab-button")

        const setActive = tabNumber => {
            const selectedButton = allButtons[tabNumber]
            const selectedTab = items[tabNumber]

            allButtons.forEach(button =>
                button.classList.remove("button-active")
            )
            items.forEach(item => item.classList.remove("tab-active"))

            selectedButton.classList.add("button-active")
            selectedTab.classList.add("tab-active")
        }

        allButtons.forEach((button, i) => {
            button.addEventListener("click", () => setActive(i))
        })
    })
}
