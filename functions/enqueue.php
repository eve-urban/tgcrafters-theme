<?php

function wpb_add_google_fonts() {
  wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css?family=Lato:300,400,700|Raleway:300,400,700,800', false );
}

add_action( 'wp_enqueue_scripts', 'wpb_add_google_fonts' );


function wpb_adding_scripts() {

  wp_enqueue_script(
      'vertical-tabs',
      get_stylesheet_directory_uri() . '/dist/build.js',
      array('jquery-cdn'),
      wp_get_theme('tgcrafters')->get('Version'),
      true
  );


  wp_enqueue_script('jquery-cdn', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js', array(), null, true);

}

add_action( 'wp_enqueue_scripts', 'wpb_adding_scripts' );
