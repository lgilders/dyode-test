$(document).ready(() => {
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
        })
    }
});

