// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#scrollTop-btn').fadeIn(200);    // Fade in the arrow
    } else {
        $('#scrollTop-btn').fadeOut(200);   // Else fade out the arrow
    }
});