// window.addEventListener('DOMContentLoaded', () => {
//     menu = document.querySelector('.menu-mobile'),
//     hamburger = document.querySelector('.burger');
//     menuItem = document.querySelectorAll('.menu-mobile-item, .menu-mobile__link');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('burger--active');
//         menu.classList.toggle('menu-mobile--active');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.remove('burger--active');
//             menu.classList.remove('menu-mobile--active');
//         });
//     });
// });

$(window).on('load', () => {

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
    script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A82920c56939f77f29a249023d91c64d8701986b37edaa0caca142cba0fa74f1c&amp;width=100%25&amp;height=565&amp;lang=ru_RU&amp;scroll=true";
    document.getElementById("YaMaps").appendChild(script);
}