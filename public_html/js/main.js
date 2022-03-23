$(document).ready(function () {
    function checkHeader() {

        let scrollFromTop = $(window).scrollTop();
        let headerHeight = $('header').outerHeight();
        if (scrollFromTop > headerHeight) {
            $('header').addClass('has-bg py-lg-1').removeClass('py-lg-4');
        } else {
            $('header').removeClass('has-bg py-lg-1').addClass('py-lg-4');
        }
    }

    $(window).scroll(function () {
        checkHeader();
    });
    if ($('.full-slider').length > 0) {


        $('.full-slider').owlCarousel({
            autoplay: true,
            loop: true,
            nav: false,
            margin: 20,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                }


            }
        });
    }
    if ($('.test-slider').length > 0) {


        $('.test-slider').owlCarousel({
            autoplay: true,
            loop: true,
            dots: false,
            nav: true,
            margin: 20,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            navText: ["<img src='assets/prevo-icon.png'>","<img src='assets/next.png'>"],
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                992: {
                    items: 2
                }

            }
        });
    }
    

        

});
