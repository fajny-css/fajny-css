/*=============================================== Slideshow ===============================================*/

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
