import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default (initialState = {}) => {
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
      ...enhancers
    )
  )

  persistStore(
    store,
    null,
    () => store.getState()
  )

  return store
}
