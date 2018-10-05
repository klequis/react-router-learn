import React from 'react'
import B2 from './B2'

const componentName = 'B1'

class B1 extends React.Component {
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
        <h2>B1</h2>
        <B2/>
      </div>
    )
  }
}

export default B1