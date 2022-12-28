import useAuth from 'hooks/useAuth'
import useChangeTemperature from 'hooks/useChangeTemperature'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'

export default function App() {
  const { isLoggedIn } = useAuth()
  const { drawerISOpen } = useChangeTemperature()

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route
            path="/"
            element={<HomePage drawerISOpen={drawerISOpen} />}
          ></Route>
        ) : (
          <Route path="/" element={<LoginPage />}></Route>
        )}
      </Routes>
    </BrowserRouter>
  )
}
