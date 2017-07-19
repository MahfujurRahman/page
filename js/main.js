(function ($) {
    "use strict";
    /*
    |--------------------------------------------------------------------------
    | Template Name: Prebook
    | Version: 1.0.1
    |--------------------------------------------------------------------------
    |--------------------------------------------------------------------------
    | TABLE OF CONTENTS:
    |--------------------------------------------------------------------------
    |
    | 1. Scripts initialization
    | 2. Preloader
    | 3. Primary Menu
    | 4. Scroll Function
    | 5. Scroll Up
    | 6. Owl Carousel
    | 7. Smooth Scroll
    | 8. Tab
    | 9. Accordian
    | 10. Portfolio
    | 11. Portfolio Load More
    | 12. Magnific Popup
    | 13. Section Active
    |
    */
    /*--------------------------------------------------------------
      1. Scripts initialization
    --------------------------------------------------------------*/
    $(window).on('load', function () {
        $(window).trigger("scroll");
        $(window).trigger("resize");
        preloaderSetup();
        portfolioMsSetup();
    });
    $(document).ready(function () {
        $(window).trigger("resize");
        primaryMenuSetup();
        mobileMenu();
        scrollUp();
        owlCarouselSetup();
        smoothScrollSetup();
        tabSetup();
        accordianSetup();
        sectionActive();
        smoothScroll();
        portfolioMsSetup();
        portfolioLoadmoreSetup();
        magnificPopupSetup();
        new WOW().init();
        $('.parallax').parallax("50%", 0.3);
    });
    $(window).on('resize', function () {
        mobileMenu();
        portfolioMsSetup();
        portfolioLoadmoreSetup();
    });
    $(window).on('scroll', function () {
        scrollFunction();
    });
    /*--------------------------------------------------------------
      2. Preloader
    --------------------------------------------------------------*/
    function preloaderSetup() {
        $("body").imagesLoaded(function () {
            $(".t-circle").fadeOut();
            $("#preloader").delay(200).fadeOut("slow").remove();
        });
    }
    /*--------------------------------------------------------------
      3. Primary Menu
    --------------------------------------------------------------*/
    function primaryMenuSetup() {
        $(".primary-nav-list").before("<div class='m-menu-btn'><span></span></div>");
        $(".m-menu-btn").on('click', function () {
            $(this).toggleClass("m-menu-btn-ext");
            $(this).siblings('.primary-nav-list').slideToggle(800);
        });
        $(".menu-item-has-children > ul").before("<i class='fa fa-plus m-dropdown'></i>");
        $('.m-dropdown').on('click', function () {
            $(this).siblings('ul').slideToggle("slow");
            $(this).toggleClass("fa-plus fa-minus")
        });
    }

    function mobileMenu() {
        if ($(window).width() <= 991) {
            $('.primary-nav').addClass('m-menu').removeClass('primary-nav');
        } else {
            $('.m-menu').addClass('primary-nav').removeClass('m-menu');
        }
    }
    /*--------------------------------------------------------------
      4. Scroll Function
    --------------------------------------------------------------*/
    function scrollFunction() {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $(".site-header").addClass("small-height");
        } else {
            $(".site-header").removeClass("small-height");
        }
        if (scroll >= 350) {
            $(".scrollup").addClass("scrollup-show");
        } else {
            $(".scrollup").removeClass("scrollup-show");
        }
    }
    /*--------------------------------------------------------------
      5. Scroll Up
    --------------------------------------------------------------*/
    function scrollUp() {
        $("body").append("<span class='scrollup'></span>");
        $('.scrollup').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        });
    }
    /*--------------------------------------------------------------
      6. Owl Carousel
    --------------------------------------------------------------*/
    function owlCarouselSetup() {
        /* Owl Carousel For Partner Logo hero-slider-v1 */
        $('.hero-slider-v1').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: false,
            autoplayHoverPause: false,
            smartSpeed: 900,
            autoplayTimeout: 5000,
        });
        /* Owl Carousel For Partner Logo hero-slider-v2 */
        $('.hero-slider-v2').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: true,
            navText: ['<i class="icon-arrows_left"></i>', '<i class="icon-arrows_right"></i>'],
            dots: false,
            autoplay: true,
            autoplayHoverPause: false,
            smartSpeed: 1200,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplayTimeout: 5000
        });
        /* Owl Carousel For Partner Logo hero-slider-v3 */
        $('.hero-slider-v3').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayHoverPause: false,
            smartSpeed: 1200,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplayTimeout: 5000
        });
        /* Owl Carousel For Partner Logo */
        $('.partner-logo').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            navText: false,
            autoplay: true,
            smartSpeed: 600,
            autoplayTimeout: 2500,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                800: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });
        /* Owl Carousel For Partner Logo testimonial-v1 */
        $('.testimonial-v1').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: false,
            smartSpeed: 600,
            autoplayTimeout: 500
        });
        /* Owl Carousel For Partner Logo testimonial-v2 */
        $('.testimonial-v2').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            navText: false,
            dots: true,
            autoplay: false,
            smartSpeed: 700,
            autoplayTimeout: 4000,
            responsive: {
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
    /*--------------------------------------------------------------
      7. Smooth Scroll
    --------------------------------------------------------------*/
    function smoothScrollSetup() {
        if (typeof smoothScroll == 'object') {
            smoothScroll.init();
        }
    }
    /*coded by monir*/
    function smoothScroll() {
        $('.smooth-scroll').click(function () {
            var linkHref = $(this).attr('href');
            var headerH = '70'
            $('html, body').animate({
                scrollTop: $(linkHref).offset().top - headerH + "px"
            }, 1000);
        });
    }
    /*--------------------------------------------------------------
      8. Tab
    --------------------------------------------------------------*/
    function tabSetup() {
        $(".nav-tabs a").on('click', function () {
            $(this).tab('show');
        });
        $('.nav-tabs a').on('shown.bs.tab', function (event) {
            var x = $(event.target).text(); // active tab
            var y = $(event.relatedTarget).text(); // previous tab
            $(".act span").text(x);
            $(".prev span").text(y);
        });
    }
    /*--------------------------------------------------------------
      9. Accordian
    --------------------------------------------------------------*/
    function accordianSetup() {
        var $this = $(this);
        $(".accordian-head").append("<span class='accordian-toggle'></span>");
        $('.single-accordian').filter(':nth-child(n+2)').children('.accordian-body').hide();
        $('.single-accordian:first-child').children('.accordian-head').addClass('active');
        $('.accordian-head').on('click', function () {
            $(this).parent('.single-accordian').siblings().children('.accordian-body').slideUp();
            $(this).siblings().slideToggle();
            /* Accordian Active Class */
            $(this).toggleClass('active');
            $(this).parent('.single-accordian').siblings().children('.accordian-head').removeClass('active');
        });
    }
    /*--------------------------------------------------------------
    10. Portfolio
    --------------------------------------------------------------*/
    function portfolioMsSetup() {
        $('.portfolio').isotope({
            itemSelector: '.portfolio-item',
            transitionDuration: '0.60s',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
        /* Active Class of Portfolio*/
        $('.portfolio-filter ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
        /*=== Portfolio filtering ===*/
        $('.portfolio-filter ul').on('click', 'a', function () {
            var filterElement = $(this).attr('data-filter');
            $(this).parents(".portfolio-filter").next().isotope({
                filter: filterElement
            });
        });
    }
    /*--------------------------------------------------------------
    11. Portfolio Load More
    --------------------------------------------------------------*/
    function noMorePortfolio($button) {
        $button.text('No more portfolio item');
        setTimeout(function () {
            $button.slideUp(300);
        }, 4000);
    }

    function portfolioLoadmoreSetup() {
        $(document).on('click', ".load-more-btn", function () {
            var load_more_button = $(this);
            var loaded = parseInt($(this).attr('data-loaded'));
            var maxload = parseInt($(this).attr('data-maxload'));
            if (maxload <= loaded) {
                noMorePortfolio(load_more_button);
                return;
            }
            load_more_button.text("Loading...");
            $.ajax({
                'url': $(this).data('source'),
                'success': function (response) {
                    var $items = $(response);
                    $('#portfolio_box').append($items).isotope('appended', $items);
                    loaded++;
                    load_more_button.attr('data-loaded', loaded).text("Load more");
                    if (maxload <= loaded) {
                        noMorePortfolio(load_more_button);
                    }
                }
            });
        });
    }
    /*--------------------------------------------------------------
      12. Magnific Popup
    --------------------------------------------------------------*/
    function magnificPopupSetup() {
        $('.zoom-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                    return element.find('img');
                }
            }
        });
    }
    /*--------------------------------------------------------------
      13. Section Active
    --------------------------------------------------------------*/
    function sectionActive() {
        $('body').scrollspy({
            target: '.site-header',
            offset: 70
        });
    }
})(jQuery); // End of use strict
