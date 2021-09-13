$(window).on('load', () => {

    var header = document.querySelector('.header__inner');
    var sticky = header.offsetTop;

    $(this).scroll(function () {
        if(window.pageYOffset > sticky){
            header.classList.add('position-fixed');
        }else{
            header.classList.remove('position-fixed');
        }
    });

    $('a[href^="#"]:not(a.popup)').on('click', function() {
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });


    // Отправка формы
    $("form").on("submit", (function (e) {
        e.preventDefault();
        let form = $(this);
        let formData = $(this).serialize();
        let inputDoctor = form.find('input[name="doctor"]');
        if(inputDoctor.length > 0){
            formData += '&doctor=' + inputDoctor.val();
        }
        return $.ajax({
            type: "POST",
            url: "../send.php",
            data: formData,
            success: function (e) {
                e = JSON.parse(e);
                console.log(e.result);
                if("success" === e.result){
                    form.find('.form-message--success').css('display', 'block');
                }else{
                    form.find('.form-message--error').css('display', 'block');
                }
                form.find("input[type='name'], input[type='tel'], input[name='doctor']").val("").val(""), $("form").trigger("reset");
            }
        });
    }));

    $().fancybox();

    $('input[type="tel"]').inputmask('+7 (999) 999-99-99');

    $('.stuff .btn').on('click', function () {
        let doctorName = $(this).parent().find('.stuff__name').text();
        $('#order').find('input[name="doctor"]').val(doctorName);
    });
});

// Map
// YaMapsShown = false; 
// $(window).on('scroll', function() {
//     if (!YaMapsShown){
//         if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {      
//         showYaMaps();
//         YaMapsShown = true;
//         }
//     }
// });



ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('YaMaps', {
            center: [53.201823, 50.126729],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        });

    myMap.geoObjects.add(new ymaps.Placemark([53.201709, 50.126451], {
        balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
    }, {
        // preset: 'islands#icon',
        // iconColor: '#0095b6',
        iconLayout: 'default#image',
        iconImageHref: 'img/mark.png',
        // iconImageSize: [67, 81]
    }));
}


// countdown
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes
    };
}
   
function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('#days');
    var hoursSpan = clock.querySelector('#hours');
    var minutesSpan = clock.querySelector('#minutes');

    function updateClock() {
        var t = getTimeRemaining(endtime);
        
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);

        if (t.total <= 0) {
        clearInterval(timeinterval);
        }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}
   
var deadline = new Date(Date.parse(new Date(2021, 8, 9, 15, 37)) + 100 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('timer', deadline);