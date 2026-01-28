'use client'

import { useRef } from 'react'

import { Title } from '@/modules/history-timeline/ui/Title'
import { useFadeUpOnView } from '@/shared/effects/fade-up/useFadeUpOnView'

import { HistoryTimelineProvider, IProviderProps } from '../lib/context'

interface IProps extends Omit<IProviderProps, 'children'> {}

export function HistoryTimeline({ ...props }: IProps) {
	const ref = useRef<HTMLDivElement>(null)

	useFadeUpOnView(ref)

	return (
		<HistoryTimelineProvider {...props}>
			<section aria-labelledby="timeline-title" ref={ref}>
				<Title data-animate data-delay="0.2" id="timeline-title">
					Исторические даты
				</Title>
			</section>
		</HistoryTimelineProvider>
	)
}
