import { createStore } from 'redux'
import { tabBarMiddleware } from './middlewares/tabBarMiddleware'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducers } from './reducers/reducer'

export const store = createStore(reducers, applyMiddleware(tabBarMiddleware, thunk))