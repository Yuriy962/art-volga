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
    // $("form").on("submit", (function (e) {
    //     e.preventDefault();
    //     let form = $(this);
    //     return $.ajax({
    //         type: "POST",
    //         url: "../send.php",
    //         data: $(this).serialize(),
    //         success: function (e) {
    //             e = JSON.parse(e);
    //             console.log(e.result);
    //             if("success" === e.result){
    //                 form.find('.form-message--success').css('display', 'block');
    //             }else{
    //                 form.find('.form-message--error').css('display', 'block');
    //             }
    //             form.find("input[type='name'], input[type='tel'], textarea").val("").val(""), $("form").trigger("reset");
    //         }
    //     });
    // }));

    $('input[type="tel"]').inputmask('+7 (999) 999-99-99');
});

// Map
YaMapsShown = false; 
$(window).on('scroll', function() {
    if (!YaMapsShown){
        if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {      
        showYaMaps();
        YaMapsShown = true;
        }
    }
});
function showYaMaps(){
    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A82920c56939f77f29a249023d91c64d8701986b37edaa0caca142cba0fa74f1c&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true";
    document.getElementById("YaMaps").appendChild(script);
}





// countdown
// Берём элемент для вывода таймера
let timer__show = document.querySelector('#timer');
let timer__days = timer__show.querySelector('#days');
let timer__hours = timer__show.querySelector('#hours');
let timer__minutes = timer__show.querySelector('#minutes');

// функция для вычисления разности времени
function diffSubstract(date1, date2) {
    return date2 - date1;
}

let end_date = {
    full_year: '2021', // год
    month: '11', // месяц
    day: '21', // день
    hours: '21', // час
    minutes: '00', // минута
    seconds: '00' // секунда
}

// Запуск интервала таймера
timer = setInterval(function () {
    // Получение времени сейчас
    let now = new Date();
    //Получение заданного времени
    let date = new Date(`${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`);
    // Вычисление разницы времени
    let ms_left = diffSubstract(now, date);
    
    // Получаем время зависимое от разницы
    let res = new Date(ms_left);
    // Делаем строки для вывода
    // Если разница времени меньше или равна нулю
    if(ms_left <= 0) {
        // Выключаем интервал
        timer__days.innerHTML = `00`;
        timer__hours.innerHTML = `00`;
        timer__minutes.innerHTML = `00`;
        clearInterval(timer);
    } else {        
        let str_days = `${res.getUTCDay()}`;
        let str_hours = `${res.getUTCHours()}`;
        let str_minutes = `${res.getUTCMinutes()}`;
        timer__days.innerHTML = str_days;
        timer__hours.innerHTML = str_hours;
        timer__minutes.innerHTML = str_minutes;
    }
}, 1000);