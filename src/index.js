import express from "express";
import renderer from "./helpers/renderer";
const app = express();

// EXPRESS TO MAKE THIS DIRECTORY AVAILABLE TO BROWSERS
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(renderer());
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
