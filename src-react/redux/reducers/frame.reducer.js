import { combineReducers } from 'redux'

const initialFileState = { 'video': '', 'json': '' }
const filePaths = (state = initialFileState, action) => {
  switch (action.type) {
    case 'modFiles':
      return action.data
    default:
      return state
  }
}

const initialJsonState = "JSON NOT LOADED"
const showJson = (state = initialJsonState, action) => {
  switch (action.type) {
    case 'currentJsonFrame':
      return action.data
    default:
      return state
  }
}

const initialFrameIDX = 0
const frameIDX = (state = initialFrameIDX, action) => {
  switch (action.type) {
    case 'frameIDX':
      return action.data
    default:
      return state
  }
}

const initialFrameLen = 0
const frameLen = (state = initialFrameLen, action) => {
  switch (action.type) {
    case 'totalFrameLen':
      return action.data
    default:
      return state
  }
}


export const frame = combineReducers({
  frameLen,
  frameIDX,
  filePaths,
  showJson
})
