import { reducer as formReducer } from 'redux-form'
// Redux-Persist v5 imports
import storage from 'redux-persist/lib/storage'
import { REHYDRATE, PURGE, persistCombineReducers } from 'redux-persist'
// Initialize redux-persist config

const config = {
  key: 'primary',
  storage,
  debug: true
}

const rootReducer = persistCombineReducers(config,
  {
    form: formReducer
  }
)

export default rootReducer
