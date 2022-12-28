import React from 'react'
import { NumberFC } from './Number'

const Number1: NumberFC = (props) => {
  return (
    <>
      <title>1</title>
      <path
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        // tslint:disable-next-line: max-line-length
        d="M8.32657667,10.1538591 L15.2865767,0.697859135 C16.4385767,-0.550140865 18.7425767,-0.0701408652 18.7425767,1.70585913 L18.7425767,29.5938591 C18.7425767,31.5618591 15.4785767,31.5618591 15.4785767,29.5938591 L15.4785767,6.07385913 L11.3985767,11.8338591 C9.91057667,14.0898591 7.03057667,12.0738591 8.32657667,10.1538591 Z"
      />
    </>
  )
}

export default Number1
