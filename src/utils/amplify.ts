import { Amplify, Auth } from 'aws-amplify'

const isTesting = process.env.NODE_ENV === 'test'

const customHeader = async () => {
  return {
    Authorization: isTesting
      ? ''
      : `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
  }
}

const url = isTesting ? '' : 'https://dev-api.comapsmarthome.com'

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
    userPoolId: 'eu-west-3_wsqwlPjif',
    userPoolWebClientId: '7g51udgio7enhm3j91r05a48lp'
  }
})
