export default class {
  constructor (form, todos) {
    this.form = form;
    this.todos = todos;
  }

  updateContent (content) {
    this.form.updateContent(content);
  }

  create (content) {
    this.form.updateContent(content);

    if (!this.form.data.isEmpty) {
      this.todos.addStore(this.form.toJSON());
      this.form.reset();
    }
  }
}
