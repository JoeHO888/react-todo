import React, { Component } from 'react'
import { connect } from "react-redux";

class TodoInput extends Component {

  dispatch = () => {
    const {input} = this.refs
    this.props.addNewTodo(input.value)
    input.value = ''
  }
  render() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.dispatch}>add</button>
      </div>
    )
  }
}

export default TodoInput;

