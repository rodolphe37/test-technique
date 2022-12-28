import { InputProps } from 'utils/types'

const Input = ({ testid, placeholder, type, value, setter }: InputProps) => {
  return (
    <input
      data-testid={testid}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => setter(e.target.value)}
    />
  )
}

export default Input
