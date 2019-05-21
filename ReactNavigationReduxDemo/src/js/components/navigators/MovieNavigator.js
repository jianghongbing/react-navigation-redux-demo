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

MovieNavigator.navigationOptions = ({ navigation }) => {
  console.log(navigation)
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    title: 'Movie',
    tabBarVisible,
  };
};