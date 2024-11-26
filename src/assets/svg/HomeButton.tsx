import type { SVGProps } from 'react'
import { useNavigate } from 'react-router-dom'

interface SvgHomeButtonProps extends SVGProps<SVGSVGElement> {
  text: string
  textSize: string
  navigate: string
}

const SvgHomeButton = ({ text, textSize, navigate, ...props }: SvgHomeButtonProps) => {
  const nav = useNavigate()
  const onClick = () => nav(navigate)
  const textSizeClass = textSize === 'lg' ? 'text-[80px]' : 'text-[40px]'
  return (
    <button onClick={onClick}>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' {...props}>
        <path
          fill='#fff'
          fillRule='evenodd'
          d='M706 175.163V.003H58.49c-1.361 0-1.676.745-1.676 2.126v28.19c0 18.71-32.087 17.329-32.19-.426l-.315-27.448C24.309.85 23.679 0 21.895 0H2.202C.418 0 0 .85 0 2.445l.078 175.161h647.431c1.362 0 1.677-.745 1.677-2.127v-27.598c0-18.71 32.087-17.329 32.19.426l.315 26.856c0 1.596.629 2.446 2.41 2.446h19.696c1.785 0 2.203-.85 2.203-2.446'
          clipRule='evenodd'
        />
        <text
          x='50%'
          y='50%'
          textAnchor='middle'
          dy='.3em'
          className={`${textSizeClass} fill-current text-black`}
        >
          {text}
        </text>
      </svg>
    </button>
  )
}
export default SvgHomeButton
