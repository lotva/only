import { HTMLAttributes } from 'react'

import styles from './Slider.module.scss'
import { Scroller } from './ui/Scroller'

export function Slider({ ...props }: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props}>
			<Scroller className={styles.scroller} />
		</div>
	)
}
