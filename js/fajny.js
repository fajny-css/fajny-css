/*=============================================== Fajny CSS ===============================================*/

/*============================= Accordion =============================*/

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

/*============================= Burger =============================*/

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

/*============================= Button =============================*/

/*==================== Icon button ====================*/

const iconButtonsLeft = document.querySelectorAll(".btn[data-icon-left]")
const iconButtonsRight = document.querySelectorAll(".btn[data-icon-right]")

if (iconButtonsLeft.length > 0 || iconButtonsRight.length > 0) {
    const addIcon = (button, position) => {
        button.forEach(container => {
            const icon =
                container.getAttribute("data-icon-left") ||
                container.getAttribute("data-icon-right")
            const content = container.childNodes[0]

            const createIcon = document.createElement("span")
            createIcon.setAttribute("class", "icon-container")
            createIcon.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${icon}"></use></svg>`

            if (position === "left") {
                container.insertBefore(createIcon, content)
            }

            if (position === "right") {
                container.appendChild(createIcon)
            }
        })
    }

    addIcon(iconButtonsLeft, "left")
    addIcon(iconButtonsRight, "right")
}

/*==================== Loading button ====================*/

const loadingButtons = document.querySelectorAll(".btn[data-loading]")

if (loadingButtons.length > 0) {
    loadingButtons.forEach(container => {
        container.setAttribute("disabled", "")

        const firstChild = container.childNodes[0]

        const createLoader = document.createElement("span")
        createLoader.setAttribute("class", "loader")
        createLoader.setAttribute("data-size", "xxs")
        createLoader.setAttribute("data-color", "gray")

        container.insertBefore(createLoader, firstChild)
    })
}

/*============================= Button icon =============================*/

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

/*============================= Dropdown =============================*/

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

/*============================= Header =============================*/

const headers = document.querySelectorAll(".header")

if (headers.length > 0) {
    headers.forEach(container => {
        const burger = container.querySelector(".burger")

        burger.addEventListener("click", () =>
            container.classList.toggle("header-open")
        )
    })
}

/*============================= Input =============================*/

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

/*============================= Input image =============================*/

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

/*============================= Modal =============================*/

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

/*============================= Slideshow =============================*/

const slideshows = document.querySelectorAll(".slideshow")

