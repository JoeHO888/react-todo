import React, { Component } from 'react'

class Todos extends Component {
  render() {
    const {todos} = this.props
    return (
      <div>
	
	  {todos.map((todo, i) => <li key={i}>{todo.content}</li>)}
      </div>
    )
  }
}

export default Todos;



