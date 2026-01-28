import type { Metadata, Viewport } from 'next'

import { GsapRuntime } from '@/core/layout/gsap'
import { Lenis } from '@/core/layout/lenis'
import { ReactTempus } from '@/core/layout/tempus'
import '@/core/styles/index.scss'

export const metadata: Metadata = {
	title: 'Исторические даты. Демо — GSAP',
}

export const viewport: Viewport = {
	colorScheme: 'normal',
	themeColor: '#5d5fef',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html dir="ltr" lang="ru">
			<head>
				<noscript>
					<style>
						{`
              [data-animate] { visibility: visible; }
            `}
					</style>
				</noscript>

				<link
					as="font"
					crossOrigin="anonymous"
					href="/fonts/pt-sans-regular.woff2"
					rel="preload"
					type="font/woff2"
				/>

				<link
					as="font"
					crossOrigin="anonymous"
					href="/fonts/pt-sans-bold.woff2"
					rel="preload"
					type="font/woff2"
				/>
			</head>

			<body>
				<GsapRuntime />

				{children}

				<Lenis options={{}} root syncScrollTrigger />
				<ReactTempus />
			</body>
		</html>
	)
}
