<?php
/**
 * Template Name: Home page
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;


// Enqueue vertical tabs.
function enqueue_scripts_home_page() {


    wp_enqueue_script(
        'vertical-tabs',
        get_stylesheet_directory_uri() . '/js/vertical-tabs.js',
        array(),
        wp_get_theme('tgcrafters')->get('Version'),
        true
    );



}
add_action('wp_enqueue_scripts', 'enqueue_scripts_home_page', 100);



Timber::render( 'page_templates/home.twig', $context );
