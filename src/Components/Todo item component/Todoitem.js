import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheckCircle, faEdit,faBatteryFull,faBatteryThreeQuarters,faBatteryQuarter,faBatteryEmpty} from '@fortawesome/free-solid-svg-icons'

import './Todoitem.css'

class Todoitem extends Component {

    state = {
        edit: false,
        editNameValue: this.props.todo.name,
        editDateValue: this.props.todo.date,
        editColorValue: this.props.todo.color,

    }


    changeEditTodo = () => {
        this.setState({ edit: !this.state.edit })
    }
    changeTodoName = (e) => {
        this.setState({ editNameValue: e.target.value })
    }
    changeTodoDate = (e) => {
        this.setState({ editDateValue: e.target.value })
    }
    changeTodoColor = (e) => {
        this.setState({ editColorValue: e.target.value })
    }


    cancelChange = () => this.setState({ edit: false, editNameValue: "" })

    getStyleColorButton =()=>{
       return  this.props.todo.color==="Huge"? <FontAwesomeIcon size="lg" color="red" icon={faBatteryFull}/>:this.props.todo.color==="less"? <FontAwesomeIcon size="lg" color="tomato" icon={faBatteryThreeQuarters}/>:this.props.todo.color===""? <FontAwesomeIcon size="lg"  icon={faBatteryEmpty}/>:<FontAwesomeIcon size="lg" color="green"icon={faBatteryQuarter}/>
    }





    render() {
        const { todo: { id, name, completed, date } } = this.props

        const editTdName =
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" value={this.state.editNameValue} onChange={(e) => this.changeTodoName(e)} />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-dark mx-2 mb-2" onClick={() => {
                            this.setState({ edit: false })
                            this.props.saveChanges(id, this.state.editNameValue, this.state.editDateValue, this.state.editColorValue)
                        }}
                        >Save</button>
                        <button type="submit" className="btn btn-light mb-2" onClick={this.cancelChange} >Cancel</button>
                    </div>
                </div>
            </form>


        const editTdColor =
        <div classname="form-group">  
            <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => this.changeTodoColor(e)}>
                <option>choose</option>
                <option>Huge</option>
                <option>less</option>
                <option>Never</option>
            </select>
        </div> 
        const editTdDate = <input type="date" className="form-control" value={this.state.editDateValue} onChange={(e) => this.changeTodoDate(e)} />

        const Color= this.getStyleColorButton()

        return (
            <tr>
                <th scope="row">{id}</th>
                <td className={completed === true ? "completed" : ""}>{this.state.edit ? editTdName : name}</td>
                <td><button type="button" className="btn  rounded-pill" onClick={() => this.props.checkCompleted(id)}><FontAwesomeIcon icon={faCheckCircle} color={completed === true ? "green" : ""} /></button></td>
                <td><button type="button" className="btn  rounded-pill" onClick={this.changeEditTodo} disabled={completed ? true : false}><FontAwesomeIcon icon={faEdit} /></button></td>
                <td><button type="button" className="btn  rounded-pill" onClick={() => this.props.deleteTodo(id)} > <FontAwesomeIcon icon={faTrash} /></button></td>
                <td className="py-4">{this.state.edit ? editTdDate : date}</td>
                <th className="py-4">{this.state.edit ? editTdColor : Color }</th>
            </tr>
        )
    }
}

export default Todoitem
