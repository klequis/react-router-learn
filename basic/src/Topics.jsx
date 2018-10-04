import React from 'react'
import { Link, Route } from 'react-router-dom'
import Topic from './Topic'

const componentName = 'Topics'

class Topics extends React.Component {
  componentDidMount() {
    console.log(`${componentName}.componentDid - Mount`)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`${componentName}.componentDid - Update`)
  }

  componentWillUnmout() {
    console.log(`${componentName}.componentWill - Unmount`)
  }
  render() {
    const { match } = this.props
    console.log('match', match)
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    )
  }

}

export default Topics