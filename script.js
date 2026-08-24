```javascript
// ================================
// Mobile Navigation
// ================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ================================
// Current Year
// ================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ================================
// Smooth Navigation
// ================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
```
