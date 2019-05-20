import {
  LOAD_MOVIE_DETAIL,
  LOAD_MOVIE_DETAIL_SUCCESS,
  LOAD_MOVIE__DETAIL_FAILED,
} from '../actions/movieDetailAction'

const initialState = {
  isLoading: false,
  error: null,
  movieDetail:{},
}

export const movieDetailReducer = (state=initialState, action)=>{
  switch (action.type) {
    case LOAD_MOVIE_DETAIL:
      return {
        ...state,
        isLoading: true,
      }
    case LOAD_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movieDetail: action.movieDetail,
      }
    case LOAD_MOVIE__DETAIL_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      }
    default:
      return state

  }
}