
import React, { Component } from 'react'
import  Todoform  from './Components/Todo forms Component/Todoform'
import Todolist  from './Components/Todo list component/Todolist'

export class App extends Component {

  state={
    todos:[
    {
      id:1,
      name: 'faire la priere ',
      completed:false
    },
    {
      id:2,
      name: 'to-do app challenge ',
      completed:false
    },
    {
      id:3,
      name: 'prepare one to one meeting',
      completed:false
    } 
  ]
  };

  // delete todo
  deleteTodo =(id)=>{
    this.setState({todos:[...this.state.todos.filter(todo => todo.id!==id)]})
 
  }
  // completed todo
  checkCompleted = (id)=>{
    this.setState({todos:this.state.todos.map((todo,i)=> {
      if(todo.id===id){
          todo.completed=!todo.completed
      }
      return todo
    })})
    
  }
// add todo
  addTodo=(inputValue)=>{
    const newTodo ={
      id:this.state.todos.length + 1 ,
      name:inputValue,
      completed:false
    };
    this.setState({todos: [...this.state.todos , newTodo] })
  }
 

  render() {
    return (
      <div>
        <div className="card bg-light" style={{ width: "700px", margin: "50px auto" }}>
              <Todoform addTodo={this.addTodo}/>
              <Todolist todos={this.state.todos} checkCompleted={this.checkCompleted} deleteTodo={this.deleteTodo}/>
        </div>
          </div>
    )
  }
}

export default App

