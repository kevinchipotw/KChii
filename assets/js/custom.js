




$(document).ready(function() {

	$("h3").click(function () {
	    $("h3").removeClass("active");
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

	$("#extra").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#extra_scroll").offset().top
	    }, 1200);
	});


});









