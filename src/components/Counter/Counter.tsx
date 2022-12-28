import useDisplayTemperature from 'hooks/useDisplayTemperature'
import React from 'react'

import { Props } from 'utils/types'

const Counter = ({ value, color, className = '', ...restProps }: Props) => {
  const { FirstIntNumber, SecondIntNumber, DecimalNumber } =
    useDisplayTemperature(value)

  return (
    <svg
      {...restProps}
      data-testid="count"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 36"
    >
      <g
        data-testid={value.toString()}
        fill="none"
        fillRule="evenodd"
        transform="translate(12)"
      >
        <DecimalNumber fill={color} transform="translate(56) scale(0.58) " />

        <circle cx="54" cy="30" r="2" fill={color} />

        <SecondIntNumber fill={color} transform="translate(26)" />
        <FirstIntNumber fill={color} />
      </g>
    </svg>
  )
}

export default Counter
