import React, { Component, Fragment } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native'

export class MovieDetail extends Component {

  static navigationOptions = {
    title: '电影详情',
  }

  componentDidMount(){
    const movieId = this.props.navigation.getParam('movieId')
    this.props.loadMovieDetail(movieId)
  }

  render(){
    const {isLoading, error, movieDetail} = this.props
    let imageURI
    if (movieDetail.hasOwnProperty('images')) {
      const images = movieDetail.images
      if (images.hasOwnProperty('large')) {
        imageURI = images.large
      }
    }
    return (
        <SafeAreaView style={styles.container}>
          {
            (isLoading&&(<Fragment>
              <ActivityIndicator animating={isLoading}/>
              <Text style={styles.loadingText}>正在加载...</Text>
            </Fragment>)) || (error && <Text style={styles.errorText}>获取电影详情异常</Text>) || (
                <Fragment>
                  {imageURI&&<Image
                      style={styles.moviePoster}
                      source={{uri: imageURI}}
                  />}
                  <Text style={styles.title}>{movieDetail.title}</Text>
                  <Text style={styles.year}>{movieDetail.year}</Text>
                  <Text style={styles.year}>{movieDetail.durations}</Text>
                  <Text style={styles.summary}>{movieDetail.summary}</Text>
                </Fragment>
            )
          }
        </SafeAreaView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  loadingText: {
    color: '#666',
    fontSize: 20,
  },
  errorText: {
    color: '#f22',
    fontSize: 30,
    fontWeight: 'bold',
  },
  moviePoster: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    color: '#444',
    fontWeight: 'bold',
  },
  year: {
    fontSize: 18,
    color: '#666',
  },
  summary: {
    fontSize: 14,
    color: '#777',
  }
})