import Fluxo from "fluxo-js";

export default class extends Fluxo.ObjectStore {
  static attributeParsers = {
    content: function (value) {
      return (typeof value === "string") ? value.trim() : value;
    }
  }

  static computed = {
    isEmpty: ["change:content"]
  }

  static defaults = {
    done: false,
    editMode: false
  }

  isEmpty () {
    return !this.data.content;
  }

  toggleDone () {
    this.setAttribute("done", !this.data.done);
  }

  editMode () {
    this.setAttribute("editMode", true);
  }

  closeEdit () {
    this.setAttribute("editMode", false);
  }

  updateContent (content) {
    this.setAttribute("content", content);
  }
}
