/** STARTUP POINT FOR CLIENT-SIDE APP */
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home.component";

ReactDOM.hydrate(<Home />, document.getElementById("root"));
