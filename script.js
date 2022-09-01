// Variable
const header = document.querySelector('header');

// Navbar Scroll
window.addEventListener('scroll', () =>{
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});