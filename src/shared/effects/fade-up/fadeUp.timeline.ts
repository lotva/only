import gsap from 'gsap'

import { fadeUp } from './fadeUp'

export function fadeUpTimeline(elements: HTMLElement[]) {
	const tl = gsap.timeline()

	for (const element of elements) {
		const delay = Number(element.dataset.delay ?? 0)

		tl.add(fadeUp(element, { delay }), 0)
	}

	return tl
}
