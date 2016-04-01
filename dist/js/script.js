$(document).ready(function(){
	$("#intro").owlCarousel({
	    items: 1,
	    margin: 0,
	    loop: true,
	    autoplay: true,
	    autoplayHoverPause: true,
	    nav: true,
	    navText: ["<span class='chevron chevron-left'></span>","<span class='chevron chevron-right'></span>"]
	});
	$(".mobile-nav-trigger").on("click", function() {
		$(this).toggleClass("nav-open");
	});
	$(".twitter-switch").on("click", function() {
		$(this).closest(".twitter").toggleClass("twitter-open");
	});
	var twitterScroll = new IScroll(".twitter-scroll", {
		mouseWheel: true,
		scrollbars: true,
		interactiveScrollbars: true
	});
});