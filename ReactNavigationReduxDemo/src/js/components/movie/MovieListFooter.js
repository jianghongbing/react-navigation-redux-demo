import React from 'react'
import {
    View,
    ActivityIndicator,
    Text,
    StyleSheet,
} from 'react-native'

export const MovieListFooter = ({didLoadAllMovies})=> {
  console.log(didLoadAllMovies)
  if (didLoadAllMovies) {
    return (<View style={styles.container}><Text style={styles.text}>{'已经加载完所有电影'}</Text></View>)
  } else {
    return (
        <View style={[styles.container, {flexDirection: 'row'}]}>
          <ActivityIndicator animating={true} />
          <Text style={[styles.text, {marginStart: 5}]}>{'正在加载数据中...'}</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  text: {
    color: '#666',
    fontSize: 14,
  }
})

