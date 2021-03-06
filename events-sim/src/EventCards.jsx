import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'

const componentName = 'EventCards'
const log = false

class EventCards extends React.Component {
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
    return (
      <div>
        <h2>EventCards</h2>
      </div>
    )
  }

}

const mstp = (state) => {return {}}
export default connect(mstp, actions)(EventCards)