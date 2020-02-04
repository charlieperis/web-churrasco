
$(document).ready(function () {

    //--- Preloading ---//
    $(window).load(function () {
        setTimeout(function () {
            $('.preloader').fadeOut(500);
            playAllAnimates(); // Una vez que termina de cargar el sitio, oculta el preload y ejecuta las animaciones //
            shuffleTx(); // Inicia el shuffle_letter.js
        }, 500);
    });


    function playAllAnimates() {

        //--- Ajuste a 100% de alto de Pantalla ---// 
        var windowsHeight = $(window).height();
        var windowsWidth = $(window).width();

        $(".full-cont, .block, .block .in").css({ 'height': windowsHeight });
        $(".big-back").css({ 'width': windowsWidth * 3.2 });


        //--- Si la pantalla tiene un ancho menor a 770px ---//
        if ($(window).width() < 700) {
            $(".big-back").css({ 'width': windowsWidth * 11.5 });
            $(".big-back").animate({ 'top': '-5%', 'opacity': '1' }, 3000);

            setTimeout(function () {
                $('.hover-logo').animate({ 'opacity': '0.9' }, 2000);
            }, 4000);

            setTimeout(function () {
                $('.nav-cc').animate({ 'bottom': '4px' }, 1000);
            }, 6500);
            setTimeout(function () {
                $('.girl-vr').animate({ 'bottom': '-8%', 'left': '-40%', 'opacity': '0.6' }, 1000);
                $('.girl-vr').animate({ 'bottom': '-12%' }, 200);
                $('.girl-vr').animate({ 'bottom': '-10%' }, 300);
            }, 4500);
        }

        else {
            //--- Animación nav-cc ---//
            setTimeout(function () {
                $('.nav-cc').animate({ 'left': '26px' }, 800);
            }, 8000);
            //---//

            setTimeout(function () {
                $('.girl-vr').animate({ 'bottom': '-20px', 'left': '14.5%', 'opacity': '0.8' }, 1000);
                $('.girl-vr').animate({ 'bottom': '-30px' }, 300);
            }, 5700);
            setTimeout(function () {
                $('.hand-phone').animate({ 'bottom': '-10px', 'left': '6%', 'opacity': '0.8' }, 1000);
                $('.hand-phone').animate({ 'bottom': '-20px' }, 300);
            }, 5900);
            setTimeout(function () {
                $('.phones').animate({ 'bottom': '10px', 'left': '42%', 'opacity': '0.8' }, 1000);
                $('.phones').animate({ 'bottom': '-40px' }, 300);
            }, 6100);
        }



        //--- Animación de fondo al inicio ---/
        $(".big-back").animate({ 'top': '-5%', 'opacity': '1' }, 7000);
        //---// 

        //--- Animación Logo ---//
        setTimeout(function () {
            $('.hover-logo').animate({ 'opacity': '0.9' }, 10000);
        }, 6800);
        //---// 

        //--- Animación Textos Home (G) ---//
        setTimeout(function () {
            $('._1text').animate({ 'right': '3%', 'opacity': '1' }, 600);
            $('._1text').animate({ 'right': '0%' }, 300);
        }, 800);
        setTimeout(function () {
            $('._2text').animate({ 'right': '3%', 'opacity': '1' }, 600);
            $('._2text').animate({ 'right': '0%' }, 300);
        }, 1200);
        setTimeout(function () {
            $('._3text').animate({ 'opacity': '1' }, 800);
        }, 2700);
        //---//
    };


});//--- Fin Document Ready ---//
