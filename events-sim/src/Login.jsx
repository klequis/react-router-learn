import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'

const componentName = 'Login'
const log = false

class Login extends React.Component {
  componentDidMount() {
    log && console.log(`${componentName} - Mount`)
    log && this.props.addCrumb(componentName)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    log && console.log(`${componentName} - Update`)
    log && this.props.removeCrumb(componentName)
  }

  componentWillUnmount() {
    log && console.log(`${componentName} - Unmount`)
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
      </div>
    )
  }
}

const mstp = (state) => {return {}}

export default connect(mstp, actions)(Login)