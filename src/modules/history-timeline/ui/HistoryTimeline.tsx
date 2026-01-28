'use client'

import { useRef } from 'react'

import { Title } from '@/modules/history-timeline/ui/Title'
import { useFadeUpOnView } from '@/shared/effects/fade-up/useFadeUpOnView'
import { cn } from '@/shared/lib/cn'

import { HistoryTimelineProvider, IProviderProps } from '../lib/context'
import { TimelinePicker } from '../modules/timeline-picker/TimelinePicker'
import styles from './HistoryTimeline.module.scss'

interface IProps extends Omit<IProviderProps, 'children'> {
	modifier?: 'alternate' | 'default'
}

export function HistoryTimeline({ modifier = 'default', ...props }: IProps) {
	const ref = useRef<HTMLDivElement>(null)

	useFadeUpOnView(ref)

	return (
		<HistoryTimelineProvider {...props}>
			<section
				aria-labelledby="timeline-title"
				className={cn(styles.root, styles[`_${modifier}`])}
				ref={ref}
			>
				<Title data-animate data-delay="0.3" id="timeline-title">
					Исторические даты
				</Title>

				<TimelinePicker className={styles.picker} data-animate data-delay="0" />
			</section>
		</HistoryTimelineProvider>
	)
}