if (slideshows.length > 0) {
    slideshows.forEach(container => {
        const slides = container.querySelectorAll(".slide")

        const createSlidesContainer = document.createElement("div")
        createSlidesContainer.setAttribute("class", "slides")
        container.appendChild(createSlidesContainer)

        slides.forEach((slide, i) => {
            container.removeChild(slide)
            createSlidesContainer.appendChild(slide)

            if (i === 0) {
                slide.classList.add("slide-active")
            } else if (i > 0) {
                slide.classList.add("slide-next")
            }
        })

        const firstSlide = slides[0]
        const lastSlide = slides[slides.length - 1]

        // Controls
        const hasControls = container.hasAttribute("data-controls") || undefined

        if (hasControls) {
            const iconPrev =
                container.getAttribute("data-icon-previous") ||
                "chevron-left-solid"
            const iconNext =
                container.getAttribute("data-icon-next") ||
                "chevron-right-solid"

            const createButton = (position, icon) => {
                const button = document.createElement("button")
                button.setAttribute(
                    "class",
                    `slideshow-button slideshow-button-${position}`
                )
                button.innerHTML = `<svg class="icon"><use xlink:href="/assets/icons/icon-sprite.svg#${icon}"></use></svg>`

                return button
            }

            const createPrevButton = createButton("previous", iconPrev)
            const createNextButton = createButton("next", iconNext)

            container.appendChild(createPrevButton)
            container.appendChild(createNextButton)
        }

        const buttonPrev =
            container.querySelector(".slideshow-button-previous") || undefined
        const buttonNext =
            container.querySelector(".slideshow-button-next") || undefined

        // Pagination
        const hasPagination = container.hasAttribute("data-pagination")

        if (hasPagination) {
            const createPagination = document.createElement("div")
            createPagination.setAttribute("class", "slideshow-pagination")
            container.appendChild(createPagination)

            slides.forEach((_, i) => {
                const createPaginationItem = document.createElement("button")
                createPaginationItem.setAttribute(
                    "class",
                    "slideshow-pagination-item"
                )
                createPagination.appendChild(createPaginationItem)

                if (i === 0) {
                    createPaginationItem.classList.add(
                        "slideshow-pagination-item-active"
                    )
                }
            })
        }

        const pagination =
            container.querySelector(".slideshow-pagination") || undefined
        const paginationItems =
            container.querySelectorAll(".slideshow-pagination-item") ||
            undefined
        const firstPaginationItem = paginationItems[0] || undefined
        const lastPaginationItem =
            paginationItems[paginationItems.length - 1] || undefined

        // Functions
        const goToNextSlide = () => {
            const currentSlide = container.querySelector(".slide-active")
            const nextSlide = currentSlide.nextElementSibling || firstSlide

            if (currentSlide === lastSlide) {
                slides.forEach(slide => {
                    slide.classList.add("slide-next")
                    slide.classList.remove("slide-previous")
                })

                lastSlide.classList.remove("slide-active")
                firstSlide.classList.remove("slide-next")
                firstSlide.classList.add("slide-active")
            } else {
                currentSlide.classList.add("slide-previous")
                currentSlide.classList.remove("slide-active")

                nextSlide.classList.remove("slide-next")
                nextSlide.classList.add("slide-active")
            }

            if (hasPagination) {
                const currentPaginationItem = pagination.querySelector(
                    ".slideshow-pagination-item-active"
                )
                const nextPaginationItem =
                    currentPaginationItem.nextElementSibling ||
                    firstPaginationItem

                currentPaginationItem.classList.remove(
                    "slideshow-pagination-item-active"
                )

                if (currentSlide === lastSlide) {
                    firstPaginationItem.classList.add(
                        "slideshow-pagination-item-active"
                    )
                } else {
                    nextPaginationItem.classList.add(
                        "slideshow-pagination-item-active"
                    )
                }
            }
        }

        const goToPrevSlide = () => {
            const currentSlide = container.querySelector(".slide-active")
            const prevSlide = currentSlide.previousElementSibling || lastSlide

            if (currentSlide === firstSlide) {
                slides.forEach(slide => {
                    slide.classList.remove("slide-next")
                    slide.classList.add("slide-previous")
                })

                firstSlide.classList.remove("slide-active")
                lastSlide.classList.remove("slide-previous")
                lastSlide.classList.add("slide-active")
            } else {
                currentSlide.classList.remove("slide-active")
                currentSlide.classList.add("slide-next")

                prevSlide.classList.remove("slide-previous")
                prevSlide.classList.add("slide-active")
            }

            if (hasPagination) {
                const currentPaginationItem = pagination.querySelector(
                    ".slideshow-pagination-item-active"
                )
                const prevPaginationItem =
                    currentPaginationItem.previousElementSibling ||
                    lastPaginationItem

                currentPaginationItem.classList.remove(
                    "slideshow-pagination-item-active"
                )

                if (currentSlide === firstSlide) {
                    lastPaginationItem.classList.add(
                        "slideshow-pagination-item-active"
                    )
                } else {
                    prevPaginationItem.classList.add(
                        "slideshow-pagination-item-active"
                    )
                }
            }
        }

        const goToSlide = slideNumber => {
            const selectedSlide = slides[slideNumber]
            const selectedPage = paginationItems[slideNumber] || undefined

            slides.forEach((slide, i) => {
                slide.classList.remove("slide-next")
                slide.classList.remove("slide-previous")
                slide.classList.remove("slide-active")

                selectedSlide.classList.add("slide-active")

                if (i < slideNumber) {
                    slide.classList.add("slide-previous")
                }

                if (i > slideNumber) {
                    slide.classList.add("slide-next")
                }

                if (hasPagination) {
                    paginationItems.forEach(item => {
                        item.classList.remove(
                            "slideshow-pagination-item-active"
                        )
                    })

                    selectedPage.classList.add(
                        "slideshow-pagination-item-active"
                    )
                }
            })
        }

        if (hasControls) {
            buttonNext.addEventListener("click", () => goToNextSlide())
            buttonPrev.addEventListener("click", () => goToPrevSlide())
        }

        if (hasPagination) {
            paginationItems.forEach((item, i) =>
                item.addEventListener("click", () => goToSlide(i))
            )
        }

        // Autoplay
        const hasAutoplay = container.getAttribute("data-autoplay")
            ? parseInt(container.getAttribute("data-autoplay"))
            : !container.getAttribute("data-autoplay") &&
              !hasControls &&
              !hasPagination
            ? 1000
            : container.hasAttribute("data-autoplay")
            ? 1000
            : undefined

        if (hasAutoplay) {
            setInterval(() => goToNextSlide(), hasAutoplay)
        }
    })
}

/*============================= Tabs =============================*/

const tabsContainers = document.querySelectorAll(".tabs")

if (tabsContainers.length > 0) {
    tabsContainers.forEach(container => {
        const items = container.querySelectorAll(".tab")

        const createButtonsContainer = document.createElement("div")
        createButtonsContainer.setAttribute("class", "tabs-buttons-container")
        container.prepend(createButtonsContainer)

        items.forEach((item, i) => {
            const title = item.getAttribute("data-title") || "Title"

            const createButton = document.createElement("button")
            createButton.setAttribute("class", "tab-button")
            createButton.innerText = title

            createButtonsContainer.appendChild(createButton)

            if (i === 0) {
                item.classList.add("tab-active")
                createButton.classList.add("button-active")
            }
        })

        const allButtons = container.querySelectorAll(".tab-button")

        const setActive = tabNumber => {
            const selectedButton = allButtons[tabNumber]
            const selectedTab = items[tabNumber]

            allButtons.forEach(button =>
                button.classList.remove("button-active")
            )
            items.forEach(item => item.classList.remove("tab-active"))

            selectedButton.classList.add("button-active")
            selectedTab.classList.add("tab-active")
        }

        allButtons.forEach((button, i) => {
            button.addEventListener("click", () => setActive(i))
        })
    })
}

/*============================= Toast =============================*/

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
