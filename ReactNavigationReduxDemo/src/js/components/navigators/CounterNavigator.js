import { createStackNavigator } from 'react-navigation'
import Counter from '../counter/Counter'
export const CounterNavigator = createStackNavigator({
  Counter: {
    screen: Counter,
  },
})
