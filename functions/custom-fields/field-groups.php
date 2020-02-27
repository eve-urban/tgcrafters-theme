<?php

acf_add_local_field_group([
	'key' => 'group_slider content',
	'title' => 'Edit Slider content',
	'fields' => [
		[
			'key' => 'field_slider_content',
			'label' => 'Slider content',
			'name' => 'slider_content',
			'type' => 'repeater',
			'instructions' => '',
			'layout' => 'table',
			'sub_fields' => [
				[
					'key' => 'field_slider_image',
					'label' => 'Slider image',
					'name' => 'slider_image',
					'type' => 'image',
					'instructions' => '',
					'return_format' => 'array',
					'preview_size' => 'medium',
				],
				[
					'key' => 'field_slider_text',
					'label' => 'Slider text content',
					'name' => 'slider_text',
					'type' => 'wysiwyg',
					'instructions' => '',
				],
				[
					'key' => 'field_slider_btn_url',
					'label' => 'Slider button url',
					'name' => 'slider_btn_url',
					'type' => 'url',
					'instructions' => '',
				],
				[
					'key' => 'field_slider_button_label',
					'label' => 'Slider button label',
					'name' => 'slider_button_label',
					'type' => 'text',
					'instructions' => '',
				],
			],
		],
		[
			'key' => 'services_heading_home',
			'label' => 'Services heading',
			'name' => 'services_heading_home',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
		],
		[
			'key' => 'services_intro_home',
			'label' => 'Services intro',
			'name' => 'services_intro_home',
			'type' => 'wysiwyg',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
		],
	],
	'location' => [
		[
			[
				'param' => 'page_template',
				'operator' => '==',
				'value' => 'page-home.php',
			],
		],
	],
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
]);


acf_add_local_field_group([
	'key' => 'general_services_field_group',
	'title' => 'General Services Fields',
	'fields' => [

		 [
			'key' => 'key_banner_hero_image',
			'label' => 'Banner hero image',
			'name' => 'banner_hero_image',
			'type' => 'image',
			'instructions' => '',
			'return_format' => 'array',
			'preview_size' => 'medium',
		],

		[
			'key' => 'key_h1_heading',
			'label' => 'H1 heading',
			'name' => 'h1_heading',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
		],

		[
			'key' => 'key_intro_paragraph',
			'label' => 'Intro paragraph',
			'name' => 'intro_paragraph',
			'type' => 'wysiwyg',
			'instructions' => '',

		],
		[
			'key' => 'key_main_text',
			'label' => 'Main text',
			'name' => 'main_text',
			'type' => 'wysiwyg',
			'instructions' => '',

		 ],
		 [
			'default_value' => '',
			'tabs' => 'all',
			'toolbar' => 'full',
			'media_upload' => 1,
			'delay' => 0,
		],
	],
	'location' => [
		[
			[
				'param' => 'page_template',
				'operator' => '==',
				'value' => 'page-services-general.php',
			],
		],
	],
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'left',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
]);


acf_add_local_field_group([
	'key' => 'contact_template_field_group',
	'title' => 'Contact Fields',
	'fields' => [

		 [
			'key' => 'key_contact_banner_hero_image',
			'label' => 'Banner hero image',
			'name' => 'contact_banner_hero_image',
			'type' => 'image',
			'instructions' => '',
			'return_format' => 'array',
			'preview_size' => 'medium',
		],
		[
		 'key' => 'key_contact_form_bg',
		 'label' => 'Contact form bg',
		 'name' => 'contact_form_bg',
		 'type' => 'image',
		 'instructions' => '',
		 'return_format' => 'array',
		 'preview_size' => 'medium',
	 ],


		[
			'key' => 'key_contact_intro_paragraph',
			'label' => 'Intro paragraph',
			'name' => 'contact_intro_paragraph',
			'type' => 'wysiwyg',
			'instructions' => '',

		],
		 [
			'default_value' => '',
			'tabs' => 'all',
			'toolbar' => 'full',
			'media_upload' => 1,
			'delay' => 0,
		],
	],
	'location' => [
		[
			[
				'param' => 'page_template',
				'operator' => '==',
				'value' => 'page-contact.php',
			],
		],
	],
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'left',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
]);


acf_add_local_field_group([
	'key' => 'quote_template_field_group',
	'title' => 'Contact Fields',
	'fields' => [

		 [
			'key' => 'key_quote_banner_hero_image',
			'label' => 'Banner hero image',
			'name' => 'quote_banner_hero_image',
			'type' => 'image',
			'instructions' => '',
			'return_format' => 'array',
			'preview_size' => 'medium',
		],
		[
		 'key' => 'key_quote_form_bg',
		 'label' => 'Quote form bg',
		 'name' => 'quote_form_bg',
		 'type' => 'image',
		 'instructions' => '',
		 'return_format' => 'array',
		 'preview_size' => 'medium',
	 ],


		[
			'key' => 'key_quote_intro_paragraph',
			'label' => 'Intro paragraph',
			'name' => 'quote_intro_paragraph',
			'type' => 'wysiwyg',
			'instructions' => '',

		],
		 [
			'default_value' => '',
			'tabs' => 'all',
			'toolbar' => 'full',
			'media_upload' => 1,
			'delay' => 0,
		],
	],
	'location' => [
		[
			[
				'param' => 'page_template',
				'operator' => '==',
				'value' => 'page-quote.php',
			],
		],
	],
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'left',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
]);




acf_add_local_field_group([
	'key' => 'post_field_group',
	'title' => 'Post fields',
	'fields' => [
			[
			'key' => 'key_hero_image_cover',
			'label' => 'Hero image cover',
			'name' => 'hero_image_cover',
			'type' => 'image',
			'instructions' => '',
			'return_format' => 'array',
			'preview_size' => 'medium',
		 ],
		 [
			'key' => 'key_post_image_thumbnail',
			'label' => 'Post image thumbnail',
			'name' => 'post_image_thumbnail',
			'type' => 'image',
			'instructions' => '',
			'return_format' => 'array',
			'preview_size' => 'medium',
		],



	],
	'location' => [
		[
			[
				'param' => 'post_type',
				'operator' => '==',
				'value' => 'post',
			],
		],
	],
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'left',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
]);
