import { useEffect, useState } from 'react'
import { useHousingId } from './useHousingId'

const useHousingIdSelected = () => {
  const { data } = useHousingId()
  const [housingIdSelected, setHousingIdSelected] = useState<
    string | undefined
  >(data)

  useEffect((): void => {
    setHousingIdSelected(data)
  }, [data])
  return {
    housingIdSelected
  }
}

export default useHousingIdSelected
