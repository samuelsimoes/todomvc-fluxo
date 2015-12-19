import React from "react";
import SmartInput from "./smart_input.js";

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

export default class extends React.Component {
  render () {
    return (
      <li className={this.containerClass()}>
        {this.view()}
        {this.form()}
      </li>
    );
  }

  containerClass () {
    var classes = "";

    if (this.props.editMode) {
      classes += " editing ";
    }

    if (this.props.done) {
      classes += " completed ";
    }

    return classes;
  }

  toggleDone () {
    this.props.actions.toggleDone(this.props.cid);
  }

  destroy () {
    this.props.actions.destroy(this.props.cid);
  }

  editMode () {
    this.props.actions.editMode(this.props.cid);
  }

  onKeyDown (evt) {
    if (evt.which === ESC_KEY_CODE) {
      this.props.actions.closeEdit(this.props.cid);
    } else if (evt.which === ENTER_KEY_CODE) {
      this.props.actions.update(this.props.cid, evt.target.value);
    }
  }

  view () {
    if (this.props.editMode) { return; }

    return (
      <div className="view" onDoubleClick={this.editMode.bind(this)}>
        <input
          className="toggle"
          type="checkbox"
          checked={this.props.done}
          onClick={this.toggleDone.bind(this)}
        />

        <label>
          {this.props.content}
        </label>

        <button
          className="destroy"
          onClick={this.destroy.bind(this)}
        ></button>
      </div>
    );
  }

  form () {
    if (!this.props.editMode) { return; }

    return (
      <SmartInput
        onKeyDown={this.onKeyDown.bind(this)}
        ref="content"
        className="edit"
        autoFocus="true"
        value={this.props.content}
      />
    );
  }
}
