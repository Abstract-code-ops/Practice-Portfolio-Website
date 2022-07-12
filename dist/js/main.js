const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navLinks = document.querySelectorAll('.menu-nav_item')

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navLinks.forEach(link => {
            link.classList.add('open')
        });
        showMenu = true;
    } else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navLinks.forEach((link) => {
          link.classList.remove('open');
        });
        showMenu = false;
    }
}