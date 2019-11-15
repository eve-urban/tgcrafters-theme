<?php

acf_add_local_field_group([
	'key' => 'group_footer_fields',
	'title' => 'Footer fields',
	'fields' => [
		[
			'key' => 'field_footer_quote',
			'label' => 'Quote',
			'name' => 'footer_quote',
			'type' => 'text',
		],
    [
			'key' => 'field_about_us_header',
			'label' => 'About Us Header',
			'name' => 'about_us_header',
			'type' => 'text',
			'instructions' => '',
		],
		[
			'key' => 'field_about_footer',
			'label' => 'About us',
			'name' => 'about_us_footer',
			'type' => 'wysiwyg',
			'tabs' => 'all',
			'toolbar' => 'full',
			'media_upload' => 1,
		],
    [
      'key' => 'field_quick_quote_form_header',
      'label' => 'Quick Quote Form Header',
      'name' => 'quick_quote_form_header',
      'type' => 'text',
      'instructions' => '',
    ],
		[
			'key' => 'field_quick_quote_form',
			'name' => 'quick_quote_form',
			'type' => 'wysiwyg',
			'required' => 0,
			'conditional_logic' => 0,
			'tabs' => 'all',
			'toolbar' => 'full',
			'media_upload' => 1,
			'delay' => 0,
		],
		[
			'key' => 'field_contact_header',
			'label' => 'Contact Header',
			'name' => 'contact_header',
			'type' => 'text',
			'instructions' => '',
		],
		[
			'key' => 'field_5dca990495cc7',
			'label' => 'Menu header',
			'name' => 'menu_header',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
		],
	],
	'location' => [
		[
			[
				'param' => 'options_page',
				'operator' => '==',
				'value' => 'acf-options-footer',
			],
		],
  ],
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'left',
	'instruction_placement' => 'label',
	'active' => true,
]);
