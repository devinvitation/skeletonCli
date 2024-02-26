const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path")

module.exports = {
  mode: "development",
  entry : "./src/javascript/app.js",
  output : {
    path: path.resolve(__dirname, "assets"),
    filename: "bundle.js"
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
        },
        {
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "sass-loader",
            ],
        },
    ],
},
plugins: [
  new MiniCssExtractPlugin({
      filename: "bundle.css",
  }),
],
}
