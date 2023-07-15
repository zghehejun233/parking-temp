import { combineReducers } from 'redux'
import counter from './counter'
import tab from './tab'

export default combineReducers({
  counter,
  tab
})
