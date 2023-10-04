const navbar = document.querySelector('.navbar');

function updateNavbar() {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', updateNavbar);
window.addEventListener('load', updateNavbar);
