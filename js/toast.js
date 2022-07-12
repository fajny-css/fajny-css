/*=============================================== Toasts ===============================================*/

const toasts = document.querySelectorAll(".toast")

if (toasts.length > 0) {
    toasts.forEach(container => {
        const title = container.getAttribute("data-title") || "Title"
        const icon = container.getAttribute("data-icon") || undefined
        const iconClose = container.getAttribute("data-icon-close")
            ? container.getAttribute("data-icon-close")
            : container.hasAttribute("data-close")
            ? "close-solid"
            : undefined

        const createTitle = document.createElement("h5")
        createTitle.innerText = title

        if (icon || iconClose) {
            const createTitleContainer = document.createElement("span")
            createTitleContainer.setAttribute("class", "title-container")

            if (icon) {
                const createIcon = document.createElement("span")
                createIcon.setAttribute("class", "icon-container")
                createIcon.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${icon}"></use></svg>`
                createTitleContainer.appendChild(createIcon)
            }

            createTitleContainer.appendChild(createTitle)

            if (iconClose) {
                const createButton = document.createElement("button")
                createButton.setAttribute("class", "button-close")
                createButton.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${iconClose}"></use></svg>`
                createTitleContainer.appendChild(createButton)

                createButton.addEventListener(
                    "click",
                    () => (container.style.display = "none")
                )
            }

            container.prepend(createTitleContainer)
        } else {
            container.prepend(createTitle)
        }
    })
}
