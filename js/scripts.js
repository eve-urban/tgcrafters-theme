// Main Javascipt Source
// Example class and DOMContentLoaded listener

import uswds from "../node_modules/uswds/src/js/start";
import accordion from "./modules/_accordion";
import sliderReview from "./modules/_slider-reviews";
import galleryProduct from "./modules/_gallery-product";
import productSlider from "./modules/_product-slider";

accordion();
sliderReview();
galleryProduct();
productSlider();



window.uswds = uswds;

class App {

	constructor(opts = {}) {
		console.log('Hello World!');
	}

};

// create new App object
let $bs = new App();
window.$bs = $bs;


// Main Javascipt Source
// Example class and DOMContentLoaded listener
