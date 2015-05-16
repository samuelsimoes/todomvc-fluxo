window.Footer = React.createClass({
  mixins: [React.addons.PureRenderMixin],

  clearCompleted: function() {
    Fluxo.callAction("Todos", "clearCompleted");
  },

  render: function() {
    var cx = React.addons.classSet;

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.itemsLeftCount}</strong> items left
        </span>

        <ul className="filters">
          <li>
            <a className={cx({ selected: !this.props.currentFilter })}
               href="#">
               All
            </a>
          </li>
          <li>
            <a className={cx({ selected: (this.props.currentFilter === "pending") })}
               href="#active">
               Active
            </a>
          </li>
          <li>
            <a className={cx({ selected: (this.props.currentFilter === "completed") })}
               href="#completed">
               Completed
            </a>
          </li>
        </ul>

        <button onClick={this.clearCompleted} className="clear-completed">Clear completed</button>
      </footer>
    );
  }
});
