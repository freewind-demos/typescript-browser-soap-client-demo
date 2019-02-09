import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  mode: "development",
  entry: './entry.ts',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};
