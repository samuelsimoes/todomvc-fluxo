import React from "react";
import MainSection from "./main_section.js";
import Connector from "fluxo-react-connect-stores";
import Todos from "../stores/todos_store.js";
import Todo from "../stores/todo_store.js";
import TodosActions from "../actions/todos_actions.js";
import TodosFormActions from "../actions/todo_form_actions.js";

export default class extends React.Component {
  constructor (props) {
    super(props);

    this.stores = {
      todos: new Todos(),
      todoForm: new Todo()
    };

    this.actions = {
      todos: new TodosActions(this.stores.todos),
      todoForm: new TodosFormActions(this.stores.todoForm, this.stores.todos)
    };

    this.setFilter(props.route.filter);

    this.component = Connector(MainSection, this.stores);
  }

  componentWillReceiveProps (nextProps) {
    this.setFilter(nextProps.route.filter);
  }

  setFilter (filterName) {
    this.actions.todos.filter(filterName || "");
  }

  render () {
    return <this.component actions={this.actions} />;
  }
};
