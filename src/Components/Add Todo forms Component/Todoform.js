import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCheck,
  faExclamation,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import "./Todoform.css";

export class Todoform extends Component {
  state = {
    search: false,
    searchValue: "",
  };

  render() {
    return (
      <div>
        <div className="card-header bg-dark">
          <form onSubmit={this.addValue}>
            <div className="form-row d-flex justify-content-between">
              <div className="w-50 d-flex justify-content-start">
                <button
                  type="submit"
                  className="btn btn-sm border-0 btn-outline-light"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ search: !this.state.search });
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                <div
                  className=""
                  style={
                    this.state.search ? { width: "400px" } : { display: "none" }
                  }
                >
                  <input
                    type="search"
                    className="form-control form-control-sm mx-5"
                    placeholder="Chercher...."
                    value={this.state.searchValue}
                    onChange={(e) => {
                      this.setState({ searchValue: e.target.value });
                      this.props.searchTodo(e);
                    }}
                  />
                </div>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="btn btn-sm btn-outline-light mx-1 border-0"
                  onClick={this.props.handleAllTodos}
                >
                  Default
                </button>
                <button
                  type="submit"
                  className="btn btn-sm btn-outline-danger mx-1 border-0"
                  onClick={this.props.handleTodosunCompleted}
                >
                  None
                </button>
                <button
                  type="submit"
                  className="btn btn-sm btn-outline-success mx-1 border-0"
                  onClick={this.props.handleTodosCompleted}
                >
                  Done
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Todoform;
