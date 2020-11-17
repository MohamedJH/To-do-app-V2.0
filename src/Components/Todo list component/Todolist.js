
import React, { Component } from 'react'
import Todoitem from '../Todo item component/Todoitem'


class Todolist extends Component {

     

    render() {
       
        return (
            <div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col" style={{width:"500px"}}>Name </th>
                                <th scope="col" colSpan="3" style={{textAlign:"center"}}>Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.todos.map((todo,i)=> <Todoitem key={todo.id} todo={todo} checkCompleted={this.props.checkCompleted} deleteTodo={this.props.deleteTodo}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Todolist
