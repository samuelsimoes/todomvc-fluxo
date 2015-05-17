window.TodosActionHandler = {
  initialize: function (todos) {
    this.todos = todos;
    this.todos.addBunchFromData(this._persistedStoreData());
  },

  _persistedStoreData: function() {
    return (JSON.parse(window.localStorage.getItem("todos")) || []);
  },

  _persistStoreData: function() {
    window.localStorage.setItem("todos", JSON.stringify(this.todos.storesToJSON()))
  },

  update: function (todoId, data) {
    var todo = this.todos.find(todoId);
    todo.set(data);
    this._persistStoreData();
  },

  toggleAll: function(done) {
    this.todos.toggleAll(done);
    this._persistStoreData();
  },

  create: function(data) {
    var id = Math.random().toString().slice(2, 11),
        data = Fluxo.extend(data, { id: id });

    this.todos.addFromData(data);
    this._persistStoreData();
  },

  destroy:function(todoId) {
    var todo = this.todos.find(todoId);
    this.todos.remove(todo);
    this._persistStoreData();
  },

  clearCompleted: function() {
    this.todos.clearCompleted();
    this._persistStoreData();
  },

  filterCompleted: function() {
    this.todos.filterCompleted();
  },

  filterPending: function() {
    this.todos.filterPending();
  },

  clearFilter: function() {
    this.todos.clearFilter();
  }
};
