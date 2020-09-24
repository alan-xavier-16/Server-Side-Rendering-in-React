const path = require("path");

module.exports = {
  // Inform webpack to build a bundle for nodeJS, rather than for the browser
  target: "node",
  // Tell webpack the root file of the server application
  entry: "./src/index.js",
  // Tell webpack where to put the output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  // Tell webpack to run babel on every JS file it processes
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
