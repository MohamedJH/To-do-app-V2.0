import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faFlag,
  faBars,
  faCheckCircle,
  faEdit
} from "@fortawesome/free-solid-svg-icons";

import "./Todoitem.css";

class Todoitem extends Component {
  state = {
    edit: false,
    editNameValue: this.props.todo.name,
    editDateValue: this.props.todo.date,
    editColorValue: this.props.todo.color
  };

  DaysLeft = () => {
    console.log(this.state.editDateValue.day());
  };

  changeEditTodo = () => {
    this.setState({ edit: !this.state.edit });
  };
  changeTodoName = (e) => {
    this.setState({ editNameValue: e.target.value });
  };
  changeTodoDate = (e) => {
    this.setState({ editDateValue: e.target.value });
  };
  changeTodoColor = (e) => {
    this.setState({ editColorValue: e.target.value });
  };

  cancelChange = () => this.setState({ edit: false, editNameValue: "" });

  getStyleColorButton = () => {
    return this.props.todo.color === "High" ? (
      <FontAwesomeIcon size="sm" color="red" icon={faFlag} />
    ) : this.props.todo.color === "Average" ? (
      <FontAwesomeIcon size="sm" color="orange" icon={faFlag} />
    ) : this.props.todo.color === "Low" ? (
      <FontAwesomeIcon size="sm" color="green" icon={faFlag} />
    ) : (
      <FontAwesomeIcon size="sm" color="white" icon={faFlag} />
    );
  };

  alertDeadline = () => {
    const dateSplit = this.state.editDateValue.split("-");
    const Day = Number(dateSplit[2]);
    const Month = Number(dateSplit[1]);
    const Year = Number(dateSplit[0]);

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    //console.log(Day, Month, Year);
    console.log(currentDay, currentMonth, currentYear);
    console.log(new Date());
    const TimeLeft =
      (Year - currentYear) * 365 +
      (Month - currentMonth) * 30 +
      (Day - currentDay);
    console.log(Day - currentDay);
    return TimeLeft === 0
      ? "TODAY"
      : TimeLeft === 1
      ? "TOMORROW"
      : TimeLeft < 0
      ? "DELAY"
      : `${TimeLeft} DAYS`;
  };

  getStyleColorBadge = () => {
    return this.alertDeadline() === "TODAY" || this.alertDeadline() === "EXCEED"
      ? "badge bg-danger text-white"
      : this.alertDeadline() === "TOMORROW"
      ? "badge bg-warning"
      : "badge bg-success text-white";
  };

  render() {
    const {
      todo: { id, name, completed }
    } = this.props;
    console.log(this.props.todo);

    const editName = (
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row ">
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm bg-white border-0 text-dark"
              value={this.state.editNameValue}
              onChange={(e) => this.changeTodoName(e)}
            />
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              type="submit"
              className="btn btn-light btn-sm mx-1"
              onClick={() => {
                this.setState({ edit: false });
                this.props.saveChanges(
                  id,
                  this.state.editNameValue,
                  this.state.editDateValue,
                  this.state.editColorValue
                );
              }}
            >
              <small>Save</small>
            </button>
            <button
              type="submit"
              className="btn btn-dark btn-sm mx-1"
              onClick={this.cancelChange}
            >
              <small>Cancel</small>
            </button>
          </div>
        </div>
      </form>
    );

    const editPriority = (
      <select
        className="form-control form-control-sm bg-dark border-0 text-white"
        id="exampleFormControlSelect1"
        onChange={(e) => this.changeTodoColor(e)}
      >
        <option>choose</option>
        <option>High</option>
        <option>Average</option>
        <option>Low</option>
      </select>
    );

    const editTdDate = (
      <input
        type="date"
        className="form-control form-control-sm bg-grey border-0 text-dark"
        value={this.state.editDateValue}
        onChange={(e) => this.changeTodoDate(e)}
      />
    );

    const Color = this.getStyleColorButton();

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto mb-2 "
        style={{ height: "40px" }}
      >
        <div className="container-fluid d-flex justify-content-start">
          <FontAwesomeIcon size="xs" icon={faBars} color="grey" />

          <small
            className={
              completed === true
                ? "navbar-text collapse navbar-collapse mx-3 completed"
                : "navbar-text collapse navbar-collapse text-white mx-3"
            }
            style={{ height: "20px" }}
          >
            {this.state.edit ? editName : name}
          </small>
          <div className="collapse d-flex justify-content-end mx-3">
            <ul className="navbar-nav mb-  mb-lg-0">
              <li className="nav-item text-secondary mx-2">
                {this.state.edit ? (
                  <span>{editTdDate}</span>
                ) : (
                  <span className={this.getStyleColorBadge()}>
                    {this.alertDeadline()}
                  </span>
                )}
              </li>
            </ul>
          </div>
          <div className="collapse d-flex justify-content-end mx-3">
            <ul className="navbar-nav mb-2  mb-lg-0">
              <li
                className={
                  completed ? "nav-item-disabled mx-2" : "nav-item mx-2"
                }
                onClick={this.changeEditTodo}
              >
                <FontAwesomeIcon
                  size="xs"
                  icon={faEdit}
                  color={completed === true ? "gray" : "white"}
                />
              </li>
              <li className="nav-item mx-2">
                <FontAwesomeIcon
                  size="xs"
                  icon={faTrash}
                  color="red"
                  onClick={() => this.props.deleteTodo(id)}
                />
              </li>
            </ul>
          </div>
          <div className="collapse d-flex justify-content-end">
            <ul className="navbar-nav mb-2  mb-lg-0">
              <li className="nav-item mx-2">
                <FontAwesomeIcon
                  size="xs"
                  icon={faCheckCircle}
                  color={completed === true ? "green" : "white"}
                  onClick={() => this.props.checkCompleted(id)}
                />
              </li>
              <li className="nav-item mx-2">
                {this.state.edit ? editPriority : Color}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Todoitem;
