import LoginPage from 'Pages/LoginPage'
import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '../testUtils'

describe('Login content test', () => {
  it('Inputs in login page are present & the default values is empty string', () => {
    render(<LoginPage />)
    const InputElements = screen.getByRole('textbox') as HTMLInputElement
    expect(InputElements).toBeInTheDocument()
    expect(InputElements.value).toBe('')
  })
  it('Should be able to type username', () => {
    render(<LoginPage />)
    const usernameInput = screen.getByTestId(/username/i) as HTMLInputElement
    expect(usernameInput).toBeInTheDocument()
    expect(usernameInput.value).toBe('')
    fireEvent.change(usernameInput, {
      target: { value: 'rodolphe.a@gmail.com' }
    })
    expect(usernameInput.value).toBe('rodolphe.a@gmail.com')
  })
  it('Should be able to type password', () => {
    render(<LoginPage />)
    const passwordInput = screen.getByTestId(/password/i) as HTMLInputElement
    expect(passwordInput).toBeInTheDocument()
    expect(passwordInput.value).toBe('')
    fireEvent.change(passwordInput, {
      target: { value: '123456' }
    })
    expect(passwordInput.value).toBe('123456')
  })
})
