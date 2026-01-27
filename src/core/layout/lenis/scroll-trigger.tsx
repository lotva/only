import gsap from 'gsap'
import { ScrollTrigger as GSAPScrollTrigger } from 'gsap/all'
import { useLenis } from 'lenis/react'
import { useEffect, useEffectEvent } from 'react'

if (globalThis.window !== undefined) {
	gsap.registerPlugin(GSAPScrollTrigger)
}

/**
 * Syncs GSAP ScrollTrigger with Lenis scroll position.
 * Must be rendered inside ReactLenis context.
 */
export function LenisScrollTriggerSync() {
	useEffect(() => {
		GSAPScrollTrigger.update()
	}, [])

	const handleUpdate = useEffectEvent(() => {
		GSAPScrollTrigger.update()
	})

	const handleRefresh = useEffectEvent(() => {
		GSAPScrollTrigger.refresh()
	})

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const lenis = useLenis(handleUpdate)

	useEffect(() => {
		if (lenis) {
			handleRefresh()
		}
	}, [lenis])

	return null
}
