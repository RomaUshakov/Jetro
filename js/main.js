$(document).ready(function () {
    $('.slider__main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__nav',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/arrow-prev.png"></img></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/arrow-next.png"></img></button>'
    });
    $('.slider__nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__main',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: true,
        centerPadding: 0,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 975,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 611,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 442,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    $('.works__slider-inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3
                }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1
                }
            }
        ]
    });
});

$('.burger__box').on('click', function () {
    $('.header__nav ul').slideToggle();
});
