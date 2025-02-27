// script.js

// Function to detect scroll and add class to navbar
window.onscroll = function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {  // When the scroll is more than 50px
        navbar.classList.add("scrolled");  // Add 'scrolled' class to change background
    } else {
        navbar.classList.remove("scrolled");  // Remove 'scrolled' class when at top
    }
};

// Adding hover effect on menu items
const menuItems = document.querySelectorAll("nav ul li a");
menuItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.color = "#ff6347"; // Change color on hover
    });
    item.addEventListener("mouseout", () => {
        item.style.color = ""; // Revert to original color when mouseout
    });
});
