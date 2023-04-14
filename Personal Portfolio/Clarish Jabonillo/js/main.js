$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink");
        }
    })
    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        }
    }
    parallaxMouse();
    $(window).scroll(function () {
        var hT = $("#skill-bar-wrapper").offset().top,
            hH = $("#skill-bar-wrapper").outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - 1.4 * wH)) {
            jQuery('.skillbar-container').each(function () {
                jQuery(this).find('.skills').animate({
                    width: jQuery(this).attr('data-percent')
                }, 5000)
            })
        }
    })
    let $btns = $('.img-gallery .sortBtn .filter-btn');
    $btns.click(function (e) {
        $('.img-gallery .sortBtn .filter-btn').removeClass('active');
        e.target.classList.add('active');
        let selector = $(e.target).attr('data-filter');
        $('.img-gallery .grid').isotope
            ({
                filter: selector
            })
        return false;
    })
    $('.image-popup').magnificPopup
        ({
            type: 'image',
            gallery: { enabled: true }
        })
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })
    $(".nav-link").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    })
    $.scrollIt({
        topOffset: -50
    })

})