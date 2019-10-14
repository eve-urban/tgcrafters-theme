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
