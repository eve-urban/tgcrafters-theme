<?php
/**
 * Template Name: Product Page
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = new TimberPost();

$context['post'] = $post;
$context['main_gallery'] = get_field_object('key_gallery_main')['value'];
$context['fields'] = get_fields();
Timber::render( 'page-product.twig', $context );
