import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home.component";
import UsersList from "./components/UsersList.component";

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={UsersList} />
    </div>
  );
};
