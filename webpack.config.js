var webpack = require("webpack"),
    path = require("path");

module.exports = {
  entry: {
    app: ["./src/app.js", ("webpack-dev-server/client?http://localhost:" + process.env.PORT)]
  },
  output: {
    path: "./public/js",
    filename: "bundle.js",
    publicPath: "/js/"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel" },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  devServer: {
    port: process.env.PORT,
    contentBase: path.resolve(__dirname, "public")
  }
};
