const path = require('path');

const DEV_MODE = process.env.NODE_ENV === 'development';

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  context: path.resolve('src'),
  mode: process.env.NODE_ENV,
  entry: {
    app: ['./index.js'],
  },
  devtool: false,
  output: {
    filename: `js/[name].js`,
    chunkFilename: `js/[name]-chunk.js`,
    path: path.resolve('dist'),
    publicPath: '/',
  },
  cache: {
    type: 'filesystem',
  },
  resolve: {
    modules: [path.resolve('src'), path.resolve('node_modules')],
    alias: {
      '@': path.resolve('src'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [],
  // https://webpack.js.org/configuration/stats/
  stats: DEV_MODE ? 'errors-only' : 'minimal',
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          enforce: true,
        },
      },
    },
  },
};
