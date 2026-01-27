import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ['gsap', 'lenis'],
	},

	poweredByHeader: false,
	reactCompiler: true,

	turbopack: {
		rules: {
			'*.svg': {
				as: '*.js',
				loaders: [
					{
						loader: '@svgr/webpack',
						options: {
							dimensions: false,
							memo: true,
							svgoConfig: {
								multipass: true,
								plugins: [
									'removeDimensions',
									'removeOffCanvasPaths',
									'reusePaths',
									'removeElementsByAttr',
									'removeStyleElement',
									'removeScriptElement',
									'prefixIds',
									'cleanupIds',
									{
										name: 'cleanupNumericValues',
										params: {
											floatPrecision: 1,
										},
									},
									{
										name: 'convertPathData',
										params: {
											floatPrecision: 1,
										},
									},
									{
										name: 'convertTransform',
										params: {
											floatPrecision: 1,
										},
									},
									{
										name: 'cleanupListOfValues',
										params: {
											floatPrecision: 1,
										},
									},
								],
							},
						},
					},
				],
			},
		},
	},

	typedRoutes: true,
}

export default nextConfig
