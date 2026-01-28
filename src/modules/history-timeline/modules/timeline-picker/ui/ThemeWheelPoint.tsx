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
			aria-pressed={active}
			className={styles.point}
			data-label={label}
			onClick={onSelect}
			type="button"
		>
			<span className={styles.text}>{index + 1}</span>
		</button>
	)
}
