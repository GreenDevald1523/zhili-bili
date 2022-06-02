$(document).ready(() => {
    $('.sec-6-carousel').slick({
        dots: true,
        // fade: true,
        // fadeSpeed: 1000,
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1105,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 846,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
})