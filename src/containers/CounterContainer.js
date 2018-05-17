import React, { Component } from 'react'
import Counter from 'components/Counter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from 'store/modules/counter'

class CounterContainer extends Component {

  handleIncrement = (number) => {
    const { CounterActions } = this.props
    CounterActions.increment(number)
  }
  handleDecrement = (number) => {
    const { CounterActions } = this.props
    CounterActions.decrement(number)
  }
  handleMultiply = (number) => {
    const { CounterActions } = this.props
    CounterActions.multiply(number)
  }

  render() {
    const { handleIncrement, handleDecrement, handleMultiply } = this
    const { number } = this.props

    return(
      <Counter
        number={number}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onMultiply={handleMultiply}
      />
    )
  }
}

export default connect(
  (state) => ({
    number: state.counter.number
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(CounterContainer)
