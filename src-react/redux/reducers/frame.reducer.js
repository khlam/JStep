import { combineReducers } from 'redux'

const initialFileState = { 'video': '', 'json': '' }
const paths = (state = initialFileState, action) => {
  switch (action.type) {
    case 'modFiles':
      return action.data
    default:
      return state
  }
}

export const frame = combineReducers({
  paths
})
