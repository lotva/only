'use client'

import { useRef } from 'react'

import { Title } from '@/modules/history-timeline/ui/Title'
import { useFadeUpOnView } from '@/shared/effects/fade-up/useFadeUpOnView'
import { cn } from '@/shared/lib/cn'

import { HistoryTimelineProvider, IProviderProps } from '../lib/context'
import { Slider } from '../modules/slider'
import { TimelinePicker } from '../modules/timeline-picker'
import styles from './HistoryTimeline.module.scss'

interface IProps extends Omit<IProviderProps, 'children'> {
	modifier?: 'alternate' | 'default'
}

export function HistoryTimeline({ modifier = 'default', ...props }: IProps) {
	const ref = useRef<HTMLDivElement>(null)

	useFadeUpOnView(ref, { delay: modifier === 'alternate' ? 0.2 : 0 })

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
				<Slider data-animate data-delay="0.3" />
			</section>
		</HistoryTimelineProvider>
	)
}
