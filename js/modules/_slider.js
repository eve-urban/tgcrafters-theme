function sliderInit() {

  let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
    sliderImages[i].classList.remove("active-slide");
    sliderImages[i].classList.add("inactive-slide");


  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
  sliderImages[0].classList.add("active-slide");
  sliderImages[0].classList.remove("inactive-slide");

}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  sliderImages[current - 1].classList.add("active-slide");
  sliderImages[current - 1].classList.remove("inactive-slide");

  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  sliderImages[current + 1].classList.add("active-slide");
  sliderImages[current + 1].classList.remove("inactive-slide");

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
}, 5000);


}

export default sliderInit
