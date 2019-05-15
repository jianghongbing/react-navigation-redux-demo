import React from 'react'
import {
    SafeAreaView,
    // View,
    StyleSheet,
} from 'react-native'

export const MovieList = ()=>(
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  }
})

MovieList.navigationOptions = {
  title: 'Top200',
  headerTitleStyle: {
    color: '#666',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  // headerTransparent: true,
}