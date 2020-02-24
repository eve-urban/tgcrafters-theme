function sliderInit() {

  let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;
  let sliderOneBg = document.querySelector("#slide1");
  let sliderTwoBg = document.querySelector("#slide2");
  let sliderThreeBg = document.querySelector("#slide3");
 let url = "url(" + sliderOneBg.dataset.bg + ")";
 console.log(url);
  console.log(sliderOneBg.dataset.bg);
// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
    sliderImages[i].classList.remove("active-slide");
    sliderImages[i].classList.add("inactive-slide");
    //console.log(sliderImages[i]);

  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
  sliderImages[0].classList.add("active-slide");
  sliderImages[0].classList.remove("inactive-slide");
  sliderImages[0].style.backgroundImage = "url(" + sliderOneBg.dataset.bg + ")";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  sliderImages[current - 1].classList.add("active-slide");
  sliderImages[current - 1].classList.remove("inactive-slide");



  if (sliderImages[current - 1].classList.contains('slide1')) {
    sliderImages[current - 1].style.backgroundImage = "url(" + sliderOneBg.dataset.bg + ")";
  } else if (sliderImages[current - 1].classList.contains('slide2')) {
    sliderImages[current - 1].style.backgroundImage = "url(" + sliderTwoBg.dataset.bg + ")";
  } else if (sliderImages[current - 1].classList.contains('slide3')) {
    sliderImages[current - 1].style.backgroundImage = "url(" + sliderThreeBg.dataset.bg + ")";
  }
  current--;

}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  sliderImages[current + 1].classList.add("active-slide");
  sliderImages[current + 1].classList.remove("inactive-slide");

  if (sliderImages[current + 1].classList.contains('slide1')) {
    sliderImages[current + 1].style.backgroundImage = "url(" + sliderOneBg.dataset.bg + ")";
  } else if (sliderImages[current + 1].classList.contains('slide2')) {
    sliderImages[current + 1].style.backgroundImage = "url(" + sliderTwoBg.dataset.bg + ")";
  } else if (sliderImages[current + 1].classList.contains('slide3')) {
    sliderImages[current + 1].style.backgroundImage = "url(" + sliderThreeBg.dataset.bg + ")";
  }
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

setInterval(function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
}, 10000);


}

export default sliderInit
