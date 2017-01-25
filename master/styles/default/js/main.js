$(document).ready(function() {

	appSite.init();
});


var appSite = {
	init: function() {
		appSite.bindCustomScrollBars();
		appSite.bindSlickSlider();
	},
	bindCustomScrollBars: function () {
  		$("[data-custom-scroll]").mCustomScrollbar({
			live:true,
			theme:"rounded"
		});
	},
	bindSlickSlider: function () {
		$('[data-slick-slider]').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
			  	adaptiveHeight: true,
			  	prevArrow: '.potfolio-sites-previous',
			  	nextArrow: '.potfolio-sites-next',
			  	responsive: [
				    {
				      breakpoint: 1140,
				      settings: {
				        slidesToShow: 3,
				        slidesToScroll: 1
				      }
				    },
				  ]
		});
		$('[data-slick-slider-seo]').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			  	adaptiveHeight: true,
			  	prevArrow: '.potfolio-sites-seo-previous',
			  	nextArrow: '.potfolio-sites-seo-next',
		});
	},
};
