import type { Metadata, Viewport } from 'next'

import { ReactTempus } from 'tempus/react'

import { GsapRuntime } from '@/core/layout/gsap'
import { Lenis } from '@/core/layout/lenis'
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
			<body>
				<ReactTempus />
				<GsapRuntime />

				{children}

				<Lenis options={{}} root syncScrollTrigger />
			</body>
		</html>
	)
}
