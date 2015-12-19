import React from "react";

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = { value: props.value };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ value: nextProps.value });
  }

  onChange (evt) {
    this.setState({ value: evt.target.value });

    if (typeof this.props.onChange === "function") {
      this.props.onChange(evt);
    }
  }

  render () {
    return <input
      {...this.props}
      onChange={this.onChange.bind(this)}
      value={this.state.value}
    />;
  }
}
