import { ReactNode } from 'react'

export interface ErrorBoundaryProps
  extends Partial<{
    dataTestId: string
    fallback: ReactNode
    children: ReactNode
  }> {}

export interface ErrorBoundaryState {
  hasError: boolean
}
