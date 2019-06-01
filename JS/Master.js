/// <reference path="D:\Documentos\Visual Studio 2015\Projects\ANNA\JMZ\ANNA\scroll.html" />
/// <reference path="D:\Documentos\Visual Studio 2015\Projects\ANNA\JMZ\ANNA\scroll.html" />
var XSBREAK = 768;
var scroll;

$(document).ready(function () {
    setTimeout(function () {
        $(".main-title .rectangle").fadeIn(1000);
    }, 300);


    $("#1photo").bind({
        click: function () {
            $("#container_1photo").fadeIn();
            $(".dynamic_Link.closes").text("CLOSE");
        }
    });

    $(".sub-list h2").mouseenter(function () {
        $(".nav-bar").addClass("active");

        if ($(window).width() >= XSBREAK) {
            $(this).parent().css("width", "98px");
            $(this).animate({ opacity: "0" }, 300);
            $(this).parent().animate({ width: "250px" }, 150);
            $(this).parent().delay(300).addClass("active");
            $(this).parent().find("ul").css("opacity", "0");
            $(this).parent().find("ul").delay(150).animate({ opacity: "1" }, 300);
        }
    });

    $("nav").mouseleave(function () {
        if ($(window).width() >= XSBREAK && $("nav .sub-list").hasClass("active")) {
            $(".nav-bar").removeClass("active");
            $("nav .sub-list").removeClass("active");
            $("nav .sub-list").css("width", "250px");
            $("nav .sub-list").animate({ width: "98px" }, 300);
            $("nav .sub-list h2").delay(150).animate({ opacity: "1" }, 150);
        }
    });
    setTimeout(function () {
        scroll = $('body').scrollspy({
            target: "#myScrollspy",
            active: "#Amado",
            offset: 200
        });
        scroll.scrollspy("refresh");
    }, 150);
});

function goToMain() {
    window.location.href = "/index.html"
}

//$(window).scroll(function () {
//    if ($(this).scrollTop() > 0) {
//        $(".main-title").css("opacity", 1 - $(window).scrollTop() / 500);
//        $('.sub-title').fadeIn();
//    }
//    else {
//        $('.sub-title').fadeOut();
//    }
//});

function dynamicLink() {
    if ($(".dynamic_Link.closes").text() == "CLOSE") {
        $(".dynamic_Link.closes").text("CONTACT");
        $("#container_1photo").fadeOut();
        $("#container_2photo").fadeOut();
    }
}