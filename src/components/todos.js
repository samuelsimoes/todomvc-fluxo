import React from "react";
import Todo from "./todo.js";

export default class extends React.Component {
  render () {
    return (
      <ul className="todo-list">
        {this.renderTodos()}
      </ul>
    );
  }

  renderTodos () {
    return this.props.stores.map(todoData => {
      return (
        <Todo
          {...todoData}
          actions={this.props.actions}
          key={todoData.id}
        />
      );
    });
  }
}
