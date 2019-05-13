import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'

export const CounterButton = ({title, onPress})=>(
    <TouchableOpacity
    style={styles.button}
    onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#45e',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  title:{
    color: '#eee',
    fontSize: 24,
    textAlign: 'center',
  },
})

