import type { SVGProps } from 'react'

type TSvgProps = SVGProps<SVGSVGElement>

export const IconNavigatorArrowSmall = (props: TSvgProps) => (
	<svg
		fill="none"
		height="8"
		viewBox="0 0 6 8"
		width="6"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M4.53918 0.707093L1.41418 3.83209L4.53918 6.95709"
			stroke="currentColor"
			strokeWidth="2"
		/>
	</svg>
)
