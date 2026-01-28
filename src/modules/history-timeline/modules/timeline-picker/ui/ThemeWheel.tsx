'use client'

import gsap from 'gsap'
import { useEffect, useMemo, useRef, useState } from 'react'

import { useHistoryTimeline } from '@/modules/history-timeline/lib/context'

import { degToRad, normalizeRad, radToDeg } from '../lib'
import styles from './ThemeWheel.module.scss'
import { ThemeWheelPoint } from './ThemeWheelPoint'

const TARGET_ANGLE = 30

export function ThemeWheel() {
	const { activeTimeline, setActiveTimelineId, timelines } =
		useHistoryTimeline()
	const timelinesCount = timelines.length
	const wheelRef = useRef<HTMLOListElement | null>(null)

	const logicalRadRotation = useRef(0)
	const visualDegRotation = useRef(0)

	const [activeIndex, setActiveIndex] = useState(
		Math.max(
			0,
			timelines.findIndex((t) => t.id === activeTimeline?.id),
		),
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

	useEffect(() => {
		if (!wheelRef.current || timelinesCount === 0) return

		const active = Math.max(
			0,
			timelines.findIndex((t) => t.id === activeTimeline?.id),
		)
		const pointRad = pointAngleFromTopRad(active)
		const targetScreenRad = degToRad(TARGET_ANGLE)
		const initialRotation = targetScreenRad - pointRad

		logicalRadRotation.current = initialRotation

		const initialDeg = radToDeg(initialRotation)
		visualDegRotation.current = initialDeg
		wheelRef.current.style.setProperty('--wheel-rotation', `${initialDeg}deg`)

		setActiveIndex(active)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (!activeTimeline || timelinesCount === 0 || !wheelRef.current) return

		const externalIndex = Math.max(
			0,
			timelines.findIndex((t) => t.id === activeTimeline.id),
		)
		if (externalIndex === activeIndex) return

		const pointRad = pointAngleFromTopRad(externalIndex)
		const targetScreenRad = degToRad(TARGET_ANGLE)
		const rotationTarget = targetScreenRad - pointRad

		const currentLogical = logicalRadRotation.current
		const delta = normalizeRad(rotationTarget - currentLogical)
		const nextRotation = currentLogical + delta

		logicalRadRotation.current = nextRotation
		setActiveIndex(externalIndex)

		const startDeg = visualDegRotation.current
		const endDeg = radToDeg(nextRotation)

		const proxy = { rotation: startDeg }

		gsap.killTweensOf(proxy)
		gsap.to(proxy, {
			duration: 0.9,
			ease: 'power3.inOut',
			onComplete: () => {
				visualDegRotation.current = endDeg
				wheelRef.current!.style.setProperty('--wheel-rotation', `${endDeg}deg`)
			},
			onUpdate: () => {
				const deg = proxy.rotation
				visualDegRotation.current = deg
				wheelRef.current!.style.setProperty('--wheel-rotation', `${deg}deg`)
			},
			rotation: endDeg,
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeTimeline?.id])

	function onSelect(index: number) {
		if (!wheelRef.current || timelinesCount === 0) return

		if (index === activeIndex) {
			const id = timelines[index].id
			setActiveTimelineId(id)
			setActiveIndex(index)
			return
		}

		const currentLogical = logicalRadRotation.current
		const pointRad = pointAngleFromTopRad(index)
		const targetScreenRad = degToRad(TARGET_ANGLE)
		const rotTarget = targetScreenRad - pointRad
		const delta = normalizeRad(rotTarget - currentLogical)
		const nextRotation = currentLogical + delta

		logicalRadRotation.current = nextRotation

		const id = timelines[index].id
		setActiveTimelineId(id)
		setActiveIndex(index)

		const startDeg = visualDegRotation.current
		const endDeg = radToDeg(nextRotation)

		const proxy = { rotation: startDeg }
		gsap.killTweensOf(proxy)
		gsap.to(proxy, {
			duration: 0.9,
			ease: 'power3.inOut',
			onComplete: () => {
				visualDegRotation.current = endDeg
				if (wheelRef.current) {
					wheelRef.current.style.setProperty('--wheel-rotation', `${endDeg}deg`)
				}
			},
			onUpdate: () => {
				const deg = proxy.rotation
				visualDegRotation.current = deg
				if (wheelRef.current) {
					wheelRef.current.style.setProperty('--wheel-rotation', `${deg}deg`)
				}
			},
			rotation: endDeg,
		})
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
							onSelect={() => onSelect(index)}
						/>
					</li>
				)
			})}
		</ol>
	)
}
