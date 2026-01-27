import type { Metadata } from 'next'

import '@/shared/ui/styles/index.scss'

export const metadata: Metadata = {
	title: 'Исторические даты. Демо — GSAP',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body>{children}</body>
		</html>
	)
}
