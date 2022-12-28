import { Amplify, Auth } from 'aws-amplify'

const isTesting = process.env.NODE_ENV === 'test'

const customHeader: () => Promise<{
  Authorization: string
}> = async () => {
  return {
    Authorization: isTesting
      ? ''
      : `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
  }
}

const url = isTesting ? '' : 'https://dev-api.comapsmarthome.com'
const { VITE_USERPOOLID, VITE_USERPOOLWEBCLIENT } = import.meta.env

export enum ApiService {
  Thermal = 'thermal',
  Park = 'park'
}

Amplify.configure({
  API: {
    endpoints: [
      {
        name: ApiService.Thermal,
        endpoint: url + '/thermal'
      },
      {
        name: ApiService.Park,
        endpoint: url + '/park'
      }
    ].map((end) => ({
      ...end,
      custom_header: customHeader
    }))
  },
  Auth: {
    region: 'eu-west-3',
    userPoolId: VITE_USERPOOLID,
    userPoolWebClientId: VITE_USERPOOLWEBCLIENT
  }
})
