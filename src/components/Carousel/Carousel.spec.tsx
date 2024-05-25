import { cleanup, render, screen } from '@testing-library/react'
import Carousel from './Carousel'

jest.mock('swiper/react', () => ({ Swiper: () => <div /> }))
jest.mock('swiper/modules', () => ({}))

describe('<Carousel />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Carousel />)

    const carousel = screen.getByTestId('carousel')

    expect(carousel).toBeInTheDocument()
  })
})
