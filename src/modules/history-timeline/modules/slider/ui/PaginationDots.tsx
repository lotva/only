'use client'

import { useHistoryTimeline } from '@/modules/history-timeline/lib/context'
import { cn } from '@/shared/lib/cn'
import { UiButton } from '@/shared/ui/button/UiButton'

import styles from './PaginationDots.module.scss'

export function PaginationDots({ className }: { className?: string }) {
	const { activeTimeline, setActiveTimelineId, timelines } =
		useHistoryTimeline()

	return (
		<div
			aria-label="Пагинация таймлайнов"
			className={cn(styles.pagination, className)}
			role="group"
		>
			{timelines.map((timeline, index) => {
				const isActive = timeline.id === activeTimeline.id

				return (
					<UiButton
						aria-current={isActive ? 'step' : undefined}
						aria-label={`Таймлайн ${index + 1} из ${timelines.length}`}
						className={styles.dot}
						key={timeline.id}
						onClick={() => setActiveTimelineId(timeline.id)}
						theme="custom"
					/>
				)
			})}
		</div>
	)
}
