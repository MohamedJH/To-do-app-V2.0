import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Todoitem from "../Edit Todo item component/Todoitem";

class Todolist extends Component {
  state = {
    inputValue: "",
  };

  changeInputValue = (e) => {
    console.log((e.target.value))
    this.setState({ inputValue: e.target.value })
  }

  addValue = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  

  render() {
    
    return (
      <div className="card-body m-auto" style={{ width: "900px" }}>
        {this.props.todos.map((todo, i) => (
          <Todoitem
            key={todo.id}
            todo={todo}
            checkCompleted={this.props.checkCompleted}
            deleteTodo={this.props.deleteTodo}
            saveChanges={this.props.saveChanges}
          />
        ))}
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto mb-2 "
          style={{ height: "40px" }}
        >
          <div className="container-fluid d-flex justify-content-start">
            <FontAwesomeIcon
              size="xs"
              icon={faPlus}
              color="grey"
              onClick={(e)=>this.addValue(e)}
            />
            <form className="d-flex">
              <input
                className="form-control form-control-sm mx-2 bg-dark  border-0 text-white  me-1"
                type="search"
                value={this.state.inputValue}
                onChange={this.changeInputValue}
              />
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Todolist;
