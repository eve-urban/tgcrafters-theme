function galleryProduct() {
  /*--------------*/



  // Main/Product image slider for product page
  $('#detail .main-img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    fade:true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 300,
    lazyLoad: 'ondemand',
    asNavFor: '.thumb-nav',
    prevArrow: '<div class="slick-prev"><img src="/wp-content/themes/tgcrafters-theme/img/previous-arrow.png"></div>',
    nextArrow: '<div class="slick-next"><img src="/wp-content/themes/tgcrafters-theme/img/next-arrow.png"></div>'
  });
  // Thumbnail/alternates slider for product page
  $('.thumb-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    centerPadding: '0px',
    asNavFor: '.main-img-slider',
    dots: false,
    centerMode: false,
    draggable: true,
    speed:200,
    focusOnSelect: true,
    prevArrow: '',
    nextArrow: ''
  });


  //keeps thumbnails active when changing main image, via mouse/touch drag/swipe
  $('.main-img-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    //remove all active class
    $('.thumb-nav .slick-slide').removeClass('slick-current');
    //set active class for current slide
    $('.thumb-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');
  });
}


export default galleryProduct;
