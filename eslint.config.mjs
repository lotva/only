import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import perfectionist from 'eslint-plugin-perfectionist'
import unicorn from 'eslint-plugin-unicorn'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,

	perfectionist.configs['recommended-natural'],
	unicorn.configs['all'],

	{
		rules: {
			'unicorn/filename-case': 'off',
			'unicorn/no-keyword-prefix': 'off',
			'unicorn/no-null': 'off',
			'unicorn/prevent-abbreviations': [
				'warn',
				{
					replacements: {
						props: false,
						ref: false,
					},
				},
			],
		},
	},

	globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])

export default eslintConfig
