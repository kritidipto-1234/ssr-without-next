var { ProvidePlugin } = require("webpack");

const clientConfig = {
  entry: {
    bundle: "./client/index.js",
  },
  mode: "development",
  target: "web",
  resolve: {
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: __dirname + "/dist/client",
    filename: "[name].js",
  },
  plugins: [
    new ProvidePlugin({
      React: "react",
    }),
  ],
};

const serverConfig = {
  entry: {
    server: "./server.js",
  },
  devtool: "inline-source-map",
  mode: "development",
  target: "node",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
  },
  plugins: [
    new ProvidePlugin({
      React: "react",
    }),
  ],
};

module.exports = [clientConfig, serverConfig];
