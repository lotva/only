import { HistoryTimeline } from '@/modules/history-timeline'
import {
	TIMELINES,
	TIMELINES_ALTERNATE,
} from '@/modules/history-timeline/config/timelines'

import styles from './index.module.scss'

export function IndexPage() {
	return (
		<main className={styles.page}>
			<HistoryTimeline timelines={TIMELINES} />
			<HistoryTimeline modifier="alternate" timelines={TIMELINES_ALTERNATE} />
		</main>
	)
}
