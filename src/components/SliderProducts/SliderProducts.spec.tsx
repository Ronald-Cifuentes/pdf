import { cleanup, render, screen } from '@testing-library/react'
import SliderProducts from './SliderProducts'

describe('<SliderProducts />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<SliderProducts />)

    const sliderProducts = screen.getByTestId('slider-products')

    expect(sliderProducts).toBeInTheDocument()
  })
})
