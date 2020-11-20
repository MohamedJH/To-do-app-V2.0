import React, { Component } from 'react';
import Todoitem from '../Todo item component/Todoitem';

class Todolist extends Component {
  state = {
    search: false,
    searchValue: '',
  };

  Search = () => {
    this.setState({ search: !this.state.search });
  };

  render() {
    const searchForm = (
      <input
        type="search"
        className="form-control w-75"
        placeholder="Search..."
        value={this.state.searchValue}
        onChange={(e) => {
          alert("Change.....")
          this.setState({ searchValue: e.target.value });
          this.props.searchTodo(this.state.searchValue);
        }}
      />
    );
    return (
      <div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th
                  scope="col"
                  style={{ width: '500px' }}
                  onDoubleClick={this.Search}
                >
                  {this.state.search ? searchForm : 'name'}{' '}
                </th>
                <th scope="col" colSpan="3" style={{ textAlign: 'center' }}>
                  Handle
                </th>
                <th scope="col">Date Line</th>
                <th scope="col">Importance</th>
              </tr>
            </thead>
            <tbody>
              {this.props.todos.map((todo, i) => (
                <Todoitem
                  key={todo.id}
                  todo={todo}
                  checkCompleted={this.props.checkCompleted}
                  deleteTodo={this.props.deleteTodo}
                  saveChanges={this.props.saveChanges}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Todolist;
