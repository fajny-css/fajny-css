/*=============================================== Burger ===============================================*/

const burgers = document.querySelectorAll(".burger")

const openBurger = burger => burger.classList.toggle("burger-open")

if (burgers.length > 0) {
    burgers.forEach(container => {
        const topBar = document.createElement("span")
        const middleBar = document.createElement("span")
        const bottomBar = document.createElement("span")

        container.appendChild(topBar)
        container.appendChild(middleBar)
        container.appendChild(bottomBar)

        container.addEventListener("click", () => openBurger(container))
    })
}
