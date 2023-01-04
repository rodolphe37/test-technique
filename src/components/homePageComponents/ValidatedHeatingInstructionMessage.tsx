import { Fragment } from 'react'
import { isMobile } from 'react-device-detect'
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
        <div
          className={`scale-in-ver-bottom absolute  grid  place-items-center bg-white  ${
            isMobile ? 'h-30 bottom-5 pb-5 pt-4' : ' h-25 bottom-2 p-6 pt-4'
          }`}
        >
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
