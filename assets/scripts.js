$(document).ready(() => {
    const $hero = $('#hero-wrapper'); // Hero section
    const $featuredProducts = $('#featured-products-wrapper'); // Featured Products section
    const $instagram = $('#instagram-wrapper'); // Instagram section

    initCarousel();

    $(window).on('orientationchange resize', function() {
        initCarousel();
    });

    function initCarousel() {
        $hero.each(function() { 
            if (!$(this).hasClass('slick-initialized')) {
                $(this).slick({
                    dots: true,
                    arrows: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    adaptiveHeight: true
                });
            }
        });

        $instagram.each(function() { 
            if (!$(this).hasClass('slick-initialized')) {
                $(this).slick({
                    dots: false,
                    arrows: false,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    adaptiveHeight: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: "unslick"
                        }
                    ]
                });
            }
        });

        $featuredProducts.each(function() { 
            if (!$(this).hasClass('slick-initialized')) {
                $(this).slick({
                    dots: false,
                    arrows: true,
                    prevArrow: $('#prev'),
                    nextArrow: $('#next'),
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    adaptiveHeight: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1
                            }
                        },
                    ]
                });
            }
        });


        

    }
});
