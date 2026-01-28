import { HTMLAttributes } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './Slider.module.scss'
import { Scroller } from './ui/Scroller'
import { TimelineNavigator } from './ui/TimelineNavigator'

export function Slider({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn(styles.slider, className)} {...props}>
			<TimelineNavigator className={styles.navigator} />
			<Scroller className={styles.scroller} />
		</div>
	)
}
