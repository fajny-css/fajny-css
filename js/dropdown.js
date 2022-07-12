/*=============================================== Dropdown ===============================================*/

const dropdowns = document.querySelectorAll(".dropdown-container")

if (dropdowns.length > 0) {
    dropdowns.forEach(container => {
        const button = container.querySelector(".btn")
        const dropdown = container.querySelector(".dropdown")

        button.addEventListener("click", () => {
            dropdown.classList.toggle("dropdown-open")
        })
    })
}
