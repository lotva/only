'use client'

import { HTMLAttributes } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './TimelinePicker.module.scss'
import { Backdrop } from './ui/Backdrop'
import { Wheel } from './ui/Wheel'
import { Years } from './ui/Years'

export function TimelinePicker({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={cn(styles.root, className)}>
			<Backdrop />
			<Wheel />
			<Years />
		</div>
	)
}
