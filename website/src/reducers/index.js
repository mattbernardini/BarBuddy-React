import { reducer as formReducer } from 'redux-form'
// Redux-Persist v5 imports
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistCombineReducers } from 'redux-persist'
import accessTokenReducer from './oauth'
// Initialize redux-persist config

const config = {
  key: 'primary',
  storage,
  debug: true
}

const rootReducer = persistCombineReducers(config,
  {
    form: formReducer,
    accessToken: accessTokenReducer
  }
)

export default rootReducer
