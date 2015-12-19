import React from "react";
import SmartInput from "./smart_input.js";

const ENTER_KEY_CODE = 13;

export default class extends React.Component {
  render () {
    return (
      <div className="header">
        <h1>
          todos
        </h1>

        <SmartInput
          value={this.props.content}
          onBlur={evt => this.props.actions.updateContent(evt.target.value)}
          onKeyDown={this.onKeyDown.bind(this)}
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </div>
    );
  }

  onKeyDown (evt) {
    if (evt.which === ENTER_KEY_CODE) {
      this.props.actions.create(evt.target.value);
    }
  }
}
