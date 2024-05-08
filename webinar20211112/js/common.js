// JavaScript Document
$(document).ready(function() {
	// Flowting button hide
	var flowtingArea = $('.floating');
	var scrollStart = ($(window).height() / 2);
	var distance = 0;
	flowtingArea.hide();
	$(window).scroll(function() {
		distance = $(this).scrollTop();
		if (scrollStart >= distance) {
			flowtingArea.fadeOut();
		} else {
			flowtingArea.fadeIn();
		}
	});
	
	// Smooth scroll
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = "";
		position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
})
