// Stop scrolling

function stopScrolling() {
    var body = document.body;
    body.classList.toggle("no-scroll");
}

// Accordion

function openAccordion(e) {
    var accordion = e.parentNode;
    accordion.classList.toggle("accordion-open");
}

// Dropdown

function openDropdown(e) {
    var dropdown = e.parentNode;
    dropdown.classList.toggle("dropdown-open");
}

// Modal

function openModal(e) {
    var modal = e.parentNode;
    modal.classList.toggle("modal-open");

    // Blocks scrolling of the page when the modal is open
    stopScrolling();
}

// Navigation

function openNav(e) {
    var nav = e.parentNode;
    nav.classList.toggle("nav-open");

    // Blocks scrolling of the page when the navigation is open
    stopScrolling();
}