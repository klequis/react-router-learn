import React from 'react'

const componentName = 'Home'

class Home extends React.Component {
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
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}

export default Home