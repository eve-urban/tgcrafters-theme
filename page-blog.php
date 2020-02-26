<?php
/**
 * Template Name: Blog - display latests blogs
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['page'] = $post;
global $paged;
  if (!isset($paged) || !$paged){
    $paged = 1;
  }
$query_args = array(
   'post_type' => 'post',
   'posts_per_page' => 4,
   'category_name' => 'our-projects',
   'orderby' => 'date',
   'order' => 'DESC',
   'paged' => $paged
);
$query_posts = new WP_Query( $query_args );

$context['posts'] = new Timber\PostQuery( $query_args );


$context['recent_posts'] = $query_posts->posts;



Timber::render( 'page_templates/blog.twig', $context );
