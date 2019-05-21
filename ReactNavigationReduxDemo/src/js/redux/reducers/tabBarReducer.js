import { createNavigationReducer } from 'react-navigation-redux-helpers'
import { AppContainer } from '../../components/navigators/TabBarNavigator'
export const tabBarReducer =  createNavigationReducer(AppContainer)
