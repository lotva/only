import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { RefObject } from 'react'

import { fadeUpTimeline } from './fadeUp.timeline'

type UseFadeUpOnViewOptions = {
	delay?: number
	once?: boolean
	selector?: string
	start?: string
}

export function useFadeUpOnView(
	containerRef: RefObject<HTMLElement | null>,
	{
		delay = 0,
		once = true,
		selector = '[data-animate]',
		start = 'top 80%',
	}: UseFadeUpOnViewOptions = {},
) {
	useGSAP(
		() => {
			if (!containerRef.current) return

			const elements = [
				...containerRef.current.querySelectorAll<HTMLElement>(selector),
			]

			if (elements.length === 0) return

			const tl = fadeUpTimeline(elements)

			tl.delay(delay)

			ScrollTrigger.create({
				animation: tl,
				once,
				start,
				trigger: containerRef.current,
			})
		},
		{ scope: containerRef },
	)
}
