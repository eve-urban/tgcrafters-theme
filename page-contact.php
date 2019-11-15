<?php
/**
 * Template Name: Contact template
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['page'] = $post;
$context['hero_img'] = get_field('contact_banner_hero_image');
$context['contact_form_img'] = get_field('contact_form_bg');



/*
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

*/

Timber::render( 'page_templates/page-contact.twig', $context );
