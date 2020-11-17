import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faCheckCircle,faEdit } from '@fortawesome/free-solid-svg-icons'

import './Todoitem.css'

class Todoitem extends Component {

    render() {
        const {todo:{id,name,completed}}=this.props
        return (
            <tr>
                <th scope="row">{id}</th>
                <td className={completed===true? "completed":""}>{name}</td>
                <td><button type="button" className="btn  rounded-pill" onClick={()=>this.props.checkCompleted(id)}><FontAwesomeIcon icon={faCheckCircle} color={completed===true? "green":""}/></button></td>
                <td><button type="button" className="btn  rounded-pill"><FontAwesomeIcon icon={faEdit}  /></button></td>
                <td><button type="button" className="btn  rounded-pill" onClick={()=>this.props.deleteTodo(id)}><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>
        )
    }
}

export default Todoitem
