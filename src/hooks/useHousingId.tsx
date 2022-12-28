import { useQuery } from '@tanstack/react-query'
import { API } from 'aws-amplify'
import { ApiService } from '../utils/amplify'

function getHousings(): Promise<Array<{ id: string }>> {
  return API.get(ApiService.Park, '/housings', {})
}

const housingIdSelector = (data: Awaited<ReturnType<typeof getHousings>>) => {
  return data[0].id
}

export function useHousingId() {
  return useQuery(['housing'], () => getHousings(), {
    select: housingIdSelector
  })
}
