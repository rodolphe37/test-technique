import HomePage from 'Pages/HomePage'
import { describe, expect, it } from 'vitest'
import { render, screen } from '../testUtils'

describe('Drawer time is present in Home page', () => {
  it('If drawerIsOpen is true, should appear drawer component to screen', () => {
    render(<HomePage drawerISOpen={true} />)

    const drawerComponent = screen.getByTestId('drawer')
    expect(drawerComponent).toBeInTheDocument()
  })
})
