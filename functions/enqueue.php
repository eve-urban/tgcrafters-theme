<?php

function wpb_add_google_fonts() {
  wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css?family=Lato:300,400,700|Raleway:300,400,700,800', false );
}

add_action( 'wp_enqueue_scripts', 'wpb_add_google_fonts' );
