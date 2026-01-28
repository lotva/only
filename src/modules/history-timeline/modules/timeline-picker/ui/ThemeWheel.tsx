'use client'

import gsap from 'gsap'
import { useEffect, useEffectEvent, useMemo, useRef } from 'react'

import { useHistoryTimeline } from '@/modules/history-timeline/lib/context'

import { degToRad, normalizeRad, radToDeg } from '../lib'
import styles from './ThemeWheel.module.scss'
import { ThemeWheelPoint } from './ThemeWheelPoint'

const TARGET_ANGLE = 30
const ANIMATION_DURATION = 0.9
const ANIMATION_EASE = 'power3.inOut'

export function ThemeWheel() {
	const { activeTimeline, setActiveTimelineId, timelines } =
		useHistoryTimeline()
	const timelinesCount = timelines.length
	const wheelRef = useRef<HTMLOListElement | null>(null)

	const logicalRadRotation = useRef(0)
	const visualDegRotation = useRef(0)

	const activeIndex = Math.max(
		0,
		timelines.findIndex((t) => t.id === activeTimeline?.id),
	)

	const pointAnglesDeg = useMemo(() => {
		if (timelinesCount === 0) return []
		const first = 30
		const step = 360 / timelinesCount

		return Array.from({ length: timelinesCount }).map(
			(_, index) => (first + index * step) % 360,
		)
	}, [timelinesCount])

	const pointAngleFromTopRad = (index: number) =>
		degToRad(pointAnglesDeg[index % pointAnglesDeg.length] ?? 0)

	const getTargetRotation = (index: number) => {
		const pointRad = pointAngleFromTopRad(index)
		const targetScreenRad = degToRad(TARGET_ANGLE)
		return targetScreenRad - pointRad
	}

	const animateToTarget = useEffectEvent((targetIndex: number) => {
		if (!wheelRef.current || timelinesCount === 0) return

		const targetRotation = getTargetRotation(targetIndex)
		const currentLogical = logicalRadRotation.current
		const delta = normalizeRad(targetRotation - currentLogical)
		const nextRotation = currentLogical + delta

		logicalRadRotation.current = nextRotation

		const startDeg = visualDegRotation.current
		const endDeg = radToDeg(nextRotation)

		const proxy = { rotation: startDeg }
		gsap.killTweensOf(proxy)

		gsap.to(proxy, {
			duration: ANIMATION_DURATION,
			ease: ANIMATION_EASE,
			onComplete: () => {
				visualDegRotation.current = endDeg
				wheelRef.current?.style.setProperty('--wheel-rotation', `${endDeg}deg`)
			},
			onUpdate: () => {
				const deg = proxy.rotation
				visualDegRotation.current = deg
				wheelRef.current?.style.setProperty('--wheel-rotation', `${deg}deg`)
			},
			rotation: endDeg,
		})
	})

	useEffect(() => {
		if (!wheelRef.current || timelinesCount === 0) return

		const initialRotation = getTargetRotation(activeIndex)
		logicalRadRotation.current = initialRotation

		const initialDeg = radToDeg(initialRotation)
		visualDegRotation.current = initialDeg
		wheelRef.current.style.setProperty('--wheel-rotation', `${initialDeg}deg`)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (
			logicalRadRotation.current === null ||
			visualDegRotation.current === null
		) {
			return
		}

		animateToTarget(activeIndex)
	}, [activeIndex])

	const handleSelect = (index: number) => {
		if (index === activeIndex) return

		setActiveTimelineId(timelines[index].id)
	}

	if (timelinesCount === 0) return null

	return (
		<ol className={styles.wheel} ref={wheelRef}>
			{timelines.map((timeline, index) => {
				const isActive = index === activeIndex
				const angle = 270 + pointAnglesDeg[index]

				return (
					<li
						className={styles.item}
						key={timeline.id}
						style={{
							['--point-rotation' as string]: `${angle}deg`,
							rotate: `${angle}deg`,
						}}
					>
						<ThemeWheelPoint
							active={isActive}
							index={index}
							label={timeline.theme}
							onSelect={() => handleSelect(index)}
						/>
					</li>
				)
			})}
		</ol>
	)
}
