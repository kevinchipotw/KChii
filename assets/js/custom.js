

// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
    
//     //smoothscroll
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
        
//         $('a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');
      
//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top+2
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });

// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('.categories .category').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('.categories .category').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
// }




$(document).ready(function() {


	$(".category").click(function () {
	    $(".category").removeClass("active");
	    $(this).addClass("active");   
	});

	document.getElementById("aboutme").getElementsByTagName('h3')[0].click()

	$("#aboutme").click(function() {
	    $('html, body').animate({
	        scrollTop: (0)
	    }, 1200);
	});

	$("#resume").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#resume_scroll").offset().top
	    }, 1200);
	});

	$("#techskills").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#techskills_scroll").offset().top
	    }, 1200);
	});

	$("#projects").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#projects_scroll").offset().top
	    }, 1200);
	});

	$("#internships").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#intern_scroll").offset().top
	    }, 1200);
	});

	$("#extra").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#extra_scroll").offset().top
	    }, 1200);
	});


	//nav duplicate for xs screens
	$("#nav-aboutme").click(function() {
	    $('html, body').animate({
	        scrollTop: (0)
	    }, 1200);
	});

	$("#nav-resume").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#resume_scroll").offset().top-80
	    }, 1200);
	});

	$("#nav-techskills").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#techskills_scroll").offset().top-80
	    }, 1200);
	});

	$("#nav-projects").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#projects_scroll").offset().top-80
	    }, 1200);
	});

	$("#nav-internships").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#intern_scroll").offset().top-80
	    }, 1200);
	});

	$("#nav-extra").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#extra_scroll").offset().top-80
	    }, 1200);
	});


});









