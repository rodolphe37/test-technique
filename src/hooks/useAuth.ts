import { useQuery } from '@tanstack/react-query'
import { Auth } from 'aws-amplify'

const useAuth = () => {
  const { data: isLoggedIn, isLoading } = useQuery<boolean, boolean, string[]>(
    ['user'],
    () => Auth.currentAuthenticatedUser(),
    {
      staleTime: 5 * 1000 * 60,
      refetchOnWindowFocus: false
    }
  )
  return {
    isLoading,
    isLoggedIn
  }
}

export default useAuth
