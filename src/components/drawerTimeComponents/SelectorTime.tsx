import { SelectorProps } from 'utils/types'

const SelectorTime = ({ arr, value, setter, label }: SelectorProps) => {
  return (
    <div className="mx-1.5 flex w-1/2 flex-col items-center">
      <label htmlFor={label}>{label}</label>
      <select
        value={value}
        onChange={(e) => setter(Number(e.target.value))}
        className="h-12 w-2/3 p-2"
        name={label}
        id={label}
      >
        {arr.map((value: number, index: number) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectorTime
