import React from 'react'
import A1 from './A1'

const componentName = 'A'

class A extends React.Component {
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
        <h2>A</h2>
        <A1/>
      </div>
    )
  }
}

export default A