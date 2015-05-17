window.TodoForm = React.createClass({
  getInitialState: function() {
    return {};
  },

  onSubmit: function (evt) {
    evt.preventDefault();

    if (!this.state.content) {
      alert("Enter with the ToDo content.");
      return;
    }

    Fluxo.callAction("Todos", "create", { content: this.state.content });

    this.setState({ content: "" });
  },

  onChange: function(evt) {
    this.setState({ content: evt.target.value });
  },

  render: function() {
    return (
      <form onSubmit={this.onSubmit} className="header">
        <h1>todos</h1>
        <input value={this.state.content}
               onChange={this.onChange}
               className="new-todo"
               placeholder="What needs to be done?" />
      </form>
    );
  }
});
