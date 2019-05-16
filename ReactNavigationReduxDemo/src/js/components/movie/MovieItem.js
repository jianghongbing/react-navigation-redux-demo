import React from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'

export const MovieItem = ({title, year})=>(
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.year}>{year}</Text>
    </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  title: {
    color: '#333',
    fontSize: 20,
  },

  year: {
    color: '#666',
    fontSize: 16,
  }
})