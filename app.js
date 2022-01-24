//Change nav style on scroll
window.addEventListener('scroll', event => {
    let nav = document.querySelector('nav');
    (window.scrollY >= 50) ? nav.classList.add('nav-scrolled') : nav.classList.remove('nav-scrolled');
})