import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Auth } from 'aws-amplify'
import { useLogin } from 'hooks/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function LoginPage() {
  const qc = useQueryClient()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { mutate, isLoading } = useMutation(login)

  const handleClick = () => {
    mutate(
      { username, password },
      {
        onSuccess: () => {
          qc.invalidateQueries(['user'])
        }
      }
    )
  }

  return (
    <div className="h-screen w-screen bg-gray-100">
      <div className="h-full flex flex-1 flex-col justify-center space-y-8 max-w-lg mx-auto">
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="px-2 py-1 rounded bg-green-500 text-white"
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? 'Logging in ...' : 'Login'}
        </button>
      </div>
    </div>
  )
}

function login(payload: Record<'username' | 'password', string>) {
  return Auth.signIn(payload.username, payload.password)
}
