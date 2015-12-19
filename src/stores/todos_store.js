import Fluxo from "fluxo-js";
import TodoStore from "./todo_store.js";

export default class extends Fluxo.CollectionStore {
  static store = TodoStore

  static childrenDelegate = [
    "toggleDone",
    "closeEdit"
  ]

  static computed = {
    activeCount: ["stores:change:done", "add", "remove"],
    completedCount: ["stores:change:done", "add", "remove"],
    isEmpty: ["add", "remove"]
  }

  static subset = {
    filtered: ["change:currentFilter", "stores:change:done"]
  }

  updateContent (cid, content) {
    let store = this.find(cid);

    store.updateContent(content);

    if (store.data.isEmpty) {
      this.remove(store);
    }
  }

  isEmpty () {
    return this.stores.length === 0;
  }

  completedTodos () {
    return this.where({ done: true });
  }

  activeTodos () {
    return this.where({ done: false });
  }

  activeCount () {
    return this.activeTodos().length;
  }

  completedCount () {
    return this.completedTodos().length;
  }

  removeByCid (cid) {
    var store = this.find(cid);
    this.remove(store);
  }

  updateDone (checked) {
    this.stores.forEach(store => store.setAttribute("done", checked));
  }

  editMode (cid) {
    this.stores.forEach(store => store.closeEdit());
    this.find(cid).editMode();
  }

  clearFilter () {
    this.unsetAttribute("currentFilter");
  }

  filterCompleted () {
    this.setAttribute("currentFilter", "completed");
  }

  filterActive () {
    this.setAttribute("currentFilter", "active");
  }

  clearCompleted () {
    this.resetStores(this.activeTodos());
  }

  filtered () {
    var stores;

    switch (this.data.currentFilter) {
      case "active":
        stores = this.activeTodos();
        break;
      case "completed":
        stores = this.completedTodos();
        break;
      default:
        stores = this.stores;
        break;
    }

    return stores;
  }
};
