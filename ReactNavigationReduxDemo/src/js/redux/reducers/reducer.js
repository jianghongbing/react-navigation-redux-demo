import { combineReducers } from 'redux'
import { counterReducer } from './counterReducer'
import { tabBarReducer } from './tabBarReducer'
import { movieReducer } from './movieReducer'
import { movieDetailReducer } from './movieDetailReducer'

export const reducers = combineReducers({tabBarReducer, counterReducer, movieReducer, movieDetailReducer})
