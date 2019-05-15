import {
  DID_LOAD_ALL_MOVIE,
  LOAD_MOVIE_ERROR,
  LOAD_MOVIE_SUCCESS,
  LOADING_MOVIE,
} from '../actions/movieActions'


const initialState = {
  items: [],
  isLoading: false,
  didLoadAllMovies: false,
  isReload: false,
  error: null,
}

export const movieReducer = (state = initialState, action)=>{
  switch (action.type) {
    case LOADING_MOVIE:
      return {
        ...state,
        isLoading: true,
        didLoadAllMovies: false,
        isReload: action.isReload,
        error: null,
      }
    case LOAD_MOVIE_SUCCESS:
      return {
        ...state,
        items: [...state.items, ...action.items]
      }
    case LOAD_MOVIE_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case DID_LOAD_ALL_MOVIE:
      return {
        ...state,
        didLoadAllMovies: true,
      }
    default:
      return state
  }
}