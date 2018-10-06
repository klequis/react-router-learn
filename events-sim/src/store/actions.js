
export const addCrumb = (crumb) => {
  return {
    type: 'addCrumb',
    payload: { crumb },
  }
}

export const removeCrumb = (crumb) => {
  console.log('** crumb', crumb)
  return {
    type: 'removeCrumb',
    payload: { crumb },
  }
}

