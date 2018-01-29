const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true
  },
  module: {
    rules: [
      {
        // test: /\.scss$/, use: ['style-loader', 'css-loader?sourceMap', 'resolve-url-loader', 'sass-loader?sourceMap']
        test: /\.scss$/, use: [
          { loader: 'style-loader' }, 
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'resolve-url-loader'},
          { loader: 'sass-loader', options: { sourceMap: true } }
        ],
      }
    ]
  }
}