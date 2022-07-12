/*=============================================== Modal ===============================================*/

const modals = document.querySelectorAll(".modal-container")

if (modals.length > 0) {
    modals.forEach(container => {
        const button = container.querySelector(".open-modal")
        const modal = container.querySelector(".modal")
        const body = document.body
        const closeButton = container.querySelector(".btn-close") || undefined

        button.addEventListener("click", () => {
            modal.classList.add("modal-open")
            body.classList.add("stop-scrolling")
        })

        const iconClose = container.getAttribute("data-close-icon")
            ? container.getAttribute("data-close-icon")
            : container.hasAttribute("data-close")
            ? "close-solid"
            : undefined

        const closeModal = () => {
            modal.classList.remove("modal-open")
            body.classList.remove("stop-scrolling")
        }

        if (iconClose) {
            const createCloseButton = document.createElement("button")
            createCloseButton.setAttribute("class", "button-close")
            createCloseButton.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${iconClose}"></use></svg>`

            modal.prepend(createCloseButton)

            createCloseButton.addEventListener("click", () => closeModal())
        } else if (closeButton) {
            closeButton.addEventListener("click", () => closeModal())
        } else {
            modal.addEventListener("click", () => closeModal())
        }
    })
}
