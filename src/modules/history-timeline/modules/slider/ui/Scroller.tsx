'use client'

import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useHistoryTimeline } from '@/modules/history-timeline/lib/context'
import { cn } from '@/shared/lib/cn'
import { useMediaQuery } from '@/shared/lib/useMediaQuery'
import { useSwiperLenisPatch } from '@/shared/lib/useSwiperLenisPatch'
import { UiButton } from '@/shared/ui/button/UiButton'

import { IconArrow } from './IconArrow'
import styles from './Scroller.module.scss'

export function Scroller({ className }: { className?: string }) {
	const { activeTimeline, timelines } = useHistoryTimeline()
	useSwiperLenisPatch()

	const rootRef = useRef<HTMLDivElement | null>(null)

	const [displayedId, setDisplayedId] = useState(() => activeTimeline.id)

	const requestedIdRef = useRef<string>(activeTimeline.id)
	const animatingRef = useRef(false)

	const displayedTimeline =
		timelines.find((t) => t.id === displayedId) ?? activeTimeline

	useEffect(() => {
		const element = rootRef.current

		if (activeTimeline.id === displayedId) {
			requestedIdRef.current = activeTimeline.id
			return
		}

		requestedIdRef.current = activeTimeline.id

		if (!element) {
			setDisplayedId(activeTimeline.id)
			return
		}

		gsap.killTweensOf(element)

		animatingRef.current = true
		gsap.to(element, {
			autoAlpha: 0,
			duration: 0.22,
			ease: 'power2.in',
			onComplete: () => {
				const targetId = requestedIdRef.current
				setDisplayedId(targetId)

				gsap.fromTo(
					element,
					{ autoAlpha: 0, y: 6 },
					{
						autoAlpha: 1,
						delay: 0.45,
						duration: 0.52,
						ease: 'power2.out',
						onComplete: () => {
							animatingRef.current = false
						},
						y: 0,
					},
				)
			},
			y: 6,
		})

		return () => {
			if (element) gsap.killTweensOf(element)
			animatingRef.current = false
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeTimeline.id])

	const isDesktop = useMediaQuery('(width >= 768px)')

	return (
		<div className={className} ref={rootRef} style={{ opacity: 1 }}>
			<Swiper
				className={styles.swiper}
				modules={[Navigation]}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-previous',
				}}
				slidesPerView="auto"
				spaceBetween={isDesktop ? 80 : 20}
			>
				{displayedTimeline.events.map((event) => (
					<SwiperSlide className={styles.slide} key={event.description}>
						<article className={styles.article}>
							<h3 className={styles.title}>{event.year}</h3>
							<p className={styles.description}>{event.description}</p>
						</article>
					</SwiperSlide>
				))}
			</Swiper>

			<UiButton
				aria-hidden
				className={cn(styles.previous, 'swiper-button-previous')}
			>
				<IconArrow />
			</UiButton>

			<UiButton aria-hidden className={cn(styles.next, 'swiper-button-next')}>
				<IconArrow />
			</UiButton>
		</div>
	)
}
