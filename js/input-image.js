/*=============================================== Input image ===============================================*/

const imageInputs = document.querySelectorAll(".input-image")

if (imageInputs.length > 0) {
    imageInputs.forEach(container => {
        const input = container.querySelector("input")
        const id = input.getAttribute("id")
        const isDisabled = input.getAttributeNames().includes("disabled")

        const iconEmpty =
            container.getAttribute("data-icon-empty") || "image-solid"
        const iconHover =
            container.getAttribute("data-icon-hover") || "edit-solid"

        const createContainer = document.createElement("label")
        createContainer.setAttribute("for", id)
        container.appendChild(createContainer)

        const createEmptyContainer = document.createElement("span")
        createEmptyContainer.setAttribute("class", "empty-container")
        createEmptyContainer.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${iconEmpty}"></use></svg>`
        createContainer.appendChild(createEmptyContainer)

        const createHoverContainer = document.createElement("span")
        createHoverContainer.setAttribute("class", "hover-container")
        createHoverContainer.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${iconHover}"></use></svg>`
        createContainer.appendChild(createHoverContainer)

        if (isDisabled) {
            createContainer.classList.add("disabled")
        }

        const emptyContainer =
            createContainer.querySelector(".empty-container") || undefined

        input.addEventListener("change", () => {
            const file = input.files[0]
            const picture = document.createElement("img")
            const url = URL.createObjectURL(file)
            picture.setAttribute("src", url)

            if (createContainer.firstElementChild.tagName === "SPAN") {
                createContainer.removeChild(emptyContainer)
            } else {
                const img = createContainer.querySelector("img")
                createContainer.removeChild(img)
            }

            createContainer.insertBefore(picture, createHoverContainer)
        })
    })
}
