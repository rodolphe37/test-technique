import Counter from './Counter/Counter'

export default function Thermostat() {
  return (
    <>
      <ThermostatButton>
        <svg
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

      <svg viewBox="0 0 100 100" fill="#F3F3F3" className="w-96 h-96">
        <circle cx="50" cy="50" r="48" stroke="#F8F8F8" strokeWidth="2" />
        <circle cx="50" cy="50" r="45" stroke="#F8F8F8" strokeWidth="5" />
        <Counter value={20} color={'RED'}></Counter>
      </svg>

      <ThermostatButton>
        <svg
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

const ThermostatButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-24 h-24 bg-gray-100 rounded-full flex justify-center items-center">
      {children}
    </button>
  )
}
