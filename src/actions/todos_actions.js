export default class {
  constructor (todos) {
    this.todos = todos;

    var cache = window.localStorage.getItem("todos");

    if (cache) {
      this.todos.addStores(JSON.parse(cache));
    }

    this.todos.on(["add", "remove", "stores:change"], this.persistCache.bind(this));
  }

  persistCache () {
    var cache = JSON.stringify(this.todos.storesToJSON());
    window.localStorage.setItem("todos", cache);
  }

  filter (filterName) {
    this.todos.setAttribute("currentFilter", filterName);
  }

  updateAllDone (check) {
    this.todos.updateDone(check);
  }

  update (cid, content) {
    this.todos.updateContent(cid, content);
    this.closeEdit(cid);
  }

  toggleDone (cid) {
    this.todos.toggleDone(cid);
  }

  destroy (cid) {
    this.todos.removeByCid(cid);
  }

  editMode (cid) {
    this.todos.editMode(cid);
  }

  closeEdit (cid) {
    this.todos.closeEdit(cid);
  }

  clearCompleted () {
    this.todos.clearCompleted();
  }
}
