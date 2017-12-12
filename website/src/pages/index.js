import React, { Component } from 'react'
import logo from '../images/logo.svg'
import '../css/App.css'
import { connect } from 'react-redux'
import { lyftTwoLeggedOauthProcess } from '../actions/thunks/lyft/oauth'
import FlatButton from 'material-ui/FlatButton'
import PropTypes from 'prop-types'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FlatButton label='Woot' onClick={() => this.props.lyftTwoLeggedOauthProcess()} />
      </div>
    )
  }
}
App.propTypes = {
  lyftTwoLeggedOauthProcess: PropTypes.func.isRequired
}
const mapDispatch = dispatch => ({
  lyftTwoLeggedOauthProcess: () => dispatch(lyftTwoLeggedOauthProcess())
})
export default connect(null, mapDispatch)(App)
