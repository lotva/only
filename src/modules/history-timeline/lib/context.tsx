'use client'

import { createContext, type ReactNode, use, useState } from 'react'

import { TIMELINES } from '../config/timelines'

interface IContext {
	activeTimeline: TTimeline
	setActiveTimelineId: (id: TTimelineId) => void
	timelines: TTimeline[]
}

type TTimeline = (typeof TIMELINES)[0]
type TTimelineId = string

const HistoryTimelineContext = createContext<IContext | null>(null)

export interface IProviderProps {
	children: ReactNode
	initialId?: TTimelineId
	timelines?: TTimeline[]
}

export function HistoryTimelineProvider({
	children,
	initialId = 'timeline-1',
	timelines = TIMELINES,
}: IProviderProps) {
	const [activeTimelineId, setActiveTimelineId] = useState(initialId)

	const activeTimeline =
		timelines.find((t) => t.id === activeTimelineId) ?? timelines[0]

	const value: IContext = {
		activeTimeline,
		setActiveTimelineId,
		timelines,
	}

	return (
		<HistoryTimelineContext.Provider value={value}>
			{children}
		</HistoryTimelineContext.Provider>
	)
}

export function useHistoryTimeline() {
	const context = use(HistoryTimelineContext)

	if (!context)
		throw new Error(
			'useHistoryTimeline must be used within a HistoryTimelineProvider',
		)

	return context
}
