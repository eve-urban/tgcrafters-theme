<?php
/**
 * Supposed to display categories
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['page'] = $post;
Timber::render('page_templates/category.twig' );
