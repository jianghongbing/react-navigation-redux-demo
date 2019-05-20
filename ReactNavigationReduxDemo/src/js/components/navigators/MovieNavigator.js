import { createStackNavigator } from 'react-navigation'
import MovieListWrapper from '../movie/MovieListWrapper'
import MovieDetailWrapper from '../movie/MovieDetailWrapper'

export const MovieNavigator = createStackNavigator({
  MovieList: {
    screen: MovieListWrapper,
  },
  MovieDetail: {
    screen: MovieDetailWrapper,
  }
}, {
  initialRouteName: 'MovieList'
})

MovieNavigator.navigationOptions = {
  title: 'Movie',
}