import React, { Component } from 'react'
import TodoInput from '../container/TodoInputContainer'
import Todos from '../container/TodosContainer'
import { connect } from "react-redux";

class TodoList extends Component {

  render() {
    return (
      <div>
        <TodoInput/>
        <Todos/>
      </div>
    )
  }
}

export default TodoList;