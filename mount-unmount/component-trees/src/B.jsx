import React from 'react'
import B1 from './B1'

const componentName = 'B'

class B extends React.Component {
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
        <h2>B</h2>
        <B1/>
      </div>
    )
  }
}

export default B