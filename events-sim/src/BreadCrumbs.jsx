import React from 'react'
import { connect } from 'react-redux'

const crumb = {
  display: 'flex',
  justifyContent: 'flex-start',
  padding: 5,
  border: '1px solid black',
  margin: 5,
  //maxWidth: 50,
  float: 'left',
}

const getByName = ( crumb, mountCount) => {
  const idx = mountCount.findIndex(i => i.name === crumb)
  return mountCount[idx]
}

const BreadCrumbs = ({ crumbs, mountCount }) => {
  console.log('mountCount', mountCount)
  return (
    <div>
      {
        crumbs.map(c => {
          const mc = getByName(c, mountCount)

          return (
            <div key={c} style={crumb}>{c} ({mc.mountCount}, {mc.unmountCount})</div>
          )
        })
      }
    </div>
  )
}

const mstp = (state) => {
  return {
    crumbs: state.breadCrumbs,
    mountCount: state.mountCount,
  }
}

export default connect(mstp)(BreadCrumbs)