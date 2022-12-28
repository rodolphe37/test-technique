import Counter from 'components/Counter/Counter'
import Thermostat from 'components/Thermostat'
import { Fragment } from 'react'
import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '../testUtils'

const value = 20

describe('Thermostat Component tests', () => {
  it('the counter is present', () => {
    render(
      <Fragment>
        <Thermostat />
        <Counter value={value} color="red" className="" />
      </Fragment>
    )
    const tempElement = screen.getByTestId('count')
    expect(tempElement).toBeInTheDocument()
  })
  it('Plus button is in document & is clickable', () => {
    render(<Thermostat />)
    const plusButton = screen.getByRole('plus-button')
    fireEvent.click(plusButton)
    expect(plusButton).toBeInTheDocument()
  })
  it('Minus button is in document & is clickable', () => {
    render(<Thermostat />)
    const minusButton = screen.getByRole('minus-button')
    fireEvent.click(minusButton)
    expect(minusButton).toBeInTheDocument()
  })
})
