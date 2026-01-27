'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTempus } from 'tempus/react'

if (globalThis.window !== undefined) {
	gsap.defaults({ ease: 'none' })
	gsap.ticker.lagSmoothing(0)
	gsap.ticker.remove(gsap.updateRoot)
	gsap.registerPlugin(ScrollTrigger)
	gsap.registerPlugin(useGSAP)
}

/**
 * GSAP Runtime
 *
 * Syncs GSAP's ticker with Tempus frame loop for consistent timing.
 * ScrollTrigger sync is handled automatically by `<Lenis root />`.
 *
 * @example
 * ```tsx
 * // app/layout.tsx
 * import { GSAPRuntime } from '@/core/layout/gsap'
 *
 * <body>
 *   <GSAPRuntime />
 *   {children}
 * </body>
 * ```
 */
export function GsapRuntime() {
	useTempus((time) => {
		gsap.updateRoot(time / 1000)
	})

	return null
}
