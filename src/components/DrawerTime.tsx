import useHeatingCycleCalculation from 'hooks/ useHeatingCycleCalculation'
import useChangeTemperature from 'hooks/useChangeTemperature'
import { isMobile } from 'react-device-detect'
import { DrawerTimeProps } from 'utils/types'
import SelectorTime from './drawerTimeComponents/SelectorTime'

const DrawerTime: React.FC<DrawerTimeProps> = ({
  handleValidateParameters
}) => {
  const { handleCloseDrawer } = useChangeTemperature()
  const {
    hourSelected,
    hours,
    Mins,
    setHourSelected,
    setMinSelected,
    minSelected
  } = useHeatingCycleCalculation()

  return (
    <div
      data-testid="drawer"
      className={`scale-in-ver-bottom absolute  w-full content-center items-center justify-between bg-white ${
        isMobile ? 'bottom-5' : 'bottom-0'
      }`}
    >
      <h1 className="mb-1 mt-2 text-center text-lg">
        Durée d&apos;injonction temporaire
      </h1>
      <div className="flex h-auto w-full flex-col items-center justify-center">
        <div className=" mt-4 flex w-1/2 justify-between">
          <SelectorTime
            label="Heures"
            value={hourSelected}
            arr={hours}
            setter={setHourSelected}
          />
          <SelectorTime
            label="Minutes"
            value={minSelected}
            arr={Mins}
            setter={setMinSelected}
          />
        </div>
        <div className=" mt-4 flex w-1/2 justify-around">
          <button
            onClick={handleValidateParameters}
            className="m-6 inline bg-teal-400 px-6 py-2 transition duration-500 ease-linear hover:scale-125"
          >
            Confirmer
          </button>
          <button
            onClick={handleCloseDrawer}
            className="m-6 inline bg-teal-400 px-6 py-2 transition duration-500 ease-linear hover:scale-125"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  )
}

export default DrawerTime
