// JavaScript for Natural Disaster Awareness Website

// Menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('dashboard');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    main.classList.toggle('shift');
});

// Optional: Dynamic loading of highlights (for future expansion)
function loadHighlights() {
    // Placeholder for dynamic content loading
    console.log('Highlights loaded');
}

// Call on page load
document.addEventListener('DOMContentLoaded', () => {
    loadHighlights();
});
