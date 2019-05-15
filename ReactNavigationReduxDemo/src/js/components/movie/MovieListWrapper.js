// import { loadingMovies, loadMoreMovies, didLoadAllMovies, reloadMovies} from '../../redux/actions/movieActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MovieActions from '../../redux/actions/movieActions'
import { MovieList } from './MovieList'

const mapStateToProps = (state)=>({...state.movieReducer})
const mapDispatchToProps = (dispatch)=>(bindActionCreators(MovieActions, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)