import { createStackNavigator } from 'react-navigation'
import MovieListWrapper from '../movie/MovieListWrapper'

export const MovieNavigator = createStackNavigator({
  Movie: {
    screen: MovieListWrapper,
  },
})

MovieNavigator.navigationOptions = {
  title: 'Movie',
}