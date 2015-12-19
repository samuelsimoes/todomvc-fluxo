import { Link } from "react-router";
import React from "react";

export default class extends React.Component {
  renderClearCompletedBtn () {
    if (this.props.completedCount <= 0) { return; }

    return (
      <button onClick={this.props.clearCompleted.bind(this)} className="clear-completed">
        Clear completed
      </button>
    );
  }

  renderActiveCounter () {
    var label = this.props.activeCount == 1 ? "item" : "items";

    return (
      <span className="todo-count">
        <strong>{this.props.activeCount}</strong> {label} left
      </span>
    );
  }

  renderFilterLink (label, filterName='') {
    var className = "";

    if (this.props.currentFilter === filterName) {
      className += "selected";
    }

    return <Link className={className} to={`/${filterName}`}>{label}</Link>;
  }

  render () {
    return (
      <footer className="footer">
        {this.renderActiveCounter()}

        <ul className="filters">
          <li>
            {this.renderFilterLink('All')}
          </li>
          <li>
            {this.renderFilterLink('Active', 'active')}
          </li>
          <li>
            {this.renderFilterLink('Completed', 'completed')}
          </li>
        </ul>

        {this.renderClearCompletedBtn()}
      </footer>
    );
  }
}
