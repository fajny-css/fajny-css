/*=============================================== Accordion ===============================================*/

const accordions = document.querySelectorAll(".accordion")

if (accordions.length > 0) {
    accordions.forEach(container => {
        const items = container.querySelectorAll(".accordion-item")
        const icon = container.getAttribute("data-icon") || "plus"

        items.forEach(item => {
            const title = item.getAttribute("data-title") || "Title"
            const content = item.childNodes[0]

            const createButton = document.createElement("button")
            createButton.setAttribute("class", "button-accordion")
            createButton.innerText = title

            const createIcon = document.createElement("span")
            createIcon.setAttribute("class", "icon-container")
            createIcon.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${
                icon !== "plus" ? "chevron-down-solid" : "plus-solid"
            }"></use></svg>`
            createButton.appendChild(createIcon)

            item.insertBefore(createButton, content)

            createButton.addEventListener("click", () => {
                item.classList.toggle("accordion-item-open")
            })
        })
    })
}
