<?php

function wpb_add_google_fonts() {
  wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css?family=Lato:300,400,700|Raleway:300,400,700,800', false );
}

add_action( 'wp_enqueue_scripts', 'wpb_add_google_fonts' );


function wpb_adding_scripts() {

  wp_enqueue_script(
      'popper',
      'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/popper.min.js',
      array('jquery-cdn'),
      wp_get_theme('tgcrafters')->get('Version'),
      true
  );

  wp_enqueue_script(
      'bootstrap-min-js',
      'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js',
      array('jquery-cdn'),
      wp_get_theme('tgcrafters')->get('Version'),
      true
  );

  wp_enqueue_script(
      'slick',
      'https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js',
      array('jquery-cdn'),
      wp_get_theme('tgcrafters')->get('Version'),
      true
  );
  wp_enqueue_script(
      'fancybox',
      'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js',
      array('jquery-cdn'),
      wp_get_theme('tgcrafters')->get('Version'),
      true
  );


  wp_enqueue_script(
      'main-script',
      get_stylesheet_directory_uri() . '/dist/build-min/build-min.js',
      array('jquery-cdn'),
      wp_get_theme('tgcrafters')->get('Version'),
      true
  );



  wp_enqueue_script('jquery-cdn', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js', array(), null, true);

}

add_action( 'wp_enqueue_scripts', 'wpb_adding_scripts' );
