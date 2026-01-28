'use client'

import { useHistoryTimeline } from '@/modules/history-timeline/lib/context'
import { cn } from '@/shared/lib/cn'
import { UiButton } from '@/shared/ui/button/UiButton'

import { IconNavigatorArrow } from './IconNavigatorArrow'
import { IconNavigatorArrowSmall } from './IconNavigatorArrowSmall'
import styles from './TimelineNavigator.module.scss'

export function TimelineNavigator({ className }: { className?: string }) {
	const { activeTimeline, setActiveTimelineId, timelines } =
		useHistoryTimeline()

	const currentIndex = timelines.findIndex((t) => t.id === activeTimeline.id)

	const hasPrevious = currentIndex > 0
	const hasNext = currentIndex < timelines.length - 1

	const handlePrevious = () => {
		if (!hasPrevious) return
		const previousTimeline = timelines[currentIndex - 1]
		setActiveTimelineId(previousTimeline.id)
	}

	const handleNext = () => {
		if (!hasNext) return
		const nextTimeline = timelines[currentIndex + 1]
		setActiveTimelineId(nextTimeline.id)
	}

	return (
		<div
			aria-label="Навигация по отрезкам времени"
			className={cn(styles.navigator, className)}
		>
			<span aria-live="polite" className={styles.counter}>
				{String(currentIndex + 1).padStart(2, '0')}/
				{String(timelines.length).padStart(2, '0')}
			</span>

			<div className={styles.controls}>
				<UiButton
					aria-label="Перейти на предыдущий отрезок"
					className={styles.button}
					disabled={!hasPrevious}
					onClick={handlePrevious}
					theme="default"
				>
					<IconNavigatorArrow className={styles.icon} />
					<IconNavigatorArrowSmall className={styles.smallIcon} />
				</UiButton>

				<UiButton
					aria-label="Перейти на следующий отрезок"
					className={cn(styles.button, styles.next)}
					disabled={!hasNext}
					onClick={handleNext}
					theme="default"
				>
					<IconNavigatorArrow className={styles.icon} />
					<IconNavigatorArrowSmall className={styles.smallIcon} />
				</UiButton>
			</div>
		</div>
	)
}
