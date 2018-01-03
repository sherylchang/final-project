$(document).ready(function(){
	$(".carousel").unslider({
		autoplay: true
	});

	$("#item-image img").hover(function() {
		$("#item-image img").removeClass("back");
		$("#item-image img").addClass("big");
	});

	$("#modal-overlay").hover(function() {
		$("#item-image img").removeClass("big");
		$("#item-image img").addClass("back");
	});

	$(".photo-container").click(function(){
		$("#modal-container").show();
		$("html, body").css({
    		overflow: "hidden",
		});
	});

	$("#modal-overlay").click(function(){
		$("#modal-container").hide();
		$("html, body").css({
    		overflow: "auto",
		});
	});

	var target = $("#photos").offset().top - 45;

	var x = $(window).scroll(function(){
    	if (x.scrollTop() > target) {   
        	$(".link").css("color", "black");
    	} else {
    		$(".link").css("color", "white");
    	}
	});
});