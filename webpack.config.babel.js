// @flow
import path from 'path'
import webpack from 'webpack'
import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'


export default {
  entry: [
    'react-hot-loader/patch',
    './src/client',
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpe?g|gif|svg)$/, use: ['url-loader?limit=10240&name=img/[name]-[hash:6].[ext]'] },
      { test: /\.(woff2?|eot|ttf|otf)$/, use: ['url-loader?limit=10240&name=fonts/[name]-[hash:6].[ext]'] },
    ],
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: WDS_PORT,
    hot: true,
    // 为了给 HMR 设置跨域资源共享。
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
      // In case you imported plugins individually, you must also require them here:
    }),
  ],
}
