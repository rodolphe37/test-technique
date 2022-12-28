import HomePage from 'Pages/HomePage'

import { describe, expect, it } from 'vitest'
import { render, screen } from '../testUtils'

describe('App content test', () => {
  it('Home page Elements are present & contain background picture', async () => {
    render(<HomePage drawerISOpen={false} />)
    const element = screen.getByTestId('app-content')
    expect(element.className).toContain(
      `bg-[url('/assets/living-room.jpg')] bg-cover`
    )
    expect(getComputedStyle(element).display).toEqual('block')
  })
})
