window.Todo = Fluxo.Store.extend({
  computed: {
    isDone: ["change"]
  },

  isDone: function() {
    return this.data.done;
  }
});

window.Todos = Fluxo.CollectionStore.extend({
  store: window.Todo,

  computed: {
    pendingCount: ["change"],
    completedCount: ["change"],
    count: ["change"]
  },

  toggleAll: function(checked) {
    _.invoke(this.stores, "setAttribute", "done", checked);
  },

  clearFilter: function() {
    this.setAttribute("currentFilter", undefined);
  },

  filterCompleted: function() {
    this.setAttribute("currentFilter", "completed");
  },

  filterPending: function() {
    this.setAttribute("currentFilter", "pending");
  },

  completedTodos: function() {
    return _.filter(this.stores, function(store) {
      return store.isDone();
    });
  },

  pendingTodos: function() {
    return _.filter(this.stores, function(store) {
      return !store.isDone();
    });
  },

  clearCompleted: function() {
    var pendingTodos = this.pendingTodos();
    this.removeAll();
    this.addBunchStores(pendingTodos);
  },

  pendingCount: function() {
    return this.pendingTodos().length;
  },

  completedCount: function() {
    return this.completedTodos().length;
  },

  storesToJSON: function() {
    var stores;

    switch (this.data.currentFilter) {
      case "pending":
        stores = this.pendingTodos();
        break;
      case "completed":
        stores = this.completedTodos();
        break;
      default:
        stores = this.stores;
        break;
    }

    return _.map(stores, function(store) {
      return store.toJSON();
    });
  },

  count: function() {
    return this.stores.length;
  }
});
