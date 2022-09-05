// Variable
const header = document.querySelector('header');
const navToggle = document.querySelector('header .menu-toggle');
const navbar = document.querySelector('header .navbar');

// Navbar Scroll
window.addEventListener('scroll', () =>{
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Navbar Menu
navToggle.addEventListener('click', () =>{
    navbar.classList.toggle('slide');
});