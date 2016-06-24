export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'

let todoId = 1

export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: todoId++,
    text: text
  }
}

export function completeTodo(id, completed) {
  return {
    type: COMPLETE_TODO,
    id: id,
    completed: completed
  }
 }
