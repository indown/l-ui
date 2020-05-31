const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  // devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    library: 'l-ui',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  externals: {
    'react': {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "react",
    },
    'react-dom': {
      commonjs: "ReactDOM",
      commonjs2: "ReactDOM",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
};
