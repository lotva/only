'use client'

import { useRef } from 'react'

import { Title } from '@/modules/history-timeline/ui/Title'
import { useFadeUpOnView } from '@/shared/effects/fade-up/useFadeUpOnView'

export function HistoryTimeline() {
	const ref = useRef<HTMLDivElement>(null)

	useFadeUpOnView(ref)

	return (
		<section aria-labelledby="timeline-title" ref={ref}>
			<Title data-animate data-delay="0.2" id="timeline-title">
				Исторические даты
			</Title>
		</section>
	)
}
