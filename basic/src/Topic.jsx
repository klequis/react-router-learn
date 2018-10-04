import React from 'react'

const componentName = 'Topic'

class Topic extends React.Component {
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
    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    )
  }

}

export default Topic