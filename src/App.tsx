import useAuth from 'hooks/useAuth'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'

export default function App() {
  const { isLoggedIn } = useAuth()

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
