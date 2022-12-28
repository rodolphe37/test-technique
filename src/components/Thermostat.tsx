import useChangeTemperature from 'hooks/useChangeTemperature'
import { ActionsProps } from 'utils/types'

import Counter from './Counter/Counter'
import CounterLoader from './Counter/CounterLoader'

const Thermostat: React.FC = (): JSX.Element => {
  const { setActionsType, temperatureObject, timeoutClear } =
    useChangeTemperature()

  return (
    <>
      <ThermostatButton
        role="minus-button"
        choosedActionType={() => setActionsType('dec')}
        timeoutClear={timeoutClear}
      >
        <svg
          data-testid="-"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
        </svg>
      </ThermostatButton>

      {Number(Object.values(temperatureObject)) !== 0 ? (
        <svg viewBox="0 0 100 100" fill="#F3F3F3" className="h-96 w-96">
          <circle cx="50" cy="50" r="48" stroke="#F8F8F8" strokeWidth="2" />
          <circle cx="50" cy="50" r="45" stroke="#F8F8F8" strokeWidth="5" />

          <Counter
            value={Number(Object.values(temperatureObject))}
            color={'RED'}
          />
        </svg>
      ) : (
        <CounterLoader />
      )}

      <ThermostatButton
        role="plus-button"
        choosedActionType={() => setActionsType('inc')}
        timeoutClear={timeoutClear}
      >
        <svg
          data-testid="+"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6  text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </ThermostatButton>
    </>
  )
}

const ThermostatButton = ({
  children,
  choosedActionType,
  role,
  timeoutClear
}: ActionsProps) => {
  return (
    <button
      onMouseLeave={timeoutClear}
      onMouseUp={timeoutClear}
      role={role}
      onMouseDown={choosedActionType}
      className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100"
    >
      {children}
    </button>
  )
}

export default Thermostat
