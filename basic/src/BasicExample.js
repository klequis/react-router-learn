import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'
import Topics from './Topics'

const componentName = 'BasicExample'

class BasicExample extends React.Component {

  componentDidMount() {
    console.log(`${componentName}.componentDid - Mount`)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`${componentName}.componentDid - Update`)
  }

  componentWillUnmount() {
    console.log(`${componentName}.componentWill - Unmount`)
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    )
  }

}
export default BasicExample;
