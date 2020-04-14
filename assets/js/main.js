$(function () {

    "use strict";





    $(".content_overlay").on('click', function () {
        $(this).addClass('active');
        $(this).parent('.single_content_card').parent('.card_wrap').addClass("active");
        $(this).siblings('.close_btn').addClass('active');
    });


    $(".close_btn").on('click', function () {
        $(this).siblings('.content_overlay').removeClass("active");
        $(this).parent('.single_content_card').parent('.card_wrap').removeClass("active");
        $(this).removeClass("active");
    });

    //window resize /javascript responsive FUNCTION
    let body = document.querySelector('body');

    function displayWindowSize() {
        var width = document.documentElement.clientWidth;
        console.log(width);
        if (width < 992) {

            $('script').each(function () {
                var obj = $(this);
                if (obj.attr("src") == 'assets/js/swiper-active.js') {
                    $(this).remove()
                }
            });

            $('head').each(function () {
                var obj = $(this);
                if (obj.attr("href") == 'assets/css/swiper.min.css') {
                    $(this).remove()
                }
            });

            $('.swiper-wrapper').removeClass('d-flex');
            $('.swiper-wrapper').addClass('row');

            $(".content_overlay").on('click',function(){
                $('html, body').animate({
                    scrollTop: 0,
                }, 200);

                
            })
            

        } else {
            $('.swiper-wrapper').addClass('d-flex');
            $('.swiper-wrapper').removeClass('row');
            $("body").append("<script src='assets/js/swiper-active.js'></script>");
            $("head").append('<link rel="stylesheet" href="assets/css/swiper.min.css">');

        }
    }
    window.addEventListener("resize", displayWindowSize);
    displayWindowSize();



    // $("body").append("<script src='assets/js/swiper-active.js'></script>");

    // $('script').each(function () {
    //     var obj = $(this);
    //     if (obj.attr("src") == 'assets/js/swiper-active.js') {
    //         $(this).remove()
    //     }
    // });







});