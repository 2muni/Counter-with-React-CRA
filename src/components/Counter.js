import React from 'react'

const Counter = ({ number, onIncrement, onDecrement, onMultiply }) =>
  <div>
    <h1>{number}</h1>
    <button onClick={onIncrement}>더하기(+)</button>
    <button onClick={onDecrement}>빼기(-)</button>
    <button onClick={onMultiply}>곱하기(x)</button>
  </div>

export default Counter
