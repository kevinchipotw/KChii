




$(document).ready(function() {

	$("h3").click(function () {
	    $("h3").removeClass("active");
	    $(this).addClass("active");   
	});

	document.getElementById("aboutme").getElementsByTagName('h3')[0].click()

	$("#aboutme").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#aboutme_scroll").offset().top
	    }, 1500);
	});

	$("#resume").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#resume_scroll").offset().top
	    }, 1500);
	});

	$("#projects").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#projects_scroll").offset().top
	    }, 1500);
	});


});









