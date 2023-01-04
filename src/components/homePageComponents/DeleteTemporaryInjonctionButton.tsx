import { isMobile } from 'react-device-detect'
import Loader from 'sharedComponents/Loader'
import { DeleteButtonProps } from 'utils/types'

const DeleteTemporaryInjonctionButton = ({
  validateHeatCycle,
  deleteHeatingProgram,
  isClickedOnDelete,
  isLoadingAction
}: DeleteButtonProps) => {
  return (
    <div
      className={`scale-in-ver-bottom absolute bottom-20 mb-7 grid h-20 place-items-center p-6 ${
        isMobile ? ' pt-0' : ''
      } ${validateHeatCycle ? 'jello-horizontal' : ''}`}
    >
      {validateHeatCycle ? (
        <button
          disabled={isLoadingAction ? true : false}
          onClick={deleteHeatingProgram}
          className={`m-6 inline bg-teal-400 px-6 py-2 transition duration-500 ease-linear hover:scale-125 ${
            isClickedOnDelete ? 'jello-horizontal' : ''
          }`}
        >
          {isLoadingAction ? <Loader /> : 'Annuler le cycle'}
        </button>
      ) : (
        ''
      )}
    </div>
  )
}

export default DeleteTemporaryInjonctionButton
