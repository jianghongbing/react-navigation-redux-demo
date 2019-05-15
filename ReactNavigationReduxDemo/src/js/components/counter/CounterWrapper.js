import { asyncIncrement, decrement, increment, incrementIfOdd } from '../../redux/actions/counterActions'
import { connect } from 'react-redux'
import { Counter } from './Counter'

const mapStateToProps = (state)=>({
  count: state.counterReducer
})

const mapDispatchToProps = (dispatch)=>({
  increment: _=>dispatch(increment()),
  decrement: _=>dispatch(decrement()),
  incrementIfOdd: _=>dispatch(incrementIfOdd()),
  asyncIncrement: (delay)=>()=>dispatch(asyncIncrement(delay))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)