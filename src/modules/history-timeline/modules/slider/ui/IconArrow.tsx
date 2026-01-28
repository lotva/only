import type { SVGProps } from 'react'

type TSvgProps = SVGProps<SVGSVGElement>

export const IconArrow = (props: TSvgProps) => (
	<svg
		fill="none"
		height="12"
		viewBox="0 0 8 12"
		width="8"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M0.707092 0.707093L5.70709 5.70709L0.707093 10.7071"
			stroke="currentColor"
			strokeWidth="2"
		/>
	</svg>
)
