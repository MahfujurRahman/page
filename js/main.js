(function ($) {
    "use strict";

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
        portfolioMsSetup();
        portfolioLoadmoreSetup();
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
      2. Primary Menu
    --------------------------------------------------------------*/
    function primaryMenuSetup() {
        //        $(".primary-nav-list").before("<div class='m-menu-btn'><span></span></div>");
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

})(jQuery); // End of use strict
