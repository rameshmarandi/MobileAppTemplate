import { combineReducers } from 'redux'

import auth from './auth'

const appReducer = combineReducers({
  auth,  
})

export const LogOut = () => ({ type: 'RESSET_STORE' })

const rootReducer = (state, action) => {
  if (action.type === 'RESSET_STORE') {
    state = {}
  }
  return appReducer(state, action)
}

export default rootReducer