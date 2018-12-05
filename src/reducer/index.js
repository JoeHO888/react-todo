import React, { Component}  from 'react';

const initialState = { 
  todos: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADDNEWTO":
	const newtodos = state.todos.concat(payload);
	return {todos:newtodos};
	case "EXPAND":
	return {todos:payload.todos.map((todo, i) => <li key={i}>{todo}</li>)};
    default:
      return state;
  }
};

//payload.todos.map((todo, i) => <li key={i}>{todo}</li>)