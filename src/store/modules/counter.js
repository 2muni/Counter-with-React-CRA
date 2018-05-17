import { createAction, handleActions } from 'redux-actions'

const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'
const MULTIPLY = 'counter/MULTIPLY'

export const increment = createAction(INCREMENT, number => number)
export const decrement = createAction(DECREMENT, number => number)
export const multiply = createAction(MULTIPLY, number => number)

const initialState = {
  number: 5
}

export default handleActions({
  [INCREMENT]: ({ number }) => ({ number: number + 1}),
  [DECREMENT]: ({ number }) => ({ number: number - 1 }),
  [MULTIPLY]: ({ number }) => ({ number: number * 2 })
}, initialState)
