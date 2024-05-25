import { cleanup, render, screen } from '@testing-library/react'
import ErrorBoundary from './ErrorBoundary'

describe('<ErrorBoundary />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test.skip('#1. Exist - Render default', () => {
    render(<ErrorBoundary />)

    const errorBoundary = screen.getByTestId('error-boundary')

    expect(errorBoundary).toBeInTheDocument()
  })
})
