import { Fragment } from 'react'
import { ValidatedMessageProps } from 'utils/types'

const ValidatedHeatingInstructionMessage = ({
  timeLapseBeforeEnd,
  validateHeatCycle,
  isLoadingAction,
  temperatureInstruction
}: ValidatedMessageProps) => {
  return (
    <Fragment>
      {!isLoadingAction && validateHeatCycle ? (
        <div className="scale-in-ver-bottom absolute bottom-2 grid h-20 place-items-center bg-white p-6 pt-4">
          <p className="justify-items-center">
            La chauffe temporaire se termine le : &nbsp;
            <strong>{timeLapseBeforeEnd}</strong>
          </p>
          <p>
            La température programmée est : &nbsp;
            <strong> {temperatureInstruction}°C</strong>
          </p>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  )
}

export default ValidatedHeatingInstructionMessage
