window.Footer = React.createClass({
  mixins: [React.addons.PureRenderMixin],

  clearCompleted: function() {
    Fluxo.callAction("Todos", "clearCompleted");
  },

  renderClearCompletedBtn: function() {
    if (this.props.completedCount <= 0) { return; }

    return (
      <button onClick={this.clearCompleted} className="clear-completed">
        Clear completed
      </button>
    );
  },

  renderCounter: function() {
    var label = this.props.itemsLeftCount == 1 ? "item" : "items";

    return (
      <span className="todo-count">
        <strong>{this.props.itemsLeftCount}</strong> {label} left
      </span>
    );
  },

  render: function() {
    var cx = React.addons.classSet;

    return (
      <footer className="footer">
        {this.renderCounter()}

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

        {this.renderClearCompletedBtn()}
      </footer>
    );
  }
});
