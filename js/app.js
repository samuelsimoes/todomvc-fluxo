(function (window) {
  "use strict";

  var todos = new window.Todos();

  Fluxo.registerActionHandler("Todos", window.TodosActionHandler, todos);

  var routes = new Grapnel();

  routes.get("", function() {
    Fluxo.callAction("Todos", "clearFilter");
  });

  routes.get("active", function() {
    Fluxo.callAction("Todos", "filterPending");
  });

  routes.get("completed", function() {
    Fluxo.callAction("Todos", "filterCompleted");
  });

  React.render(
    <AppComponent todos={todos} />,
    window.document.getElementById("app-ctn")
  );
})(window);
