// Project cards: expand / collapse details
const detailButtons = document.querySelectorAll(".details-button");

detailButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const details = button.nextElementSibling;
        const willOpen = details.hidden;

        details.hidden = !willOpen;
        button.setAttribute("aria-expanded", String(willOpen));
        button.textContent = willOpen ? "Show less −" : "More about this project +";
    });
});

// Highlight the nav link of the section currently in view
const navLinks = document.querySelectorAll(".site-nav nav a");
const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            navLinks.forEach(function (link) {
                link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
            });
        });
    }, { rootMargin: "-40% 0px -55% 0px" });

    sections.forEach(function (section) { observer.observe(section); });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Floating back-to-top button: appears after scrolling down
const backToTop = document.querySelector(".back-to-top");

function toggleBackToTop() {
    backToTop.classList.toggle("visible", window.scrollY > 400);
}

window.addEventListener("scroll", toggleBackToTop, { passive: true });
toggleBackToTop();
