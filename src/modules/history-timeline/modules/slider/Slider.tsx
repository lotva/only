import { HTMLAttributes } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './Slider.module.scss'
import { PaginationDots } from './ui/PaginationDots'
import { Scroller } from './ui/Scroller'
import { TimelineNavigator } from './ui/TimelineNavigator'

export function Slider({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn(styles.slider, className)} {...props}>
			<div className={styles.navigation}>
				<TimelineNavigator />
				<PaginationDots className={styles.pagination} />
			</div>

			<Scroller className={styles.scroller} />
		</div>
	)
}
