$(document).ready(function() {
    $('.menu-icon').on('click', function() {
        $('nav ul').toggleClass('showing');
        $('nav ul li a').on('click', function() {
            $('nav ul').removeClass('showing');
        });
    });
});

$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
});