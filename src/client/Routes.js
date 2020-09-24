import React from "react";
import Home from "./components/Home.component";
import UsersList, { loadData } from "./components/UsersList.component";

export default [
  { path: "/", component: Home, exact: true },
  { loadData, path: "/users", component: UsersList },
];
