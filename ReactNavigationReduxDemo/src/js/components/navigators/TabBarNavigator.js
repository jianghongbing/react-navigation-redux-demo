
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { createReduxContainer } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import { CounterNavigator } from './CounterNavigator'
import { MovieNavigator } from './MovieNavigator'

export const TabBarNavigator = createBottomTabNavigator({
  CounterNavigator: {
    screen: CounterNavigator,
    navigationOptions: {
      title: 'Counter',
    }
  },
  MovieNavigator: {
    screen: MovieNavigator,
  },


}, {
  initialRouteName: 'MovieNavigator',
  tabBarOptions: {
    showIcon:false,
    labelStyle: {fontSize: 20},
  },

})

export const AppContainer = createAppContainer(TabBarNavigator)
const AppReduxContainer = createReduxContainer(AppContainer)

const mapStateToProps = (state)=>{
  return {state: {...state.tabBarReducer}}
}

export const AppWithNavigatorState = connect(mapStateToProps)(AppReduxContainer)

