import * as React from 'react'
import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import userEvent from '@testing-library/user-event'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity
    }
  }
})

const customRender = (ui: any, options?: any) => {
  const user = userEvent.setup()

  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
  }

  return { user, ...render(ui, { wrapper: AllTheProviders, ...options }) }
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
