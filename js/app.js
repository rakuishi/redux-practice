import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import TodoList from './components'
import { store } from './reducers'

let appStore = createStore(store)

render(
  <Provider store={appStore}>
    <TodoList />
  </Provider>,
  document.getElementById('content')
)
