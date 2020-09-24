import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createReduxStore from "./helpers/createStore";

const app = express();

// EXPRESS TO MAKE THIS DIRECTORY AVAILABLE TO BROWSERS
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createReduxStore();
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
