const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/index.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'index.css',
              outputPath: 'dist/'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};