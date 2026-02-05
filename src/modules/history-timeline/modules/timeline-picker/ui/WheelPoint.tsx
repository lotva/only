import styles from './WheelPoint.module.scss'

export interface IProps {
	active?: boolean
	index: number
	label: string
	onSelect?: () => void
}

export function WheelPoint({ active = false, index, label, onSelect }: IProps) {
	return (
		<button
			aria-current={active ? 'step' : undefined}
			aria-label={`Переключиться на тему: ${label}`}
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
