import React from 'react'
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    Dimensions,
} from 'react-native'

export const MovieListEmpty = ({isLoading, error})=>(
    <View style={styles.container}>
      {isLoading && <ActivityIndicator animating={true} size='large' color='blue' hidesWhenStopped={true}/> || <Text style
      ={error ? styles.error : styles.noData}> { error ? error.message : '暂无电影数据'}</Text>}
    </View>
)

const styles = StyleSheet.create({
  container:{
    flex: 1,
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 25,
  },
  noData:{
    color: '#999',
    fontSize: 20,
  }
})

