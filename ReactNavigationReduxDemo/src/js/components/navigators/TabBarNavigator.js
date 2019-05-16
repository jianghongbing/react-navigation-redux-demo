import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { createReduxContainer } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
// import { StyleSheet } from 'react-native'
import { CounterNavigator } from './CounterNavigator'
import { MovieNavigator } from './MovieNavigator'

// const styles = StyleSheet.create({
//   labelStyle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'red',
//     textAlign: 'center',
//     backgroundColor: 'black',
//   },
//   tabStyle: {
//     flex: 1,
//     height: 87,
//     justifyContent: 'center',
//     backgroundColor: 'orange',
//   },
// })


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

const mapToProps = (state)=>({
  state: state.tabBarReducer,
})

export const AppWithNavigatorState = connect(mapToProps)(AppReduxContainer)

