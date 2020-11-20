import React, { Component } from 'react'


export class Todoform extends Component {

    state = {
        inputValue: ""
    }



    changeInputValue = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    addValue = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.inputValue)
        this.setState({ inputValue: "" })
    }



    render() {

        return (
            <div>
                <div className="card-header bg-dark d-flex justify-content-center">
                    
                    <form onSubmit={this.addValue}>
                        <div className="form-row">
                            <div className="col-8">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Ajouter une tache...."
                                    value={this.state.inputValue}
                                    onChange={this.changeInputValue}

                                />
                            </div>
                            <div className="col">
                                <button type="submit" className="btn btn-outline-light" >Ajouter</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Todoform
