window.addEventListener('DOMContentLoaded', () => {
    menu = document.querySelector('.menu-mobile'),
    hamburger = document.querySelector('.burger');
    menuItem = document.querySelectorAll('.menu-mobile-item, .menu-mobile__link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger--active');
        menu.classList.toggle('menu-mobile--active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('burger--active');
            menu.classList.remove('menu-mobile--active');
        });
    });
});

$(window).on('load', () => {

    $('a[href^="#"]:not(a.popup)').on('click', function() {
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });

    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: 
        '<button type="button" class="slick-arrow slick-prev">' +
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' + 
                '<path class="slick-arrow-img" d="M10 16L3 9L10 2" stroke-linecap="round"/>' + 
            '</svg>' + 
        '</button>',
        nextArrow: 
        '<button type="button" class="slick-arrow slick-next">'+
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="slick-arrow-img" d="M2 2L9 9L2 16" stroke-linecap="round"/>' +
            '</svg>' +
        '</button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.teachers__slider').slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: true,
        prevArrow: 
        '<button type="button" class="slick-arrow slick-arrow--bottom slick-arrow--big slick-arrow--dark teachers-prev slick-prev">' +
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' + 
                '<path class="slick-arrow-img slick-arrow-img--white" d="M10 16L3 9L10 2" stroke-linecap="round"/>' + 
            '</svg>' + 
        '</button>',
        nextArrow: 
        '<button type="button" class="slick-arrow slick-arrow--bottom slick-arrow--dark slick-arrow--long slick-next">'+
            '<svg class="slick-arrow-svg" width="65" height="24" viewBox="0 0 65 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="slick-arrow--white" d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM64.0607 13.0607C64.6464 12.4749 64.6464 11.5251 64.0607 10.9393L54.5147 1.3934C53.9289 0.807611 52.9792 0.807611 52.3934 1.3934C51.8076 1.97919 51.8076 2.92893 52.3934 3.51472L60.8787 12L52.3934 20.4853C51.8076 21.0711 51.8076 22.0208 52.3934 22.6066C52.9792 23.1924 53.9289 23.1924 54.5147 22.6066L64.0607 13.0607ZM2 13.5H63V10.5H2V13.5Z" fill="white"/>' +
            '</svg>'
         +
        '</button>'
        ,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.logoped__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: 
        '<button type="button" class="slick-arrow slick-prev slick-arrow--big">' +
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' + 
                '<path class="slick-arrow-img" d="M10 16L3 9L10 2" stroke-linecap="round"/>' + 
            '</svg>' + 
        '</button>',
        nextArrow: 
        '<button type="button" class="slick-arrow slick-next slick-arrow--big">'+
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="slick-arrow-img" d="M2 2L9 9L2 16" stroke-linecap="round"/>' +
            '</svg>' +
        '</button>'
    });
    $('.rooms__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: 
        '<button type="button" class="slick-arrow slick-prev slick-arrow--big">' +
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' + 
                '<path class="slick-arrow-img" d="M10 16L3 9L10 2" stroke-linecap="round"/>' + 
            '</svg>' + 
        '</button>',
        nextArrow: 
        '<button type="button" class="slick-arrow slick-next slick-arrow--big">'+
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="slick-arrow-img" d="M2 2L9 9L2 16" stroke-linecap="round"/>' +
            '</svg>' +
        '</button>'
    });
    $('.gallery__slider').slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: 
        '<button type="button" class="slick-arrow slick-arrow--bottom slick-arrow--big slick-arrow--dark slick-prev">' +
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' + 
                '<path class="slick-arrow-img slick-arrow-img--white" d="M10 16L3 9L10 2" stroke-linecap="round"/>' + 
            '</svg>' + 
        '</button>',
        nextArrow: 
        '<button type="button" class="slick-arrow slick-arrow--bottom slick-arrow--dark slick-arrow--long slick-next">'+
            '<svg class="slick-arrow-svg" width="65" height="24" viewBox="0 0 65 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="slick-arrow--white" d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM64.0607 13.0607C64.6464 12.4749 64.6464 11.5251 64.0607 10.9393L54.5147 1.3934C53.9289 0.807611 52.9792 0.807611 52.3934 1.3934C51.8076 1.97919 51.8076 2.92893 52.3934 3.51472L60.8787 12L52.3934 20.4853C51.8076 21.0711 51.8076 22.0208 52.3934 22.6066C52.9792 23.1924 53.9289 23.1924 54.5147 22.6066L64.0607 13.0607ZM2 13.5H63V10.5H2V13.5Z" fill="white"/>' +
            '</svg>'
         +
        '</button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
    $('.reviews__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: 
        '<button type="button" class="slick-arrow slick-prev slick-arrow--big">' +
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' + 
                '<path class="slick-arrow-img" d="M10 16L3 9L10 2" stroke-linecap="round"/>' + 
            '</svg>' + 
        '</button>',
        nextArrow: 
        '<button type="button" class="slick-arrow slick-next slick-arrow--big">'+
            '<svg class="slick-arrow-svg" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="slick-arrow-img" d="M2 2L9 9L2 16" stroke-linecap="round"/>' +
            '</svg>' +
        '</button>'
    });


    // Map
    YaMapsShown = false; 
    $(window).scroll(function() {
        if (!YaMapsShown){
            if($(window).scrollTop() + $(window).height() > $(document).height() - 776) {      
            showYaMaps();
            YaMapsShown = true;
            }
        }
    });
    function showYaMaps(){
        var script   = document.createElement("script");
        script.type  = "text/javascript";
        script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab527b78d411aa965e9c8654c48ac3b2091a4b0b640f85eda2bf8ccfc5a52271a&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=true";
        document.getElementById("YaMaps").appendChild(script);
    }


    // Табы
    document.querySelectorAll('.tab').forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const id = e.target.getAttribute('data-tab');

            // let parent = e.target.parentNode;
            // console.log(e.target.parentNode.classList);
            let elem = e.target;
            let parent = '';
            while ((elem = elem.parentElement) !== null) {
                if (elem.nodeType !== Node.ELEMENT_NODE) {
                    continue;
                }
                if (elem.matches('.section-with-tabs')) {
                    parent = elem;
                    break;
                }
            }
            parent.querySelectorAll('.tab--active').forEach(
                (child) => {
                    child.classList.remove('tab--active')
                }
            );
            parent.querySelectorAll('.tab-content--active').forEach(
                (child) => {
                    child.classList.remove('tab-content--active')
                }
            );

            item.classList.add('tab--active');
            document.getElementById(id).classList.add('tab-content--active');
        })
    });

    document.querySelectorAll('.subtab').forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const id = e.target.getAttribute('data-subtab');
            document.querySelectorAll('.tab-content--active .subtab--active').forEach(
                (child) => {
                    child.classList.remove('subtab--active');
                }
            );
            document.querySelectorAll('.tab-content--active .subtab-content--active').forEach(
                (child) => {
                    child.classList.remove('subtab-content--active')
                }
            );
            item.classList.add('subtab--active');
            document.getElementById(id).classList.add('subtab-content--active');
        })
    });

    $('.learning__dropdown').on('click', function () {
        let content = $(this).find('.learning__info');
        if(content.text !== ''){
            $(this).toggleClass('learning__dropdown--active');
            content.slideToggle();
        }
    });

    // Отправка формы
    $("form").on("submit", (function (e) {
        e.preventDefault();
        let form = $(this);
        return $.ajax({
            type: "POST",
            url: "../send.php",
            data: $(this).serialize(),
            success: function (e) {
                e = JSON.parse(e);
                console.log(e.result);
                if("success" === e.result){
                    form.find('.form-message--success').css('display', 'block');
                }else{
                    form.find('.form-message--error').css('display', 'block');
                }
                form.find("input[type='name'], input[type='tel'], textarea").val("").val(""), $("form").trigger("reset");
            }
        });
    }));


    var header = document.querySelector('.header');
    var sticky = header.offsetTop;

    if($(window).width() < 767) {
        $(this).scroll(function () {
            if(window.pageYOffset > sticky){
                header.classList.add('position-fixed');
            }else{
                header.classList.remove('position-fixed');
            }
        });
    }

    $('input[type="tel"]').inputmask('+7 (999) 999-99-99');
});