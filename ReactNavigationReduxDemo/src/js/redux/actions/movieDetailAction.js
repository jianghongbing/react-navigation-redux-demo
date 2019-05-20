export const LOAD_MOVIE_DETAIL = 'LOAD_MOVIE_DETAIL'
export const LOAD_MOVIE_DETAIL_SUCCESS = 'LOAD_MOVIE_DETAIL_SUCCESS'
export const LOAD_MOVIE__DETAIL_FAILED = 'LOAD_MOVIE_FAILED'

const loadMovieDetail = ()=>({
    type: LOAD_MOVIE_DETAIL,
})

const loadMovieDetailSuccess = (movieDetail)=>({
    type: LOAD_MOVIE_DETAIL_SUCCESS,
    movieDetail,
})

const loadMovieDetailFailed = (error)=>({
    type: LOAD_MOVIE__DETAIL_FAILED,
    error
})

export const startLoadMovieDetail = (movieId)=>(dispatch)=>{
    dispatch(loadMovieDetail())
    return fetch(`https://api.douban.com/v2/movie/subject/${movieId}?alt=json&apikey=0df993c66c0c636e29ecbb5344252a4a`).then(res=>res.json()).then(json=>{
        dispatch(loadMovieDetailSuccess(json))
    }).catch(error=>dispatch(loadMovieDetailFailed(error)))
}
