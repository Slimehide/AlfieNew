$(document).ready(function(){

	$(".scrollable__button").on("click" , function(e){
		e.preventDefault();
	});

	$(".after__info>a").on("click" , function(e){
		e.preventDefault();
		$('.popup__modal').fadeIn(400);
	});

	$(".package__button>a").on("click" , function(e){
		e.preventDefault();
		$('.popup__modal').fadeIn(400);
	});
	$('.inner__popup>a').on("click" , function(e){
		e.preventDefault();
		$('.popup__modal').fadeOut(400);
	});

	if ($(".services__slider").length) {
		$(".services__slider").slick({
			slidesToShow:2,
			centerMode:true,
			infinite:true,
			centerPadding: '180px',
			initialSlide:1,
			arrows:true
		});
	}

	$(".elem__stories>a").on("mouseenter", function(e){
		$(this).find("img").attr("src" , $(this).attr("data-active"));
	});	
	$(".elem__stories>a").on("mouseleave", function(e){
		$(this).find("img").attr("src" , $(this).attr("data-disable"));
	});	
	$(".top__button").on("click" ,function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: 0},1200);
	});
});