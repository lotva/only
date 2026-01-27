import { HTMLAttributes } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './Title.module.scss'

export function Title({
	className,
	...props
}: HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1 {...props} className={cn(styles.title, className)}>
			Исторические даты
		</h1>
	)
}
