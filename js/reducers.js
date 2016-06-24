import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO } from './actions'

let initState = [
  {
    id: 0,
    text: 'Hello, Redux with React.js!',
    completed: false
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
          text: action.text,
          completed: false,
        }
      ]
    case COMPLETE_TODO:
     return state.map((todo, index) => {
        if (action.id === index) {
          // Copy the object before mutating
          return Object.assign({}, todo, {
            completed: !action.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

export const store = combineReducers(
  {
    todoList: todoList
  }
)
