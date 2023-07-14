const path = require('path')
 
module.exports = () => {
  return {
    mode: 'production',
    target: ['es5', 'node'],
    resolve: {
      extensions: ['.js', '.ts', '.map']
    },
    entry: {
        index: path.join(__dirname, './src/main.js')
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          use: [{ loader: 'ts-loader' }],
          test: /\.ts$/
        }
      ]
    }
  }
}