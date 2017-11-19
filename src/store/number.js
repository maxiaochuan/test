

export const ADD = 'ADD'

export function add (num) {
  return {
    type: ADD,
    payload: num,
  }
}

const initialState = 0

export default function numberReducer (state = initialState, action) {
  return action.type === ADD ? state + action.payload : state
}
