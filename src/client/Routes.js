import React from "react";
import Home from "./components/Home.component";
import UsersList from "./components/UsersList.component";

export default [
  { path: "/", component: Home, exact: true },
  { path: "/users", component: UsersList },
];
