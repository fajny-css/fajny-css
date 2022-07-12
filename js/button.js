/*=============================================== Button ===============================================*/

/*==================== Icon button ====================*/

const iconButtonsLeft = document.querySelectorAll("button[data-icon-left]")
const iconButtonsRight = document.querySelectorAll("button[data-icon-right]")

if (iconButtonsLeft.length > 0 || iconButtonsRight.length > 0) {
    const addIcon = (button, position) => {
        button.forEach(container => {
            const icon =
                container.getAttribute("data-icon-left") ||
                container.getAttribute("data-icon-right")
            const content = container.childNodes[0]

            const createIcon = document.createElement("span")
            createIcon.setAttribute("class", "icon-container")
            createIcon.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${icon}"></use></svg>`

            if (position === "left") {
                container.insertBefore(createIcon, content)
            }

            if (position === "right") {
                container.appendChild(createIcon)
            }
        })
    }

    addIcon(iconButtonsLeft, "left")
    addIcon(iconButtonsRight, "right")
}

/*==================== Loading button ====================*/

const loadingButtons = document.querySelectorAll("button[data-loading]")

if (loadingButtons.length > 0) {
    loadingButtons.forEach(container => {
        container.setAttribute("disabled", "")

        const firstChild = container.childNodes[0]

        const createLoader = document.createElement("span")
        createLoader.setAttribute("class", "loader")
        createLoader.setAttribute("data-size", "xxs")
        createLoader.setAttribute("data-color", "gray")

        container.insertBefore(createLoader, firstChild)
    })
}
