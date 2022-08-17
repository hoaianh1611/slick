/* eslint-disable linebreak-style */
$(".c-header__openmenu").click(function(){
    $(this).parent().find(".c-gnav").addClass("is-show");
    $("body").css("overflow", "hidden");
});

$(".c-closemenu").click(function(){
    $(this).parent().parent().find(".c-gnav").removeClass("is-show");
    $("body").css("overflow", "auto");
});

// $(".is-active").find("li").click(function(){
//     console.log("ok");
// });

//Slide mainvisual
$(document).ready(function(){
    $(".c-mainvisual__slide").slick({
        slideToSlide: 1,
        autoplay: true,
        infinite: true,
        speed: 3000,
        fade: true,
        cssEase: "linear",
        dots: false,
        arrows: false,
    });
});

//Slide pickup
$(document).ready(function(){
    $(".c-pickup__slide").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        dots: true,
        centerMode: true,
        prevArrow: "<div class='slick-prev slick-arrow'><img src='./assets/arrow-prev.svg' alt='icon'></div>",
        nextArrow: "<div class='slick-next slick-arrow'><img src='./assets/arrow-next.svg' alt='icon'></div>",
        responsive: [
            {
                breakpoint: 1850,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1074,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false,
                },
            },
        ],
    });
});