import { append, merge, without, remove, update } from 'ramda'
import { combineReducers } from 'redux'
import { blue } from '../logger'

const getCrumbIndex = (crumbName, state) => state.findIndex(i => i.name === crumbName)

const removeItem = (crumName, state) => {
  const idx = getCrumbIndex(crumName, state)
  return remove(idx, 1, state)
}

export const breadCrumbs = (state = [], { type, payload }) => {
  switch (type) {
    case 'addCrumb':
      blue('add', payload.crumb)
      return append(payload.crumb, state)
    case 'removeCrumb':
      // return without([payload.crumb], state)
      blue('remove', payload.crumb)
      const r = removeItem(payload.crumb, state)
      return r
    default:
      return state
  }
}

const newCountItem = (crumbName) => ({ name: crumbName, mountCount: 0, unmountCount: 0 })

/*
  type: mount||unmount
*/
const increment = (type, state, crumbName) => {
  const propToChange = type === 'mount' ? 'mountCount' : 'unmountCount'
  const idx = getCrumbIndex(crumbName, state)
  const r = idx > -1 ? state[idx] : newCountItem(crumbName)
  const r1 =merge(r, { [propToChange]: r[propToChange]+1 })
  return idx === -1 ? append(r1, state) : update(idx, r1, state)
}

export const mountCount = (state = [], { type, payload }) => {
  switch (type) {
    case 'addCrumb':
      return increment('mount', state, payload.crumb)
    case 'removeCrumb':
      return increment('unmount', state, payload.crumb)
    default:
      return state
  }
}


export default combineReducers({
  breadCrumbs,
  mountCount
})
