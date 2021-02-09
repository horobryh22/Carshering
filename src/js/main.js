$(function(){

	$('.top_slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		fade: true,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				dots: false,
			  }
			},
		]
	});

	$('.reviews_slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1150,
			  settings: {
				slidesToShow: 0.75,
				slidesToScroll: 0.75,
			  },
			},
			{
				breakpoint: 880,
				settings: {
				  slidesToShow: 0.5,
				  slidesToScroll: 0.5,
				},
			  },
		]
	});

	$('.menu_btn').on('click', function(){
		$('.menu_list').toggleClass('menu_list--active');
	});
	 
});

