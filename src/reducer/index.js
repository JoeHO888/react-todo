const initialState = { 
  todos: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADDNEWTO":
	const newtodos = state.todos.concat(payload.newTodo);
	return {todos:newtodos};
    default:
      return state;
  }
};
