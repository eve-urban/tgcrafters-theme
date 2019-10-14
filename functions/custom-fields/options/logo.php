<?php


acf_add_local_field_group([
	'key' => 'group_logo_image',
	'title' => __('Logo', 'tgcrafters'),
	'fields' => [
		[
			'key' => 'field_header_logo_image',
			'label' => __('Header logo image', 'tgcrafters'),
			'name' => 'header_logo_image',
			'type' => 'image',

			'preview_size' => 'thumbnail',

		],
		[
			'key' => 'field_header_mail_icon',
			'label' => __('Mail Icon', 'tgcrafters'),
			'name' => 'header_mail_icon',
			'type' => 'image',

			'preview_size' => 'thumbnail',

		],
		[
			'key' => 'field_header_phone_icon',
			'label' => __('Phone icon', 'tgcrafters'),
			'name' => 'header_phone_icon',
			'type' => 'image',

			'preview_size' => 'thumbnail',

		],
	],
	'location' => [
		[
			[
				'param' => 'options_page',
				'operator' => '==',
				'value' => 'acf-options-header',
			]
		]
	],

	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'active' => true,

]);
