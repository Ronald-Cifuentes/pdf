import React from 'react'
import { ErrorBoundaryProps, ErrorBoundaryState } from './interfaces'
import { ErrorBoundaryContainer } from './ErrorBoundary.styled'

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static defaultProps = {
    dataTestId: 'error-boundary', // Set the default value here
  }

  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    console.log('ErrorBoundary::componentDidCatch >>>>', { error })
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.log('ErrorBoundary::componentDidCatch >>>>', { error, info: info.componentStack })
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorBoundaryContainer data-testid={this.props.dataTestId}>
          {this.props.fallback}
        </ErrorBoundaryContainer>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
