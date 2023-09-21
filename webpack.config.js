
const path = require('path');

module.exports = {
  entry: './src/app/index.js', // Ruta al archivo de entrada
  output: {
    path: path.resolve(__dirname, 'src/public'), // Carpeta de salida para los archivos generados
    filename: 'bundle.js', // Nombre del archivo generado
  },
  module:{
    rules:[
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        }
    ]
  }
};