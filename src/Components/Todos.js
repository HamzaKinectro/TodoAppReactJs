import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    //console.log(this.props);
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        console.log("data in object arr is " + todo);
        return <TodoItem key={todo.id} todo={todo} />;
      });
    }

    return <div className="Todos">{todoItems}</div>;
  }
}
export default Todos;
