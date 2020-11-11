let open = document.getElementById('menu-btn');
let close = document.getElementById('close-btn');
let nav = document.getElementById('nav');

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
});

close.addEventListener('click', () => {
    nav.classList.remove('open-nav');
});

const navLink = document.querySelectorAll('.nav__link');
const navLinkArr = Array.from(navLink);
navLinkArr.forEach(e => {
    e.addEventListener('click', () => {
        nav.classList.remove('open-nav');
    });
});