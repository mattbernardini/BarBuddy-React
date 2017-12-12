import axios from 'axios'
import { setAccessToken } from '../../index'
const LYFT_CLIENT_ID = 'rOGDbIWdJal2'
const LYFT_CLIENT_SECRET = 'VbFup1omIE7ui9PMcZ_KXSbkw-k37Qzc' //eslint-disable-line

export const lyftTwoLeggedOauthProcess = () => {
  return (dispatch, getState) => {
    axios.post(
      'https://api.lyft.com/oauth/token',
      {
        grant_type: 'client_credentials',
        scope: 'public'
      },
      {
        headers: {'Content-Type': 'application/json'},
        auth: {
          username: LYFT_CLIENT_ID,
          password: LYFT_CLIENT_SECRET
        }
      }
    ).then(res => (
      dispatch(setAccessToken(res.data.access_token))
    ))
  }
}
/*
export const lyftThreeLeggedOauthProcess = () => {
  return (dispatch, getState) => {
    console.log('here')
    console.log(process.env)
    axios.post(
      'https://api.lyft.com/oauth/token',
      {
        'grant-type': 'client_credentials',
        'scope': 'public'
      },
      {
        headers: {'Content-Type': 'application/json'},
        auth: {
          username: LYFT_CLIENT_ID,
          password: LYFT_CLIENT_SECRET
        }
      }
    ).then(res => {
      console.log(res)
    })
  }
}
*/
