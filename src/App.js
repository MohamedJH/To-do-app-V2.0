import React, { Component } from "react";
import Todoform from "./Components/Add Todo forms Component/Todoform";
import Todolist from "./Components/Todo list component/Todolist";
import "./App.css";

export class App extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem("todos")),
  };

  // delete todo
  deleteTodo = (id) => {
    const data = JSON.parse(localStorage.getItem("todos"));
    const newList = data.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(newList));
    this.setState({ todos: JSON.parse(localStorage.getItem("todos")) });
  };
  // completed todo
  checkCompleted = (id) => {
    const toDoList = JSON.parse(localStorage.getItem("todos"));
    toDoList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(toDoList));
        this.setState({ todos: JSON.parse(localStorage.getItem("todos")) });
      }
      return todo;
    });
  };

  searchTodo = (e) => {
    const dataJSON = JSON.parse(localStorage.getItem("todos"));
    const TodosFiltred = dataJSON.filter((el) =>
      el.name.toLowerCase().includes([e.target.value.toLowerCase()])
    );
    this.setState({ todos: TodosFiltred });
  };

  handleTodosCompleted =(e)=>{
    e.preventDefault();
    const dataJSON = JSON.parse(localStorage.getItem("todos"))
    const todosCompleted = dataJSON.filter((el)=>el.completed)
    this.setState({ todos: todosCompleted });
  }
  handleTodosunCompleted =(e)=>{
    e.preventDefault();
    const dataJSON = JSON.parse(localStorage.getItem("todos"));
    const todosUncompleted = dataJSON.filter((el)=>!el.completed)
    this.setState({ todos: todosUncompleted });
  }

  handleAllTodos =(e)=>{
    e.preventDefault();
    const dataJSON = JSON.parse(localStorage.getItem("todos"));
    this.setState({ todos: dataJSON });
  }
  // add todo
  addTodo = (inputValue) => {
    const newTodo = {
      id: Date.now(),
      name: inputValue,
      completed: false,
      date: "2020-01-01",
      color: "",
    };
    const data = JSON.parse(localStorage.getItem("todos"));
    const newList = [...data, newTodo];
    localStorage.setItem("todos", JSON.stringify(newList));
    this.setState({ todos: JSON.parse(localStorage.getItem("todos")) });
  };
  saveChanges = (id, editNameValue, editDateValue, editColorValue) => {
    const toDoList = JSON.parse(localStorage.getItem("todos"));
    toDoList.map((toDo) => {
      if (toDo.id === id) {
        toDo.name = editNameValue;
        toDo.date = editDateValue;
        toDo.color = editColorValue;
        localStorage.setItem("todos", JSON.stringify(toDoList));
        this.setState({ todos: JSON.parse(localStorage.getItem("todos")) });
      }
      return toDo;
    });
  };

  render() {
    return (
      <div>
        <div className="card" style={{ width: "900px", margin: "50px auto" }}>
          <Todoform
            searchTodo={this.searchTodo}
            handleTodosCompleted={this.handleTodosCompleted}
            handleTodosunCompleted={this.handleTodosunCompleted}
            handleAllTodos={this.handleAllTodos}
          />
          <Todolist
            addTodo={this.addTodo}
            todos={this.state.todos}
            checkCompleted={this.checkCompleted}
            deleteTodo={this.deleteTodo}
            saveChanges={this.saveChanges}
          />
        </div>
      </div>
    );
  }
}

export default App;
