import React from 'react'

const componentName = 'About'

class About extends React.Component {
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
      <div>
        <h2>About</h2>
      </div>
    )
  }
}

export default About