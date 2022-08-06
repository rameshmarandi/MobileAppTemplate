import { combineReducers } from 'redux'
import auth from './auth'
import Categories from './Categories'
const appReducer = combineReducers({
  auth,  
  Categories
})

export const LogOut = () => ({ type: 'RESSET_STORE' })

const rootReducer = (state, action) => {
  if (action.type === 'RESSET_STORE') {
    state = {}
  }
  return appReducer(state, action)
}

export default rootReducer

