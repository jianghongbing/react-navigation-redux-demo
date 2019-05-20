import { connect } from 'react-redux'
import { startLoadMovieDetail } from '../../redux/actions/movieDetailAction'
import { MovieDetail } from './MovieDetail'

const mapStateToProps = (state)=>({
  ...state.movieDetailReducer
})

const mapDispatchToProps = (dispatch)=>({
  loadMovieDetail: (movieId)=>dispatch(startLoadMovieDetail(movieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
