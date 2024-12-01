// ============ MOBILE MENU ==================

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Mobile Dropdown Toggle
const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents menu closing when clicking inside
    dropdownMenu.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.body.addEventListener('click', () => {
    if (!dropdownMenu.classList.contains('hidden')) {
        dropdownMenu.classList.add('hidden');
    }
});
