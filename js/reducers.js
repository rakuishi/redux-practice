import { combineReducers } from 'redux'
import { ADD_TODO } from './actions'

let initState = [
  {
    id: 0,
    text: 'Hello, Redux with React.js!'
  }
]

function todoList(state = initState, action) {
  switch(action.type) {
    case ADD_TODO:
      // http://redux.js.org/docs/Troubleshooting.html
      // Never mutate reducer arguments
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    default:
      return state
  }
}

export const store = combineReducers(
  {
    todoList: todoList
  }
)
