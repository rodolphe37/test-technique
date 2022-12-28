import { useMemo } from 'react'
import { getNumberIcon } from 'utils/helperFunctions'

const useDisplayTemperature = (value: number) => {
  const [FirstIntNumber, SecondIntNumber, DecimalNumber] = useMemo(() => {
    const intValue = Math.floor(value)
    const decimalTemp = (value - intValue).toFixed(1)
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

  return {
    FirstIntNumber,
    SecondIntNumber,
    DecimalNumber
  }
}

export default useDisplayTemperature
