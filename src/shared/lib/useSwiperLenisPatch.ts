import { useEffect } from 'react'

/**
 * Fixes `transitionend` event property name issue in Swiper transitions.
 *
 * Some Swiper transitions trigger `transitionend` event without `propertyName` property.
 * This causes `can't access property "includes", propertyName is undefined` error in Lenis.
 *
 * This hook patches original `dispatchEvent` method to provide `propertyName` property
 * to `transitionend` event when it is missing.
 *
 * @example
 * ```tsx
 * import { useSwiperLenisPatch } from '@/shared/lib/useSwiperLenisPatch'
 *
 * export function ComponentUsingSwiper() {
 *   useSwiperLenisPatch()
 *
 *   return (
 *     <Swiper></Swiper>
 *   )
 * }
 * ```
 */
export function useSwiperLenisPatch() {
	useEffect(() => {
		const originalDispatch = EventTarget.prototype.dispatchEvent

		EventTarget.prototype.dispatchEvent = function (event: Event) {
			if (event.type === 'transitionend' && !('propertyName' in event)) {
				const transitionEvent = new TransitionEvent('transitionend', {
					bubbles: event.bubbles,
					cancelable: event.cancelable,
					elapsedTime: 0,
					propertyName: 'transform',
					pseudoElement: '',
				})

				if ('detail' in event) {
					Object.defineProperty(transitionEvent, 'detail', {
						value: (event as CustomEvent).detail,
						writable: false,
					})
				}

				return originalDispatch.call(this, transitionEvent)
			}

			return originalDispatch.call(this, event)
		}

		return () => {
			EventTarget.prototype.dispatchEvent = originalDispatch
		}
	}, [])
}
