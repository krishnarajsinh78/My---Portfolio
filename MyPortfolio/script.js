
/* =================================
   1. MOBILE NAVIGATION MENU
================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "×" : "☰";

});


// Close the menu after clicking a navigation link

navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});



/* =================================
   2. LIGHT AND DARK THEME
================================= */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    const currentTheme = document.documentElement.dataset.theme;

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = newTheme;

});



/* =================================
   3. CONTACT FORM
================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    // Prevent the page from reloading
    event.preventDefault();

    // Get the entered name
    const name = document.getElementById("name").value.trim();

    // Find the message paragraph
    const formMessage = document.getElementById("formMessage");

    // Display confirmation
    formMessage.textContent =
        "Thank you, " + name +
        "! Your demo form was submitted successfully. Messages are not sent yet.";

    // Clear the form
    contactForm.reset();

});



/* =================================
   4. AUTOMATIC COPYRIGHT YEAR
================================= */

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();
