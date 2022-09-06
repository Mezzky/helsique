// Variable
const header = document.querySelector('header');
const navToggle = document.querySelector('header .menu-toggle');
const navbar = document.querySelector('header .navbar');

// Navbar Scroll
window.addEventListener('scroll', () =>{
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        header.classList.add('scrolled');
        navbar.style.borderRadius = "20px";
        navbar.style.right = "0";
        navbar.style.top = "100px";
    } else {
        header.classList.remove('scrolled');
        navbar.style.borderRadius = "0px";
        navbar.style.right = "50px";
        navbar.style.top = "80px";
    }
});

// Navbar Menu
navToggle.addEventListener('click', () =>{
    navbar.classList.toggle('slide');
});