import { SET_TWO_LEGGED_OAUTH } from '../constants/ActionTypes'

export default function oauth (state = {}, action) {
  console.log(action, state)
  switch (action.type) {
    case SET_TWO_LEGGED_OAUTH:
      return {
        ...state,
        accessToken: action.token
      }
    default:
      return state
  }
}
