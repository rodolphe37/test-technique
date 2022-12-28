import { useRecoilState } from 'recoil'
import { hourSelectedAtom } from 'globalStates/hourSelectedAtom'
import { minSelectedAtom } from 'globalStates/minSelectedAtom'

const useTimeSelection = () => {
  const hours: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24
  ]
  const Mins: number[] = [0, 15, 30, 45]
  const [hourSelected, setHourSelected] =
    useRecoilState<number>(hourSelectedAtom)
  const [minSelected, setMinSelected] = useRecoilState<number>(minSelectedAtom)

  return {
    hours,
    Mins,
    hourSelected,
    minSelected,
    setHourSelected,
    setMinSelected
  }
}

export default useTimeSelection
