import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo } from './actions'

class TodoList extends Component {
  handleSubmit(e) {
    e.preventDefault()
    let text = this.refs.todoTextInput.value.trim()
    if (!text) {
      return
    }
    this.props.dispatch(addTodo(text))
    this.refs.todoTextInput.value = ''
  }

  handleClick(todo) {
    this.props.dispatch(completeTodo(todo.id, todo.completed))
  }

  render() {
    var rows = []
    this.props.state.todoList.map((todo) => {
      if (todo.completed) {
        rows.push(
          <li key={todo.id} onClick={this.handleClick.bind(this, todo)} className="completed">{todo.text}</li>
        )
      } else {
        rows.push(
          <li key={todo.id} onClick={this.handleClick.bind(this, todo)}>{todo.text}</li>
        )
      }
    })

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="ten columns">
              <input
                type="text"
                ref="todoTextInput"
                className="u-full-width"
                />
            </div>
            <div className="two columns">
              <input
                type="submit"
                value="Add"
                className="button-primary"
                />
            </div>
          </div>
        </form>
        <ul className="todo-list">
          {rows}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(TodoList)
