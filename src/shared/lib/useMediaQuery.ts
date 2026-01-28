'use client'

import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
	const getMatches = () =>
		globalThis.window === undefined
			? false
			: globalThis.matchMedia(query).matches

	const [matches, setMatches] = useState(getMatches)

	useEffect(() => {
		const media = globalThis.matchMedia(query)
		const listener = () => setMatches(media.matches)

		media.addEventListener('change', listener)

		return () => media.removeEventListener('change', listener)
	}, [query])

	return matches
}
