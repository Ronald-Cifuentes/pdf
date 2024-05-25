import { cleanup, render, screen } from '@testing-library/react'
import Navbar from './NavProducts'

describe('<Navbar />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Navbar />)

    const navbar = screen.getByTestId('nav-products')

    expect(navbar).toBeInTheDocument()
  })
})
