import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { CounterNavigator } from './CounterNavigator'
import { createReduxContainer } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    backgroundColor: 'black',
  },
  tabStyle: {
    flex: 1,
    height: 87,
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
})


export const TabBarNavigator = createBottomTabNavigator({
  CounterNavigator: {
    screen: CounterNavigator,
    navigationOptions: {
      title: 'Counter',
    }
  }
}, {
  tabBarOptions: {
    showIcon:false,
    labelStyle: styles.labelStyle,
    tabStyle: styles.tabStyle,
  },
})

export const AppContainer = createAppContainer(TabBarNavigator)
const AppReduxContainer = createReduxContainer(AppContainer)

const mapToProps = (state)=>({
  state: state.tabBarReducer,
})

export const AppWithNavigatorState = connect(mapToProps)(AppReduxContainer)

