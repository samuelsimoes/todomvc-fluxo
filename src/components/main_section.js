import React from "react";
import Todos from "./todos.js";
import TodoForm from "./todo_form.js";
import Footer from "./footer.js";

export default class extends React.Component {
  render () {
    return (
      <section className="todoapp">
        <TodoForm
          {...this.props.todoForm}
          actions={this.props.actions.todoForm}
        />

        <section className="main">
          {this.renderToggleCheckbox()}

          <Todos
            stores={this.props.todos.filtered}
            actions={this.props.actions.todos}
          />
        </section>

        {this.renderFooter()}
      </section>
    );
  }

  renderToggleCheckbox () {
    if (this.props.todos.isEmpty) { return; }

    return [
      <input
        className="toggle-all"
        type="checkbox"
        onChange={evt => this.props.actions.todos.updateAllDone(evt.target.checked)}
      />,
      <label htmlFor="toggle-all">
        Mark all as complete
      </label>
    ];
  }

  renderFooter () {
    if (this.props.todos.isEmpty) { return; }

    return (
      <Footer
        {...this.props.todos}
        clearCompleted={this.props.actions.todos.clearCompleted.bind(this.props.actions.todos)}
      />
    );
  }
}
