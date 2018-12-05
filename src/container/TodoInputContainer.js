import React, { Component } from 'react'
import { connect } from "react-redux";
import TodoInput from '../components/TodoInput'

const mapDispatchToProps = (dispatch)=>({
	addNewTodo : newTodo => {
	const newTodoItem = {
		content:newTodo,
		status:"active"
	}
	fetch("http://localhost:8080/api/todos", 
	{
		method: 'POST', 
		headers: new Headers({'Content-Type': 'application/json'}), 
		mode: 'cors', 
		body: JSON.stringify(newTodoItem)
	})
	.then(res => res.json())
	.then(({id,status,content})=>{
		dispatch({
			type:'ADDNEWTO',
			payload:{id,status,content}})})
  }
})

export default connect(null,mapDispatchToProps)(TodoInput);
