




$(document).ready(function() {

	$("h3").click(function () {
	    $("h3").removeClass("active");
	    $(this).addClass("active");   
	});

	document.getElementById("aboutme").getElementsByTagName('h3')[0].click()
});


