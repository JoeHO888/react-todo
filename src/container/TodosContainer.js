import React, { Component } from 'react'
import { connect } from "react-redux";
import Todos from '../components/Todos'


const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch)=>({
	expand : todoObject => {
	dispatch({ 
      type: "EXPAND",
      payload: todoObject
    })
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Todos);

