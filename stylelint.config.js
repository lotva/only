const config = {
	extends: [
		'stylelint-config-recommended',
		'stylelint-config-standard-scss',
		'stylelint-config-clean-order',
	],

	rules: {
		'custom-property-pattern': null,

		'declaration-property-value-no-unknown': null,

		'no-descending-specificity': [true, { severity: 'warning' }],

		'order/order': [
			[
				'custom-properties',
				{ name: 'mixin', type: 'at-rule' },
				'declarations',
				'at-rules',
				{ hasBlock: true, name: 'media', type: 'at-rule' },
				'rules',
			],
		],

		'rule-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
			},
		],
		'selector-class-pattern': null,
	},
}

export default config
