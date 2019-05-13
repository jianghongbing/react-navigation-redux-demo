import { combineReducers } from 'redux'
import { counterReducer } from './counterReducer'
import { tabBarReducer } from './tabBarReducer'

export const reducers = combineReducers({tabBarReducer, counterReducer})
