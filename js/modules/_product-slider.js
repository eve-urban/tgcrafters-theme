function productSlider() {
  $(document).ready(function(){

  $('.promotionalslider_wrapper').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
      }
    ]
  });
});


}

export default productSlider;
