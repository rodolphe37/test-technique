import React from 'react'
import { NumberFC } from './Number'

const Number7: NumberFC = (props) => {
  return (
    <>
      <title>7</title>
      <path
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        // tslint:disable-next-line: max-line-length
        d="M5.19219561,28.368 L19.3521956,3.408 L3.65619561,3.408 C1.40019561,3.408 1.49619561,0 3.65619561,0 L21.5601956,0 C23.6241956,0 24.4401956,1.248 23.3361956,3.024 L8.26419561,29.952 C7.97619561,30.432 7.35219561,30.768 6.72819561,30.768 C5.86419561,30.768 5.00019561,29.952 5.00019561,29.136 C5.00019561,28.8 5.09619561,28.512 5.19219561,28.368 Z"
      />
    </>
  )
}

export default Number7
