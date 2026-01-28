import type { SVGProps } from 'react'

type TSvgProps = SVGProps<SVGSVGElement>

export const IconNavigatorArrow = (props: TSvgProps) => (
	<svg
		fill="none"
		height="14"
		viewBox="0 0 9 14"
		width="9"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M7.66418 0.707108L1.41419 6.95711L7.66418 13.2071"
			stroke="currentColor"
			strokeWidth="2"
		/>
	</svg>
)
