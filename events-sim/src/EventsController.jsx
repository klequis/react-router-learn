import React from "react";
import { connect } from 'react-redux'
import * as actions from './store/actions'
import { Route, withRouter } from "react-router-dom";
import CreateEvent from './CreateEvent'
import MyEvents from './MyEvents'
import EventDetails from './EventDetails'
import Home from './Home'

const componentName = 'EventsController'
const log = false

class EventsController extends React.Component {
  state = {
    goBack: this.props.history.goBack,
  }
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
        <Route exact path="/" component={Home} />
        <Route exact path="/new-event" component={CreateEvent} />
        <Route exact path="/new-event/:id" component={CreateEvent} />
        <Route path="/my-events" component={MyEvents} />
        <Route path='/event-details/:id' component={EventDetails} />
      </div>
    )
  }

}

const mstp = (state) => {return {}}


export default withRouter(connect(mstp, actions)(EventsController))
