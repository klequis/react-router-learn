import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'

const componentName = 'CreateEvent'

const log = true

class CreateEvent extends React.Component {
  componentDidMount() {
    log && console.log(`${componentName} - Mount`)
    log && this.props.addCrumb(componentName)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    log && console.log(`${componentName} - Update`)
  }

  componentWillUnmount() {
    log && console.log(`${componentName} - Unmount`)
    log && this.props.removeCrumb(componentName)
  }
  render() {
    const { match, history } = this.props

    return (
      <div>
        <h2>CreateEvent</h2>
        <p>id={match.params.id || 'none'}</p>
        <button onClick={history.goBack}>Go Back</button>
      </div>
    )
  }
}

const mstp = (state) => {return {}}

export default connect(mstp, actions)(CreateEvent)
