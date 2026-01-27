import { ButtonHTMLAttributes } from 'react'

import { cn } from '@/shared/lib/cn'

import styles from './UiButton.module.scss'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isBusy?: boolean
	size?: TSize
	theme?: TTheme
}

type TSize = 'custom' | 'large' | 'medium' | 'small'
type TTheme = 'default' | 'primary'

export const UiButton = ({
	children,
	className,
	disabled,
	isBusy,
	size = 'custom',
	theme = 'primary',
	type = 'button',
	...props
}: IProps) => {
	return (
		<button
			aria-busy={isBusy}
			aria-live={isBusy ? 'polite' : 'off'}
			className={cn(
				styles.button,
				styles[`_${theme}`],
				styles[`_${size}`],
				className,
			)}
			disabled={isBusy || disabled}
			type={type}
			{...props}
		>
			{children}
		</button>
	)
}
