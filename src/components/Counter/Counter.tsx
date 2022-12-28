import React, { useMemo } from 'react'
import Number0 from './Numbers/Number0'
import Number1 from './Numbers/Number1'
import Number2 from './Numbers/Number2'
import Number3 from './Numbers/Number3'
import Number4 from './Numbers/Number4'
import Number5 from './Numbers/Number5'
import Number6 from './Numbers/Number6'
import Number7 from './Numbers/Number7'
import Number8 from './Numbers/Number8'
import Number9 from './Numbers/Number9'

interface IOwnProps {
  value: number
  className?: string
  color: string
}

type Props = IOwnProps & React.SVGProps<SVGSVGElement>

function getNumberIcon(value: number) {
  switch (value) {
    case 0:
      return Number0
    case 1:
      return Number1
    case 2:
      return Number2
    case 3:
      return Number3
    case 4:
      return Number4
    case 5:
      return Number5
    case 6:
      return Number6
    case 7:
      return Number7
    case 8:
      return Number8
    case 9:
      return Number9
    default:
      return Number0
  }
}

const Counter: React.FC<Props> = ({
  value,
  color,
  className = '',
  ...restProps
}) => {
  const [FirstIntNumber, SecondIntNumber, DecimalNumber] = useMemo(() => {
    const intValue = Math.floor(value)
    const decimalTemp = value - intValue
    let strValue = intValue.toString()
    if (strValue.length === 1) {
      strValue = '0' + strValue
    }

    const firstIntNumber = getNumberIcon(parseInt(strValue[0], 10))
    const secondIntNumber = getNumberIcon(parseInt(strValue[1], 10))

    const decimalNumber = getNumberIcon(
      parseInt(decimalTemp.toString().split('.')[1] || '0', 10)
    )

    return [firstIntNumber, secondIntNumber, decimalNumber]
  }, [value])

  return (
    <svg
      {...restProps}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 36"
    >
      <g fill="none" fillRule="evenodd" transform="translate(12)">
        <DecimalNumber
          fill={color}
          transform="translate(56) scale(0.58) "
        ></DecimalNumber>

        <circle cx="54" cy="30" r="2" fill={color} />

        <SecondIntNumber
          fill={color}
          transform="translate(26)"
        ></SecondIntNumber>
        <FirstIntNumber fill={color}></FirstIntNumber>
      </g>
    </svg>
  )
}

export default Counter
