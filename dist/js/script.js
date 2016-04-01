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
});