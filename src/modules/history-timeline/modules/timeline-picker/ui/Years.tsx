'use client'

import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

import { useHistoryTimeline } from '@/modules/history-timeline/lib/context'

import styles from './Years.module.scss'

const WHEEL_ROTATION_DURATION = 0.9
const EASE = 'power2.inOut'

export function Years() {
	const { activeTimeline } = useHistoryTimeline()
	const [displayFrom, setDisplayFrom] = useState(activeTimeline.from)
	const [displayTo, setDisplayTo] = useState(activeTimeline.to)
	const fromRef = useRef({ value: activeTimeline.from })
	const toRef = useRef({ value: activeTimeline.to })
	const tlRef = useRef<gsap.core.Timeline | null>(null)

	useEffect(() => {
		tlRef.current?.kill()
		const tl = gsap.timeline()
		tlRef.current = tl

		tl.to(fromRef.current, {
			duration: WHEEL_ROTATION_DURATION,
			ease: EASE,
			onUpdate: () => setDisplayFrom(fromRef.current.value),
			roundProps: 'value',
			value: activeTimeline.from,
		})

		tl.to(
			toRef.current,
			{
				duration: WHEEL_ROTATION_DURATION,
				ease: EASE,
				onUpdate: () => setDisplayTo(toRef.current.value),
				roundProps: 'value',
				value: activeTimeline.to,
			},
			0,
		)

		return () => {
			tl.kill()
		}
	}, [activeTimeline.from, activeTimeline.to, activeTimeline.id])

	return (
		<h2 aria-live="polite" className={styles.years}>
			<span className="visuallyHidden">Показан отрезок времени от:</span>
			<span className={styles.from}>{displayFrom}</span>
			<span className="visuallyHidden">до</span>
			<span className={styles.to}>{displayTo}</span>
		</h2>
	)
}
