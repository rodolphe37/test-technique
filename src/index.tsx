import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { RecoilRoot } from 'recoil'
import App from './App'
import './utils/amplify'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <App />
    </RecoilRoot>

    <ReactQueryDevtools />
  </QueryClientProvider>
)
