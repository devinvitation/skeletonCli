const path = require("path")

module.exports = {
  mode: "development",
  entry : "./src/javascript/app.js",
  output : {
    path: path.resolve(__dirname, "assets"),
    filename: "bundle.js"
  }
}
