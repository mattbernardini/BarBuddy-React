import { compose, createStore, applyMiddleware } from 'redux'
import { autoRehydrate, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'


export default (initialState = {}) => {
  // Initialize Firebase instance

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  // Create store with reducers and initial state
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      autoRehydrate(),
      ...enhancers
    )
  )

  // Listen for auth ready (promise available on store thanks to attachAuthIsReady: true config option)
  store.then(() => {
    console.log('Auth has loaded') // eslint-disable-line no-console
  })

  persistStore(store)

  return store
}
