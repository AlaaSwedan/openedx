$(document).on('ready', function() {
    "use strict";
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.up');

    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

});

/* -------------------------------------------------------- */
//Sliders owlCarousel - start
/* -------------------------------------------------------- */
   $(document).ready(function () {
        $("#owl-clients").owlCarousel({
        navigation: true,
        items: 6,
        itemsDesktop: [1200, 6],
        itemsTablet: [800, 3],
        itemsMobile: [700, 2],
        autoPlay : true,
        pagination : false,
    paginationNumbers: false,
    });
         $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
          $(".switcher-wrapper").fadeIn();
    }
    if ($(window).scrollTop() < 300) {
          $(".switcher-wrapper").fadeOut();
    }
    });
   
  }); 
/* -------------------------------------------------------- */
//  Owl Carousels - end
/* -------------------------------------------------------- */


