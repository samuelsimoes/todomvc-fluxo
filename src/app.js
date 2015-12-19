import "todomvc-app-css/index.css";
import "./css/app.css";

import { Router } from "react-router";
import React from "react";
import ReactDOM from "react-dom";
import AppController from "./components/app_controller.js"

const routes = [
  { path: "/", component: AppController },
  { path: "/completed", component: AppController, filter: "completed" },
  { path: "/active", component: AppController, filter: "active" },
]

ReactDOM.render(
  <Router routes={routes} />,
  window.document.getElementById("app-ctn")
);
