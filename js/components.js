import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions'

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

  render() {
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
        <ul>
          {this.props.state.todoList.map((todo) =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
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
