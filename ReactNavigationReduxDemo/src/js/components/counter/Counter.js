import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native'

import { CounterButton } from './CounterButton'

export const Counter = ({count, increment, decrement, incrementIfOdd, asyncIncrement})=>(
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <CounterButton
          title='Increment'
          onPress={increment}
      />
      <CounterButton
          title='Decrement'
          onPress={decrement}
      />
      <CounterButton
          title='Increment If Odd'
          onPress={incrementIfOdd}
      />
      <CounterButton
          title='Async Increment'
          onPress={asyncIncrement(2000)}
      />
    </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

Counter.navigationOptions = {
 title: 'Counter',
}
