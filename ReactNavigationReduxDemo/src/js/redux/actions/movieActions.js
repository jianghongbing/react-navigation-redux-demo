export const LOADING_MOVIE = 'LOADING_MOVIE'
export const DID_LOAD_ALL_MOVIE = 'DID_LOAD_ALL_MOVIE'
export const LOAD_MOVIE_ERROR = 'LOAD_MOVIE_ERROR'
export const LOAD_MOVIE_SUCCESS = 'LOAD_MOVIE_SUCCESS'
export const loadMoviesSuccess = (items)=>({
  type: LOAD_MOVIE_SUCCESS,
  items
})

const loadMoviesError = (error)=>({
  type: LOAD_MOVIE_ERROR,
  error
})

const loadingMovies = (isReload)=>({
  type: LOADING_MOVIE,
  isReload
})

const didLoadAllMovies = ()=>({
  type: DID_LOAD_ALL_MOVIE,
})


export const loadMovies = (start, isReload=false)=>(dispatch)=>{
  dispatch(loadingMovies(isReload))
  return fetch(`http://api.douban.com/v2/movie/top250?start=${start}&count=20&apikey=0df993c66c0c636e29ecbb5344252a4a`)
      .then(response=>response.json())
      .then(json=>dispatch(loadMoviesSuccess(json.subjects)))
      .catch(error=>dispatch(loadMoviesError(error)))
}

export const reloadMovies = ()=>loadMovies(0, true)

export const loadMoreMovies = ()=>(dispatch, getState)=>{
  const count = getState().movieReducer.items.length;
  if(count >= 250) {
    return dispatch(didLoadAllMovies())
  }else {
    return dispatch(loadingMovies(count))
  }
}

