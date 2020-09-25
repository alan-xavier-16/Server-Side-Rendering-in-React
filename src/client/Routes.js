import React from "react";
import HomePage from "./pages/HomePage.component";
import UsersListPage from "./pages/UsersListPage.component";

export default [
  { ...HomePage, path: "/", exact: true },
  { ...UsersListPage, path: "/users" },
];
