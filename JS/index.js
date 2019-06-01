$(document).ready(function () {
    setTimeout(function () {
        $(".main-title").fadeIn(1000);
    }, 300);
    
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $(".logoIMG").css("opacity", 2 - $(window).scrollTop() / 750);
    }
});