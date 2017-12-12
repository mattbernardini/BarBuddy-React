import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import { persistStore } from 'redux-persist'
import registerServiceWorker from './registerServiceWorker'

// Custom CSS imports
import 'font-awesome/css/font-awesome.css'
import './css/index.css'

// Material UI theme wrapper
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ThemeDefault from './ThemeDefault'

// Setup the store
const store = configureStore()
persistStore(store)

// Setup the main app
let render = () => {
  // Dynamically import main component, render it
  const BarBuddy = require('./pages').default

  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <BarBuddy />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('app'))
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
