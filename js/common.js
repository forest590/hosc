$(document).ready(function(){
	$(".toggle-menu").click(function(){
	$(this).toggleClass("on");
	$("nav").slideToggle();
	return false;
	});
});

$(document).ready(function(){
	$(".teachers__slider").bxSlider({
		slideWidth: 250,
		minSlides: 2,
		hideControlOnEnd: false,
		maxSlides: 3,
		pager: false,
		captions: true,
		nextText: "",
		prevText: "",
		slideMargin: 50
	});
});

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    	var id  = $(this).attr('href'),
          top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
  });
});