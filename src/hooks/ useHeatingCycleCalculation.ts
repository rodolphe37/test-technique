import useChangeTemperature from 'hooks/useChangeTemperature'
import { timeLapseBeforeEndAtom } from './../globalStates/timeLapseBeforeEndAtom'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import useTimeSelection from './useTimeSelection'
import { API } from 'aws-amplify'
import { ApiService } from 'utils/amplify'
import useHousingIdSelected from './useHousingIdSelected'

const useHeatingCycleCalculation = () => {
  // Local states
  const [validateHeatCycle, setValidateHeatCycle] = useState<boolean>(false)
  const [isLoadingAction, setIsLoadingAction] = useState<boolean>(false)
  const [isClickedOnDelete, setIsClickedOnDelete] = useState<boolean>(false)
  const [temperatureInstruction, setTemperatureInstruction] =
    useState<number>(0)
  const [heathingProgramInMinutes, setHeatingProgrammInMinutes] =
    useState<number>(0)
  const [isConfirmedDeletionMessage, setIsConfirmedDeletionMessage] =
    useState<boolean>(false)
  // From customHooks
  const { setDrawerIsOpen, temperature, zoneId, setTemperature } =
    useChangeTemperature()
  const { housingIdSelected } = useHousingIdSelected()
  const {
    hours,
    Mins,
    setHourSelected,
    setMinSelected,
    hourSelected,
    minSelected
  } = useTimeSelection()
  // Global state
  const [timeLapseBeforeEnd, setTimeLapseBeforeEnd] = useRecoilState<string>(
    timeLapseBeforeEndAtom
  )

  useEffect((): void => {
    if (hourSelected !== 0 || minSelected !== 0) {
      const hourInMinutes = hourSelected * 60
      setHeatingProgrammInMinutes(hourInMinutes + minSelected)
    }
  }, [hourSelected, minSelected])

  const sendTempZone1 = async (): Promise<void> => {
    setIsLoadingAction(true)
    try {
      await API.post(
        ApiService.Thermal,
        `/housings/${housingIdSelected}/thermal-control/zones/${zoneId}/temporary-instruction`,
        {
          body: {
            duration: heathingProgramInMinutes,
            set_point: { instruction: Number(temperature.toFixed(1)) }
          }
        }
      )
        .then((result) => {
          if (result) {
            const endDate = new Date(
              result.events.temporary_instruction.end_at
            ).toLocaleString([], {
              dateStyle: 'medium',
              timeStyle: 'medium'
            })
            setTimeLapseBeforeEnd(endDate)
            setTemperatureInstruction(result.set_point.instruction)
          }
        })
        .then(() => {
          setTimeout(() => {
            setIsLoadingAction(false)
          }, 1000)
        })
    } catch (error) {
      console.error('Error to sent program injonction to server', error)
    }
  }

  const handleValidateParameters = async (): Promise<void> => {
    if (hourSelected !== 0 || minSelected !== 0) {
      setValidateHeatCycle(true)
      setDrawerIsOpen(false)

      await sendTempZone1().then(() => setTemperature(0))
    }
  }

  const deleteHeatingProgram = async (): Promise<void> => {
    setIsClickedOnDelete(true)
    setIsLoadingAction(true)

    try {
      await API.del(
        ApiService.Thermal,
        `/housings/${housingIdSelected}/thermal-control/zones/${zoneId}/temporary-instruction`,
        {}
      )
        .then(() => setTemperature(0))
        .then(() => {
          setTimeout(() => {
            setIsLoadingAction(false)
            setValidateHeatCycle(false)
            setIsConfirmedDeletionMessage(true)
          }, 500)
          setTimeout(() => {
            setIsConfirmedDeletionMessage(false)
            setHourSelected(0)
            setMinSelected(0)
          }, 1750)
        })
    } catch (error) {
      console.error('Error during deletion program injonction to server')
    }
  }

  return {
    hourSelected,
    hours,
    Mins,
    timeLapseBeforeEnd,
    setHourSelected,
    setMinSelected,
    minSelected,
    validateHeatCycle,
    setValidateHeatCycle,
    handleValidateParameters,
    deleteHeatingProgram,
    isClickedOnDelete,
    isConfirmedDeletionMessage,
    setIsConfirmedDeletionMessage,
    isLoadingAction,
    temperatureInstruction
  }
}

export default useHeatingCycleCalculation
