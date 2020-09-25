import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createReduxStore from "./helpers/createStore";

const app = express();

// EXPRESS TO MAKE THIS DIRECTORY AVAILABLE TO BROWSERS
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createReduxStore();

  // LOAD SPECIFIC ROUTE DATA
  const promises = matchRoutes(Routes, req.path).map(({ route }) =>
    route.loadData ? route.loadData(store) : null
  );

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
