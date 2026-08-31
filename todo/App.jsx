import React from "react";
import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import './App.css'
function App() {
  return (
    <center class="todo">
      <Appname/>
      <AddTodo/>
      <TodoItem1/>
       <TodoItem2/>
    
    </center>
  );
}
export default App;



import {useState} from 'react'

const TodoList = () => {
  let[todos,setTodos]=useState([])
  return (
    <div>
      <input placeholder='add a task..'/> 
      <button>add task</button><br/>
<hr></hr>
      <h4>todo list</h4>
      <ul>
        {
          todos.map((todo)=>{
            return<li>{todo}</li>
          })
        }

      </ul>
    </div>
  )
}

export default TodoList
