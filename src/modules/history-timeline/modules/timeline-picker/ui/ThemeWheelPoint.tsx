import styles from './ThemeWheelPoint.module.scss'

export interface ThemeWheelPointProps {
	active?: boolean
	index: number
	label: string
	onSelect?: () => void
}

export function ThemeWheelPoint({
	active = false,
	index,
	label,
	onSelect,
}: ThemeWheelPointProps) {
	return (
		<button
			aria-current={active ? 'step' : undefined}
			aria-pressed={active}
			className={styles.point}
			onClick={onSelect}
			tabIndex={active ? -1 : 0}
			type="button"
		>
			<span className={styles.text} data-label={label}>
				{index + 1}
			</span>
		</button>
	)
}
