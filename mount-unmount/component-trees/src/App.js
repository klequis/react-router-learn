import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css'
import A from './A'
import B from './B'

const link = {
  padding: 15
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link style={link} to='/a'>A</Link>
          <Link style={link} to='/b'>B</Link>
          <h3>App</h3>
          <Route path='/a' component={A} />
          <Route path='/b' component={B} />
        </div>
      </Router>
    );
  }
}

export default App;
