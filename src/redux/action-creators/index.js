import { ADD_COUNTER, INCREMENT, DECREMENT } from '../actions';

export const addCounter = () => ({ type: ADD_COUNTER })
export const increment = (index) => ({ type: INCREMENT, index })
export const decrement = (index) => ({ type: DECREMENT, index })