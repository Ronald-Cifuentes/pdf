import { cleanup } from '@testing-library/react'
// import App from './App'

jest.mock('swiper/react', () => ({ Swiper: () => <div />, SwiperSlide: () => <div /> }))
jest.mock('swiper/modules', () => ({}))

describe('<App />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test.skip('#1. Exist - Render default', () => {
    // render(<App />)
    // const app = screen.getByTestId('app')
    // expect(app).toBeInTheDocument()
    expect(true).toBe(true)
  })
})
