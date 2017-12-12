import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import registerServiceWorker from './registerServiceWorker'
import { PersistGate } from 'redux-persist/es/integration/react'
// Custom CSS imports
import 'font-awesome/css/font-awesome.css'
import './css/index.css'

// Material UI theme wrapper
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ThemeDefault from './themes'

// Setup the store
const {persistor, store} = configureStore({form: {}})

// Setup the main app
let render = () => {
  // Dynamically import main component, render it
  const BarBuddy = require('./pages').default
  require('dotenv').config()
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate
        loading='loading'
        persistor={persistor}
      >
        <MuiThemeProvider muiTheme={ThemeDefault}>
          <BarBuddy />
        </MuiThemeProvider>
      </PersistGate>
    </Provider>,
    document.getElementById('app')
  )
}

registerServiceWorker()

if (module.hot) {
  // Whenever the BarBuddy component file or one of its dependencies
  // is changed, re-import the updated component and re-render it
  module.hot.accept('./pages', () => {
    setTimeout(render)
  })
}

render()
