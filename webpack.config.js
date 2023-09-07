const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    checkEmpty: './src/modules/checkEmpty.js',
    checkPasswordMatch: './src/modules/checkPasswordMatch.js',
    checkRange: './src/modules/checkRange.js',
    checkType: './src/modules/checkType.js',
    checkValue: './src/modules/checkValue.js',
    emptyErrorGenerator: './src/modules/emptyErrorGenerator.js',
    typeErrorGenerator: './src/modules/typeErrorGenerator.js',
    successTest: './src/modules/successTest.js'
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};