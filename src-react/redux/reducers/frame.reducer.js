import { combineReducers } from 'redux'

const initialFileState = { 'video': '', 'json': '' }
const fp = (state = initialFileState, action) => {
  switch (action.type) {
    case 'modFp':
      return action.data
    default:
      return state
  }
}

export const frame = combineReducers({
  fp
})
