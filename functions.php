<?php

include 'functions/enqueue.php';
include 'functions/add_options_page.php';
include 'theme_options.php';
include 'functions/enable-svg.php';
include 'functions/custom-image-sizes.php';



//Load custom fields
require_once('functions/custom-fields/options/general.php');
require_once('functions/custom-fields/options/logo.php');
require_once('functions/custom-fields/options/footer.php');

require_once('functions/custom-fields/field-groups.php') ;

// Check for Timber
if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
		echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php') ) . '</a></p></div>';
	});

	add_filter('template_include', function($template) {
		return get_stylesheet_directory() . '/static/no-timber.html';
	});

	return;
}

// Define paths to Twig templates

Timber::$dirname = array(
	'views',
	'templates'
);

// Define TimeberSite Child Class
class BootsmoothSite extends TimberSite {

	function __construct() {

		// Enable theme support for core WP functionality
		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'menus' );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );

		parent::__construct();
	}

	function register_post_types() {
		//this is where you can register custom post types
	}

	function register_taxonomies() {
		//this is where you can register custom taxonomies
	}

	// register custom context variables
	function add_to_context( $context ) {
		$context['menu'] = new TimberMenu('primary');
		$context['secondary_menu'] = new TimberMenu('secondary');
		$context['footer_menu'] = new TimberMenu('footer');
		$context['site'] = $this;
		$context['sidebar_widgets'] = Timber::get_widgets( 'Sidebar' );
		$context['banner_widgets'] = Timber::get_widgets( 'Banner' );
		$context['footer_widgets'] = Timber::get_widgets( 'Footer' );
		$context['logo_heading'] = get_field('header_logo_image');
		$context['options'] = get_fields('options');

		return custom_context_options($context);
	}

	function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	function add_to_twig( $twig ) {
		/* this is where you can add your own functions to twig */
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter('myfoo', new Twig_SimpleFilter('myfoo', array($this, 'myfoo')));
		return $twig;
	}
}

new BootsmoothSite();

// include shortcodes
include 'shortcodes.php';

function register_theme_features() {
	// Register widget areas
	if ( function_exists('register_sidebar') ) {
		register_sidebar(array(
			'name' => 'Sidebar',
			'before_widget' => '<div class="sidebar-widget">',
			'after_widget' => '</div>',
			'before_title' => '<h5 class="usa-heading-alt">',
			'after_title' => '</h5>',
			)
		);

		register_sidebar(array(
			'name' => 'Banner',
			'before_widget' => '<div class="banner-widget">',
			'after_widget' => '</div>',
			'before_title' => '<div>',
			'after_title' => '</div>',
			)
		);

		register_sidebar(array(
			'name' => 'Footer',
			'before_widget' => '<div class="footer-widget">',
			'after_widget' => '</div>',
			'before_title' => '<div>',
			'after_title' => '</div>',
			)
		);
	}

	// Register navigation menus
	register_nav_menus(
		array(
			'primary' => __( 'Primary Menu' ),
			'secondary' => __( 'Secondary Menu' ),
			'footer' => __( 'Foorter Menu' )
		)
	);
}
add_action( 'init', 'register_theme_features' );


function defer_parsing_of_js( $url ) {
    if ( is_user_logged_in() ) return $url; //don't break WP Admin
    if ( FALSE === strpos( $url, '.js' ) ) return $url;
    if ( strpos( $url, 'jquery.js' ) ) return $url;
    return str_replace( ' src', ' defer src', $url );
}
add_filter( 'script_loader_tag', 'defer_parsing_of_js', 10 );
