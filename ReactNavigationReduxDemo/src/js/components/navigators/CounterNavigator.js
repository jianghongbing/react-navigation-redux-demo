import { createStackNavigator } from 'react-navigation'
// import Counter from '../counter/Counter'
import CounterWrapper from '../counter/CounterWrapper'
export const CounterNavigator = createStackNavigator({
  Counter: {
    screen: CounterWrapper,
  },
})
