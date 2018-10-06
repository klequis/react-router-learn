import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import EventCards from './EventCards'


const componentName = 'Home'
const log = true

class Home extends React.Component {
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
        <h2>Home</h2>
        renders: <EventCards />
      </div>
    )
  }
}

const mstp = (state) => {return {}}

export default connect(mstp, actions)(Home)