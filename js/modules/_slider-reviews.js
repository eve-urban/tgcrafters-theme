
 function sliderReview() {
  $('.slider-reviews').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"><img src="/wp-content/themes/tgcrafters-theme/img/previous-arrow.png"><div class="previous-word">previous</div></div>',
    nextArrow:'<div class="slick-next"><div class="next-word">next</div> <img src="/wp-content/themes/tgcrafters-theme/img/next-arrow.png"></div>',
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
