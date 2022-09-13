// Variable
const header = document.querySelector('header');
const navToggle = document.querySelector('header .menu-toggle');
const navbar = document.querySelector('header .navbar');
const loginBtn = document.querySelector('#login');
const registerBtn = document.querySelector('#register');
const overlay = document.querySelector('.overlay');
const loginPopup = document.querySelector('.overlay #loginBox');
const registerPopup = document.querySelector('.overlay #registerBox');
const loginLink = document.querySelector('.overlay .popup #loginLink');
const registerLink = document.querySelector('.overlay .popup #registerLink');
const popup = document.querySelectorAll('.overlay .popup');
const close = document.querySelectorAll('.overlay .popup i');
const motivationBtn = document.querySelector('.motivation-page .motivation-box .btn');
const copy = document.querySelector('.motivation-page .motivation-box .copy-text');
const copied = document.querySelector('.motivation-page .motivation-box .copied');

// Navbar Scroll
window.addEventListener('scroll', () =>{
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        header.classList.add('scrolled');
        navbar.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        navbar.classList.remove('scrolled');
    }
});

// Navbar Menu
navToggle.addEventListener('click', () =>{
    navbar.classList.toggle('slide');
});

// Popup Login & Register
loginBtn.addEventListener('click', () => {
    loginPopup.classList.add('loginPop');
    overlay.classList.add('loginPop');
    document.body.classList.add('loginPop');
});

registerBtn.addEventListener('click', () => {
    registerPopup.classList.add('regisPop');
    overlay.classList.add('regisPop');
    document.body.classList.add('regisPop');
});

loginLink.addEventListener('click', () => {
    loginPopup.classList.add('loginPop');
    registerPopup.classList.remove('regisPop');
});

registerLink.addEventListener('click', () => {
    registerPopup.classList.add('regisPop');
    loginPopup.classList.remove('loginPop');
});

close.forEach(el => {
    el.addEventListener('click', () => {
        registerPopup.classList.remove('regisPop');
        loginPopup.classList.remove('loginPop');
        overlay.classList.remove('loginPop');
        overlay.classList.remove('regisPop');
        document.body.classList.remove('regisPop');
        document.body.classList.remove('loginPop');
    });
});

// Copy Button & Motivasi Button
motivationBtn.addEventListener('click', () => {
    copy.classList.remove('removed');
    copied.classList.add('removed');
    
});

copy.addEventListener('click', () => {
    copy.classList.add('removed');
    copied.classList.remove('removed');
    
});

$(document).ready(() => {
    const quotes = [
        '"Begitu kamu belajar untuk berhenti, itu menjadi kebiasaan."',
        '"Kelembutan kita yang semakin meningkat, semakin kurangnya kebugaran fisik kita, itu merupakan ancaman bagi keamanan kita."',
        '"Jangan menyerah pada mimpimu, atau mimpimu akan menyerah padamu."',
        '"Tiga atau empat repetisi terakhir adalah apa yang membuat otot tumbuh. Area rasa sakit ini membagi seorang juara dari seseorang yang bukan juara."',
        '"Kebanyakan orang gagal, bukan karena kurangnya keinginan, tetapi, karena kurangnya komitmen."',
        '"Olahraga adalah persalinan tanpa kelelahan."',
        '"Beberapa orang ingin itu terjadi, beberapa berharap itu akan terjadi, yang lainnya membuat itu terjadi."',
        '"Semua kemajuan terjadi di luar zona nyaman."',
        '"Lihat ke cermin. Itulah rivalmu."',
        '"Tubuh yang lemah melemahkan pikiran."',
        '"Jika menurutmu mengangkat beban itu berbahaya, cobalah menjadi lemah. Menjadi lemah itu berbahaya."',
        '"Tubuh manusia adalah gambaran terbaik dari jiwa manusia."',
        '"Jam terus berdetak. Apakah kamu menjai orang yang kamu inginkan?"',
        '"Fokus. Fokus. Fokus."',
        '"Olahraga adalah raja. Nutrisi adalah ratu. Satukan mereka dan kamu punya kerajaan."',
        '"Disiplin adalah jembatan antara tujuan dan pencapaian."',
        '"Rasa sakit yang kamu rasakan hari ini akan menjadi kekuatan yang kamu rasakan besok."',
        '"Tindakan adalah kunci dasar untuk semua kesuksesan."',
        '"Merasa nyaman dengan menjadi tidak nyaman!"',
        '"Terkadang kamu tidak menyadari kekuatanmu sendiri sampai kamu berhadapan langsung dengan kelemahan terbesarmu."',
    ];

    $('#button').click(() => {
        let randomNumber = Math.floor(Math.random() * (quotes.length));
        $('.motivation-list').html(quotes[randomNumber]);
    });
});