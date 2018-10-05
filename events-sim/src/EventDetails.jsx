import React from 'react'
import { Link } from 'react-router-dom'

const componentName = 'EventDetails'

class EventDetails extends React.Component {
  componentDidMount() {
    console.log(`${componentName} - Mount`)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`${componentName} - Update`)
  }

  componentWillUnmount() {
    console.log(`${componentName} - Unmount`)
  }
  render() {
    const { match } = this.props
    return (
      <div>
        <h2>EventDetails</h2>
        id = {match.params.id}
        <br/>
        <Link to={`/new-event/${match.params.id}`}>Edit</Link>
      </div>
    )
  }

}

export default EventDetails