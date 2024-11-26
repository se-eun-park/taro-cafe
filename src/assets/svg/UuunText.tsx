import type { SVGProps } from 'react'

interface SvgUuunTextProps extends SVGProps<SVGSVGElement> {
  fill?: string
}

const SvgUuunText = ({ fill = '#FF7', ...props }: SvgUuunTextProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 67 19' {...props}>
    <path
      fill={fill}
      d='M60.258 0c3.24 0 6.384 2.544 6.384 7.56v10.176c0 .336-.096.528-.48.528h-3.96c-.408 0-.528-.192-.528-.528l-.072-10.08c-.024-3.84-6.984-4.152-6.984-.096v10.248c0 .288-.072.456-.36.456H6.594c-3.24 0-6.408-2.52-6.408-7.536V.528C.186.192.282 0 .666 0H4.65c.384 0 .504.192.504.528l.072 10.104c.024 3.816 7.008 4.128 7.008.096V.456c0-.288.072-.456.384-.456z'
    />
  </svg>
)

export default SvgUuunText
