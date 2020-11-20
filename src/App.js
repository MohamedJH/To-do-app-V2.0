
import React, { Component } from 'react'
import  Todoform  from './Components/Todo forms Component/Todoform'
import Todolist  from './Components/Todo list component/Todolist'

export class App extends Component {

  state={
    todos:[
    {
      id:1,
      name: 'faire la priere ',
      completed:false,
      date:"2020-11-12",
      color:""
    },
    {
      id:2,
      name: 'to-do app challenge ',
      completed:false,
      date:"2020-03-18",
      color:""
      
    },
    {
      id:3,
      name: 'prepare one to one meeting',
      completed:false,
      date:"1993-04-06",
      color:""
    } 
  ]
  };

  searchTodo=(searchValue)=>{
    this.setState({todos:[...this.state.todos.filter((el)=> el.name.includes([searchValue]))]})
  }

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
      completed:false,
      date:"2020-01-01",
      color:""
    };
    this.setState({todos: [...this.state.todos , newTodo] })
  }
  saveChanges =(id, editNameValue,editDateValue,editColorValue)=>{
    
    this.setState({todos: this.state.todos.filter((el,i)=>{
      if(el.id===id ){
          el.name=editNameValue;
          el.date=editDateValue;
          el.color=editColorValue
      }
        return el
    })})
    
  }
 
 
  

  render() {
    return (
      <div>
        <div className="card bg-light" style={{ width: "1000px", margin: "50px auto" }}>
              <Todoform addTodo={this.addTodo}/>
              <Todolist 
              todos={this.state.todos} 
              checkCompleted={this.checkCompleted} 
              deleteTodo={this.deleteTodo}
              saveChanges={this.saveChanges}
              searchTodo={this.searchTodo}
              />
        </div>
          </div>
    )
  }
}

export default App

