import { cleanup, render, screen } from '@testing-library/react'
import NavBar from './NavBar'

describe('<NavBar />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<NavBar />)

    const navBar = screen.getByTestId('nav-bar')

    expect(navBar).toBeInTheDocument()
  })
})
