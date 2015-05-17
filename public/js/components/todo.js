window.Todo = React.createClass({
  mixins: [React.addons.PureRenderMixin],

  getInitialState: function() {
    return {};
  },

  containerClass: function() {
    return React.addons.classSet({
      "completed": this.props.done,
      "editing": this.state.editing
    });
  },

  toggle: function(evt) {
    Fluxo.callAction("Todos", "update", this.props.id, { done: evt.target.checked });
  },

  destroy: function(evt) {
    Fluxo.callAction("Todos", "destroy", this.props.id);
  },

  toggleEditMode: function () {
    this.setState({ editing: !this.state.editing }, function() {
      this.refs.content.getDOMNode().focus();
    });
  },

  onSubmitEditForm: function(evt) {
    evt.preventDefault();

    Fluxo.callAction("Todos", "update", this.props.id, { content: this.state.content });

    this.setState({ editing: false });
  },

  handleKeyDownContent: function(evt) {
    if (evt.which === 27) {
      this.toggleEditMode();
    } else {
      this.setState({ content: evt.target.value });
    }
  },

  render: function() {
    return (
      <li className={this.containerClass()}>
        <div className="view" onDoubleClick={this.toggleEditMode}>
          <input className="toggle"
                 type="checkbox"
                 checked={this.props.done}
                 onClick={this.toggle} />
          <label>
            {this.props.content}
          </label>
          <button className="destroy" onClick={this.destroy}></button>
        </div>
        <form onSubmit={this.onSubmitEditForm}>
          <input onKeyDown={this.handleKeyDownContent}
                 ref="content"
                 className="edit"
                 defaultValue={this.props.content}/>
        </form>
      </li>
    );
  }
});
