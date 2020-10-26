<?php



acf_add_local_field_group([
	'key' => 'group_services',
	'title' => 'Services',
	'fields' => [
		[
			'key' => 'field_service',
			'label' => 'Service',
			'name' => 'service',
			'type' => 'repeater',
			'required' => 0,
			'conditional_logic' => 0,
			'layout' => 'row',
			'sub_fields' => [
				[
					'key' => 'field_service_image',
					'label' => 'Service image',
					'name' => 'service_image',
					'type' => 'image',
					'return_format' => 'array',
					'preview_size' => 'thumbnail',
					'library' => 'all',

				],
				[
					'key' => 'field_service_header',
					'label' => 'Service header',
					'name' => 'service_header',
					'type' => 'text',
				],
				[
					'key' => 'field_service_link_page',
					'label' => 'Service link page',
					'name' => 'service_link_page',
					'type' => 'link',
					'return_format' => 'array',
				],
				[
					'key' => 'field_service_text',
					'label' => 'Service text',
					'name' => 'service_text',
					'type' => 'wysiwyg',
					'tabs' => 'all',
					'toolbar' => 'full',
					'media_upload' => 1,

				],
			],
		],
		[
			'key' => 'key_product_slider',
			'label' => 'Product slider',
			'name' => 'product_slider_group',
			'type' => 'repeater',
			'instructions' => '',
			'layout' => 'table',
			'sub_fields' => [
				[
					'key' => 'product_slider_image_key',
					'label' => 'Product Slider Image',
					'name' => 'product_slider',
					'type' => 'image',
					'instructions' => '',
					'return_format' => 'array',
					'preview_size' => 'medium',
				],
				[
					'key' => 'product_slider_text_key',
					'label' => 'Button label',
					'name' => 'product_label',
					'type' => 'text',
					'instructions' => '',
				],
				[
					'key' => 'product_slider_link_key',
					'label' => 'url',
					'name' => 'product_link',
					'type' => 'link',
					'instructions' => '',
				],
			],
		],
	],
	'location' => [
		[
			[
				'param' => 'options_page',
				'operator' => '==',
				'value' => 'theme-general-settings',
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
