import { HistoryTimeline } from '@/modules/history-timeline'

import styles from './index.module.scss'

export function IndexPage() {
	return (
		<main className={styles.page}>
			<HistoryTimeline />
		</main>
	)
}
