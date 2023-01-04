import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Auth } from 'aws-amplify'
import Input from 'components/loginPageComponents/Input'
import { useState } from 'react'

export default function LoginPage(): JSX.Element {
  const qc = useQueryClient()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

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
    <div className="h-screen w-screen bg-gray-100 p-10">
      <div className="mx-auto flex h-full max-w-lg flex-1 flex-col justify-center space-y-8">
        <Input
          testid="username"
          placeholder="Username"
          value={username}
          type="text"
          setter={setUsername}
        />
        <Input
          testid="password"
          placeholder="Password"
          type="password"
          value={password}
          setter={setPassword}
        />

        <button
          className="rounded bg-green-500 px-2 py-1 text-white"
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
