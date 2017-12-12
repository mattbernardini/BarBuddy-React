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
  const store1 = (rootReducer, initialState) => createStore(
    rootReducer,
    {form: {}, accessToken: {}},
    compose(
      applyMiddleware(thunk),
      ...enhancers
    )
  )
  const store = store1(rootReducer, {form: {}})
  const persistor = persistStore(store)

  return {persistor, store}
}
