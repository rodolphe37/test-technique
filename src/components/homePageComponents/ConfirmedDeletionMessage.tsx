import { Fragment } from 'react'
import { ConfirmedDeletionMessageProps } from 'utils/types'

const ConfirmedDeletionMessage = ({
  isConfirmedDeletionMessage
}: ConfirmedDeletionMessageProps) => {
  return (
    <Fragment>
      {isConfirmedDeletionMessage ? (
        <div className="scale-in-ver-bottom absolute bottom-2 grid h-20 place-items-center bg-white p-6">
          <p className="justify-items-center">
            Le cycle de chauffe à bien été supprimé
          </p>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  )
}

export default ConfirmedDeletionMessage
