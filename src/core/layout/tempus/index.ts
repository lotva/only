/* eslint-disable react-hooks/refs, react-hooks/exhaustive-deps */

'use client'

import { useEffect, useRef } from 'react'
import Tempus, { TempusCallback, TempusOptions } from 'tempus'

export function ReactTempus({ patch = true }) {
	useEffect(() => {
		if (!Tempus || !patch) return

		Tempus.patch()
		return () => Tempus.unpatch()
	}, [patch])

	return null
}

export function useTempus(callback: TempusCallback, options: TempusOptions) {
	const callbackRef = useRef(callback)
	callbackRef.current = callback

	useEffect(() => {
		return Tempus.add((...arguments_) => {
			callbackRef.current(...arguments_)
		}, options)
	}, [JSON.stringify(options)])
}
