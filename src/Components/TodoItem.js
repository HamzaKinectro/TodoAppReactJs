import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    console.log(this.props);
    return (
      <li className="TodoItem">
        <strong>{this.props.todo.username}</strong> - {this.props.todo.email}{" "}
      </li>
    );
  }
}
export default TodoItem;
