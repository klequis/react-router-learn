import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import { Link } from 'react-router-dom'

const componentName = 'EventDetails'
const log = false
class EventDetails extends React.Component {
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
        <h2>EventDetails</h2>
        id = {match.params.id}
        <br/>
        <Link to={`/new-event/${match.params.id}`}>Edit</Link>
        <button onClick={history.goBack}>Go Back</button>
      </div>
    )
  }

}

const mstp = (state) => {return {}}
export default connect(mstp, actions)(EventDetails)