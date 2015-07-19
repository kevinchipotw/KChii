

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).parent().parent().removeClass('active');
        })
        $(this).parent().parent().addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    $(".navbar-category").click(function () {
        $(".navbar-category").removeClass("active");
        $(this).addClass("active");   
    });


    //nav duplicate for xs screens
    $("#nav-aboutme").click(function() {
        $('html, body').animate({
            scrollTop: (0)
        }, 1200);
    });

    $("#nav-resume").click(function() {
        $('html, body').animate({
            scrollTop: $("#resume").offset().top-80
        }, 1200);
    });

    $("#nav-techskills").click(function() {
        $('html, body').animate({
            scrollTop: $("#techskills").offset().top-80
        }, 1200);
    });

    $("#nav-projects").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top-80
        }, 1200);
    });

    $("#nav-internships").click(function() {
        $('html, body').animate({
            scrollTop: $("#internship").offset().top-80
        }, 1200);
    });

    $("#nav-extra").click(function() {
        $('html, body').animate({
            scrollTop: $("#extra_curriculum").offset().top-80
        }, 1200);
    });

});



function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center a').parent().parent().removeClass("active");
            currLink.parent().parent().addClass("active");
        }
        else{
            currLink.parent().parent().removeClass("active");
        }
    });
}

