$ ( d o cument).ready(() => {
    $(window).scroll(() => {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            $('header').addClass('scrolled');
            $('header .navbar').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
            $('header .navbar').removeClass('scrolled');
        }
    });

    $('header .menu-toggle').click(() => {
        $('header .navbar').toggleClass('slide');
    });

    $('#login').click(() => {
        $('.overlay #loginBox').addClass('loginPop');
        $('.overlay').addClass('loginPop');
        $(document.body).addClass('loginPop');
    });

    $('#register').click(() => {
        $('.overlay #registerBox').addClass('regisPop');
        $('.overlay').addClass('regisPop');
        $(document.body).addClass('regisPop');
    });

    $('.overlay .popup #loginLink').click(() => {
        $('.overlay #loginBox').addClass('loginPop');
        $('.overlay #registerBox').removeClass('regisPop');
    });

    $('.overlay .popup #registerLink').click(() => {
        $('.overlay #registerBox').addClass('regisPop');
        $('.overlay #loginBox').removeClass('loginPop');
    });

    const close = document.querySelectorAll('.overlay .popup i');
    const registerPopup = document.querySelector('.overlay #registerBox');
    const loginPopup = document.querySelector('.overlay #loginBox');
    const overlay = document.querySelector('.overlay');

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


    // Copy to Clipboard
    copyToClipboard = (el) => {
        let $temp = $('<input>');
        $('body').append($temp);
        $temp.val($(el).text()).select();
        document.execCommand('copy');
        $temp.remove();
    }

    $('.motivation-page .motivation-box .btn').click(() => {
        $('.motivation-page .motivation-box .copy-text').removeClass('removed');
        $('.motivation-page .motivation-box .copied').addClass('removed');
    });

    $('.motivation-page .motivation-box .copy').click(() => {
        copyToClipboard($('.motivation-list'));
        $('.motivation-page .motivation-box .copy-text').addClass('removed');
        $('.motivation-page .motivation-box .copied').removeClass('removed');
    });

    // Motivation Generator
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
        '"Jam terus berdetak. Apakah kamu menjadi orang yang kamu inginkan?"',
        '"Fokus. Fokus. Fokus."',
        '"Olahraga adalah raja. Nutrisi adalah ratu. Satukan mereka dan kamu punya kerajaan."',
        '"Disiplin adalah jembatan antara tujuan dan pencapaian."',
        '"Rasa sakit yang kamu rasakan hari ini akan menjadi kekuatan yang kamu rasakan besok."',
        '"Tindakan adalah kunci dasar untuk semua kesuksesan."',
        '"Merasa nyaman dengan menjadi tidak nyaman!"',
        '"Terkadang kamu tidak menyadari kekuatanmu sendiri sampai kamu berhadapan langsung dengan kelemahan terbesarmu."',
    ];

    let currentIndex = 0;
    let shuffledQuotes = shuffleArray(quotes);

    $('#button').click(() => {
        if (currentIndex >= quotes.length) {
            let randomNumber = Math.floor(Math.random() * (shuffledQuotes.length));
            $('.motivation-list').html(shuffledQuotes[randomNumber]);
        } else {
            $('.motivation-list').html(quotes[currentIndex]);
            currentIndex++;
        }
    });

    function shuffleArray(array) {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // Pop-Up Chat Box
    $('.chat i, .chat .chat-box i').click(() => {
        $('.chat .chat-box').toggleClass('show');
    });
});
