import gsap from 'gsap'

type FadeUpOptions = {
	delay?: number
	duration?: number
	ease?: string
	y?: number
}

export function fadeUp(
	element: HTMLElement,
	{ delay = 0, duration = 0.5, ease = 'power2.out', y = 4 }: FadeUpOptions = {},
) {
	return gsap.fromTo(
		element,
		{
			autoAlpha: 0,
			y,
		},
		{
			autoAlpha: 1,
			delay,
			duration,
			ease,
			y: 0,
		},
	)
}
