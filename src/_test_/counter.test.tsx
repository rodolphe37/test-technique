import Counter from 'components/Counter/Counter'
import { describe, expect, it } from 'vitest'
import { render, screen } from '../testUtils'

const value = 20
describe('Temperature is displayed on Counter', () => {
  it('value in present on Counter', () => {
    render(<Counter value={value} color="red" className="" />)

    expect(screen.getByTestId(20)).toBeInTheDocument()
  })
})
