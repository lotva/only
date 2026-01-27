'use client'

import type { LenisOptions } from 'lenis'

import 'lenis/dist/lenis.css'
import type { LenisRef, LenisProps as ReactLenisProps } from 'lenis/react'

import { ReactLenis } from 'lenis/react'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { useTempus } from 'tempus/react'

const LenisScrollTriggerSync = dynamic(
	() =>
		import('./scroll-trigger').then(
			(module_) => module_.LenisScrollTriggerSync,
		),
	{
		ssr: false,
	},
)

interface LenisProps extends Omit<ReactLenisProps, 'ref'> {
	options: LenisOptions
	root: boolean
	syncScrollTrigger?: boolean
}

export function Lenis({
	options,
	root,
	syncScrollTrigger = false,
}: LenisProps) {
	const lenisReference = useRef<LenisRef>(null)

	useTempus((time: number) => {
		if (lenisReference.current?.lenis) {
			lenisReference.current.lenis.raf(time)
		}
	})

	return (
		<ReactLenis
			options={{
				...options,
				anchors: true,
				autoRaf: false,
				autoToggle: true,
				lerp: options?.lerp ?? 0.125,
				prevent: (node: Element | null) =>
					node?.nodeName === 'VERCEL-LIVE-FEEDBACK' ||
					node?.id === 'theatrejs-studio-root',
			}}
			ref={lenisReference}
			root={root}
		>
			{syncScrollTrigger && root && <LenisScrollTriggerSync />}
		</ReactLenis>
	)
}
