/*=============================================== Button icon ===============================================*/

/*==================== Icon ====================*/

const buttonIcons = document.querySelectorAll(".btn-icon")

if (buttonIcons.length > 0) {
    buttonIcons.forEach(container => {
        const icon = container.getAttribute("data-icon")

        const createIcon = document.createElement("span")
        createIcon.setAttribute("class", "icon-container")
        createIcon.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${icon}"></use></svg>`

        container.appendChild(createIcon)
    })
}

/*==================== Loading ====================*/

const loadingIconButtons = document.querySelectorAll(".btn-icon[data-loading]")

if (loadingIconButtons.length > 0) {
    loadingIconButtons.forEach(container => {
        const icon = container.querySelector(".icon-container")
        container.removeChild(icon)

        container.setAttribute("disabled", "")

        const createLoader = document.createElement("span")
        createLoader.setAttribute("class", "loader")
        createLoader.setAttribute("data-size", "s")
        createLoader.setAttribute("data-color", "gray")

        container.appendChild(createLoader)
    })
}
