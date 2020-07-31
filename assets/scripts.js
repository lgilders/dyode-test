$(document).ready(() => {
    var $hero = $('#hero-wrapper'); // Hero section
    var $instagram = $('#instagram-wrapper'); // Instagram section

    initCarousel();

    $(window).on('orientationchange resize', function() {
        initCarousel();
    });

    function initCarousel() {
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
    }
});
