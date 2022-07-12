/*=============================================== Input ===============================================*/

/*==================== Common functions ====================*/

const createRightContainer = () => {
    const rightContainer = document.createElement("span")
    rightContainer.setAttribute("class", "right-container")

    return rightContainer
}

const createButtonInput = iconName => {
    const button = document.createElement("button")
    button.setAttribute("class", "btn-input")
    button.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${iconName}"></use></svg>`

    return button
}

/*==================== Input password ====================*/

const passwordInputs = document.querySelectorAll(".input-password")

if (passwordInputs.length > 0) {
    passwordInputs.forEach(container => {
        const input = container.querySelector("input")
        const isDisabled = input.getAttributeNames().includes("disabled")

        const rightContainer = createRightContainer()

        container.appendChild(rightContainer)

        const button = createButtonInput()
        rightContainer.appendChild(button)

        const iconHide = container.getAttribute("data-icon-hide") || undefined
        const iconShow = container.getAttribute("data-icon-show") || undefined
        const textHide = container.getAttribute("data-text-hide") || "Hide"
        const textShow = container.getAttribute("data-text-show") || "Show"

        input.setAttribute("type", "password")

        if (iconHide && iconShow) {
            button.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${
                input.getAttribute("type") === "password" ? iconShow : iconHide
            }"></use></svg>`
        } else {
            button.innerText =
                input.getAttribute("type") === "password" ? textShow : textHide
        }

        if (isDisabled) {
            button.setAttribute("disabled", "")
        }

        button.addEventListener("click", () => {
            if (input.getAttribute("type") === "password") {
                input.setAttribute("type", "text")

                if (iconHide && iconShow) {
                    button.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${iconHide}"></use></svg>`
                } else {
                    button.innerText = textHide
                }
            } else {
                input.setAttribute("type", "password")

                if (iconHide && iconShow) {
                    button.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${iconShow}"></use></svg>`
                } else {
                    button.innerText = textShow
                }
            }
        })
    })
}

/*==================== Input url ====================*/

const urlInputs = document.querySelectorAll(".input-url")

if (urlInputs.length > 0) {
    urlInputs.forEach(container => {
        const input = container.querySelector("input")
        const isDisabled = input.getAttributeNames().includes("disabled")

        const createLeftContainer = document.createElement("span")
        createLeftContainer.setAttribute("class", "url-container")
        createLeftContainer.innerText = "http://"

        if (isDisabled) {
            createLeftContainer.classList.add("disabled")
        }

        container.insertBefore(createLeftContainer, input)
    })
}

/*==================== Input search ====================*/

const searchInputs = document.querySelectorAll(".input-search")

if (searchInputs.length > 0) {
    searchInputs.forEach(container => {
        const input = container.querySelector("input")
        const icon = container.getAttribute("data-icon-clear") || "close-solid"

        const rightContainer = createRightContainer()

        if (input.value.length > 0) {
            container.appendChild(rightContainer)
        }

        const button = createButtonInput(icon)
        rightContainer.appendChild(button)

        input.addEventListener("input", () => {
            if (input.value.length > 0) {
                container.appendChild(rightContainer)
            } else {
                container.removeChild(rightContainer)
            }
        })

        button.addEventListener("click", () => {
            input.value = ""
            container.removeChild(rightContainer)
        })
    })
}

/*==================== Input date ====================*/

const dateInputs = document.querySelectorAll(".input-date")

if (dateInputs.length > 0) {
    dateInputs.forEach(container => {
        const input = container.querySelector("input")
        const icon =
            container.getAttribute("data-icon-calendar") || "calendar-solid"
        const isDisabled = input.getAttributeNames().includes("disabled")

        const rightContainer = createRightContainer()
        container.appendChild(rightContainer)

        const button = createButtonInput(icon)
        rightContainer.appendChild(button)

        if (isDisabled) {
            button.setAttribute("disabled", "")
        }

        container.addEventListener("click", () => input.showPicker())
    })
}

/*==================== Input time ====================*/

const timeInputs = document.querySelectorAll(".input-time")

if (timeInputs.length > 0) {
    timeInputs.forEach(container => {
        const input = container.querySelector("input")
        const icon = container.getAttribute("data-icon-clock") || "clock-solid"
        const isDisabled = input.getAttributeNames().includes("disabled")

        const rightContainer = createRightContainer()
        container.appendChild(rightContainer)

        const button = createButtonInput(icon)
        rightContainer.appendChild(button)

        if (isDisabled) {
            button.setAttribute("disabled", "")
        }

        container.addEventListener("click", () => input.showPicker())
    })
}

/*==================== Input with icon ====================*/

const iconInputs = document.querySelectorAll(".input-content[data-icon]")

if (iconInputs.length > 0) {
    iconInputs.forEach(container => {
        const icon = container.getAttribute("data-icon") || undefined
        const input = container.querySelector("input")

        const iconContainer = document.createElement("span")
        iconContainer.setAttribute("class", "input-icon-container")

        if (icon) {
            container.insertBefore(iconContainer, input)
            iconContainer.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${icon}"></use></svg>`
        }
    })
}

/*==================== Input with counter ====================*/

const counterInputs = document.querySelectorAll(".input-counter")

if (counterInputs.length > 0) {
    counterInputs.forEach(container => {
        const input =
            container.querySelector("input") ||
            container.querySelector("textarea")
        const maxLength = input.getAttribute("maxlength") || undefined

        const counter = document.createElement("small")
        counter.setAttribute("class", "counter")

        counter.innerText = `${input.value.length}${
            maxLength ? ` / ${maxLength}` : ""
        }`

        container.appendChild(counter)

        input.addEventListener("input", () => {
            counter.innerText = `${input.value.length}${
                maxLength ? ` / ${maxLength}` : ""
            }`
        })
    })
}

/*==================== Input with validation ====================*/

const validationInputs = document.querySelectorAll(".input-validate")

if (validationInputs.length > 0) {
    validationInputs.forEach(container => {
        const rightContainer =
            container.querySelector(".right-container") || undefined
        const validate = container.getAttribute("data-validate")

        const createdRightContainer = createRightContainer()

        if (!rightContainer) {
            container.appendChild(createdRightContainer)
        }

        const iconPassed =
            container.getAttribute("data-icon-passed") || "check-circle-solid"
        const iconNotPassed =
            container.getAttribute("data-icon-not-passed") ||
            "close-circle-solid"

        const createIcon = document.createElement("span")
        createIcon.setAttribute("class", "icon-container")
        createIcon.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${
            validate === "passed" ? iconPassed : iconNotPassed
        }"></use></svg>`

        if (rightContainer) {
            rightContainer.appendChild(createIcon)
        } else {
            createdRightContainer.appendChild(createIcon)
        }
    })
}

/*==================== Select ====================*/

const selectInputs = document.querySelectorAll(".input-select")

if (selectInputs.length > 0) {
    selectInputs.forEach(container => {
        const input = container.querySelector("select")
        const isDisabled = input.getAttributeNames().includes("disabled")

        if (isDisabled) {
            container.classList.add("disabled")
        }
    })
}
