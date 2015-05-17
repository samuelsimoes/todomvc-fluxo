window.AppComponent = React.createClass({
  mixins: [Fluxo.WatchComponent],

  listenProps: ["todos"],

  toggleAll: function(evt) {
    this.setState({ toggleAll: evt.target.checked });
    Fluxo.callAction("Todos", "toggleAll", evt.target.checked);
  },

  renderTodos: function() {
    return (
      <ul className="todo-list">
        {this.state.todos.stores.map(function(todo) {
          return <Todo key={todo.id} done={todo.isDone} id={todo.id} content={todo.content} />;
        })}
      </ul>
    );
  },

  renderFooter: function() {
    if (this.state.todos.data.count <= 0) { return; }

    return (<Footer currentFilter={this.state.todos.data.currentFilter}
                   itemsLeftCount={this.state.todos.data.pendingCount} />);
  },

  render: function() {
    return (
      <section className="todoapp">
        <TodoForm />

        <section className="main">
          <input className="toggle-all"
                 type="checkbox"
                 checked={this.state.toggleAll}
                 onClick={this.toggleAll} />
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>

          {this.renderTodos()}
        </section>

        {this.renderFooter()}
      </section>
    );
  }
});
