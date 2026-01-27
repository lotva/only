'use client'

import type { LenisOptions } from 'lenis'

import 'lenis/dist/lenis.css'
import type { LenisRef, LenisProps as ReactLenisProps } from 'lenis/react'

import { ReactLenis } from 'lenis/react'
import { useRef } from 'react'
import { useTempus } from 'tempus/react'

import { LenisScrollTriggerSync } from './scroll-trigger'

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
			}}
			ref={lenisReference}
			root={root}
		>
			{syncScrollTrigger && root && <LenisScrollTriggerSync />}
		</ReactLenis>
	)
}
