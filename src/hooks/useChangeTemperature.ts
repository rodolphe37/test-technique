import { isMobile } from 'react-device-detect'
import { useRecoilState } from 'recoil'
import { API } from 'aws-amplify'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ApiService } from 'utils/amplify'
import {
  comfortableTemperature,
  freshTemperature,
  maxTemperature,
  minTemperature,
  temperatureChangeUnit
} from 'utils/constants'

import useHousingIdSelected from './useHousingIdSelected'

import { temperatureValueAtom } from 'globalStates/temperatureValueAtom'
import { drawerIsOpenAtom } from 'globalStates/drawerIsOpenAtom'
import useTimeSelection from './useTimeSelection'

const useChangeTemperature = () => {
  const [actionsType, setActionsType] = useState<string>('')
  const [temperatureObject, setTemperatureObject] = useState<
    Record<string, unknown>
  >({})
  const [baseTemperature, setBaseTemperature] = useState<number>(0)
  const [temperature, setTemperature] =
    useRecoilState<number>(temperatureValueAtom)
  const [colorTemperatureByDegree, setColorTemperatureByDegree] =
    useState<string>('')
  const [drawerISOpen, setDrawerIsOpen] =
    useRecoilState<boolean>(drawerIsOpenAtom)
  const { housingIdSelected } = useHousingIdSelected()
  const { setHourSelected, setMinSelected } = useTimeSelection()
  const [temperatureFromApi, setTemperatureFromApi] = useState<number>(0)
  const [temperatureInstruction, setTemperatureInstruction] =
    useState<string>('')
  const [zoneId, setZoneId] = useState<string>('')
  const currentSelectedTemperature = Number(temperature.toFixed(1))

  const getTempZone1 = useCallback(async (): Promise<void> => {
    try {
      const res = await API.get(
        ApiService.Thermal,
        `/housings/${housingIdSelected}/thermal-details`,
        {}
      )
      setTemperatureFromApi(res.zones[0].temperature)
      setTemperatureInstruction(res.zones[0].set_point.instruction)
      setZoneId(res.zones[0].id)
    } catch (error) {
      console.error('Error to get Temperature zone from server', error)
    }
  }, [housingIdSelected])

  useEffect((): void => {
    if (housingIdSelected && temperatureFromApi === 0) {
      getTempZone1()
    }
    setBaseTemperature(temperatureFromApi)
  }, [housingIdSelected, temperatureFromApi, getTempZone1])

  const handleCloseDrawer: () => void = () => {
    setDrawerIsOpen(false)
    setHourSelected(0)
    setMinSelected(0)
    setTemperature(0)
  }

  const onClickTimer = useRef<
    ReturnType<typeof setInterval> | number | undefined
  >(undefined)

  function timeoutClear(): void {
    clearInterval(onClickTimer.current)
  }

  const incrementTemperature = useCallback((): void => {
    onClickTimer.current = setInterval(
      () => setTemperature((temp) => temp + temperatureChangeUnit),
      60
    )

    setActionsType('')
  }, [setTemperature])

  const decrementTemperature = useCallback((): void => {
    onClickTimer.current = setInterval(
      () => setTemperature((temp) => temp - temperatureChangeUnit),
      60
    )

    setActionsType('')
  }, [setTemperature])

  useEffect((): void => {
    if (currentSelectedTemperature === 0) {
      setTemperature(temperatureFromApi)
    }
    if (
      currentSelectedTemperature === maxTemperature ||
      currentSelectedTemperature === minTemperature
    ) {
      timeoutClear()
    }
    if (currentSelectedTemperature >= comfortableTemperature) {
      setColorTemperatureByDegree('RED')
    } else if (
      currentSelectedTemperature >= freshTemperature &&
      currentSelectedTemperature < comfortableTemperature
    ) {
      setColorTemperatureByDegree('GREEN')
    } else if (currentSelectedTemperature < freshTemperature) {
      setColorTemperatureByDegree('BLUE')
    } else {
      setColorTemperatureByDegree('BLACK')
    }
  }, [
    setTemperature,
    currentSelectedTemperature,
    temperature,
    temperatureFromApi
  ])

  useEffect((): void => {
    if (actionsType === 'inc' && currentSelectedTemperature < maxTemperature) {
      incrementTemperature()
    }
    if (actionsType === 'dec' && currentSelectedTemperature > minTemperature) {
      decrementTemperature()
    }
    if (isMobile) {
      setTimeout(() => {
        timeoutClear()
      }, 80)
    }
  }, [
    actionsType,
    incrementTemperature,
    currentSelectedTemperature,
    decrementTemperature
  ])

  useEffect((): void => {
    if (actionsType === 'inc' || actionsType === 'dec') {
      setDrawerIsOpen(true)
    }
    setTemperatureObject({
      [temperatureInstruction]: Number(temperature.toFixed(1))
    })
  }, [actionsType, setDrawerIsOpen, temperatureInstruction, temperature])

  return {
    setActionsType,
    temperature,
    setTemperature,
    colorTemperatureByDegree,
    temperatureFromApi,
    drawerISOpen,
    setDrawerIsOpen,
    handleCloseDrawer,
    temperatureInstruction,
    zoneId,
    baseTemperature,
    temperatureObject,
    setTemperatureObject,
    getTempZone1,
    timeoutClear,
    incrementTemperature,
    decrementTemperature
  }
}

export default useChangeTemperature
