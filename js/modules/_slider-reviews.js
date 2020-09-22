
 function sliderReview() {
  $('.slider-reviews').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span class="slick-prev"><img src="https://images.bestcompany.com/left-slider-arrow@2x.png"></span>',
    nextArrow:'<span class="slick-next"><img src="https://images.bestcompany.com/right-slider-arrow@2x.png"></span>',
    speed: 700
  });
/*
  shortenReview()

  	function shortenReview () {
  		let review = $('.review-content'),
  				ellipses = '...',
  				maxLength = 165

  		review.each(function () {
  			let content = $(this).html()

  			if (content.length > maxLength) {
  				let shorterReview = $.trim(content).substr(0, maxLength) + ellipses

  				$(this).html(shorterReview)
  			}
  		})

  	}
    */
}

export default sliderReview;
