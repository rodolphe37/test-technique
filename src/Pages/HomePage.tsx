import DrawerTime from 'components/DrawerTime'
import ConfirmedDeletionMessage from 'components/homePageComponents/ConfirmedDeletionMessage'
import DeleteTemporaryInjonctionButton from 'components/homePageComponents/DeleteTemporaryInjonctionButton'
import ValidatedHeatingInstructionMessage from 'components/homePageComponents/ValidatedHeatingInstructionMessage'
import Thermostat from 'components/Thermostat'
import { timeLapseBeforeEndAtom } from 'globalStates/timeLapseBeforeEndAtom'
import useHeatingCycleCalculation from 'hooks/ useHeatingCycleCalculation'
import { useRecoilState } from 'recoil'
import { HomeProps } from 'utils/types'

const HomePage: React.FC<HomeProps> = ({ drawerISOpen }) => {
  const [timeLapseBeforeEnd] = useRecoilState<string>(timeLapseBeforeEndAtom)

  const {
    validateHeatCycle,
    handleValidateParameters,
    deleteHeatingProgram,
    isClickedOnDelete,
    isConfirmedDeletionMessage,
    isLoadingAction,
    temperatureInstruction
  } = useHeatingCycleCalculation()

  return (
    <div className="h-screen w-screen p-4">
      <div
        data-testid="app-content"
        className="relative flex h-full w-full flex-1  content-center justify-center rounded-xl bg-[url('/assets/living-room.jpg')] bg-cover"
      >
        <div className="flex flex-1 items-center justify-center ">
          <div className="flex items-center space-x-8">
            <Thermostat />
          </div>
          <DeleteTemporaryInjonctionButton
            validateHeatCycle={validateHeatCycle}
            deleteHeatingProgram={deleteHeatingProgram}
            isClickedOnDelete={isClickedOnDelete}
            isLoadingAction={isLoadingAction}
          />

          <ValidatedHeatingInstructionMessage
            timeLapseBeforeEnd={timeLapseBeforeEnd}
            validateHeatCycle={validateHeatCycle}
            isLoadingAction={isLoadingAction}
            temperatureInstruction={temperatureInstruction}
          />
          <ConfirmedDeletionMessage
            isConfirmedDeletionMessage={isConfirmedDeletionMessage}
          />
          {drawerISOpen ? (
            <DrawerTime handleValidateParameters={handleValidateParameters} />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
export default HomePage
