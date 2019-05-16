import {
  DID_LOAD_ALL_MOVIE,
  LOAD_MOVIE_ERROR,
  LOAD_MOVIE_SUCCESS,
  LOADING_MOVIE,
  // RELOADING_MOVIES,
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
    // case RELOADING_MOVIES:
    //   return {
    //     ...state,
    //     isReload: true,
    //   }
    case LOADING_MOVIE:
      return {
        ...state,
        isLoading: true,
        didLoadAllMovies: false,
        isReload: action.isReload,
        isLoadMore: action.isLoadMore,
        error: null,
      }
    case LOAD_MOVIE_SUCCESS:
      return {
        ...state,
        items: (state.isReload ? action.items : [...state.items, ...action.items]),
        isLoading: false,
        isReload: false,
        isLoadMore: false,
      }
    case LOAD_MOVIE_ERROR:
      return {
        ...state,
        isLoading: false,
        isReload: false,
        isLoadMore: false,
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