/*=============================================== Header ===============================================*/

const headers = document.querySelectorAll(".header")

if (headers.length > 0) {
    headers.forEach(container => {
        const burger = container.querySelector(".burger")

        burger.addEventListener("click", () =>
            container.classList.toggle("header-open")
        )
    })
}
