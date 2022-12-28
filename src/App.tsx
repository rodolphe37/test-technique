import { useQuery } from '@tanstack/react-query'
import { Auth } from 'aws-amplify'
import { Route, Router, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'

export default function App() {
  const { data: isLoggedIn, isLoading } = useQuery(
    ['user'],
    () => Auth.currentAuthenticatedUser(),
    {
      staleTime: 5 * 1000 * 60,
      refetchOnWindowFocus: false
    }
  )

  if (isLoading) return <div>Loading</div>

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<HomePage />}></Route>
        ) : (
          <Route path="/" element={<LoginPage />}></Route>
        )}
      </Routes>
    </BrowserRouter>
  )
}
