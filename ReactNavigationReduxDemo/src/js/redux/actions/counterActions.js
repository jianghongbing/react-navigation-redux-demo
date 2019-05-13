export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = ()=>({type: INCREMENT})
export const decrement = ()=>({type: DECREMENT})
export const incrementIfOdd = ()=>(dispatch, getState)=>{
  const count = getState().counterReducer
  if (count % 2 !== 0) dispatch(increment())
}
export const asyncIncrement = (delay=1000)=>(dispatch)=>{
  return setTimeout(()=>dispatch(increment()), delay)
}

