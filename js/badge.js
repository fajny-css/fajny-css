/*=============================================== Badge ===============================================*/

const iconBadges = document.querySelectorAll(".badge[data-icon]")

if (iconBadges.length > 0) {
    iconBadges.forEach(container => {
        const icon = container.getAttribute("data-icon")

        const createIcon = document.createElement("span")
        createIcon.setAttribute("class", "icon-container")
        createIcon.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${icon}"></use></svg>`

        container.appendChild(createIcon)
    })
}
