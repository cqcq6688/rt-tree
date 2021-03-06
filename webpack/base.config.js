import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const baseConfig = {
  entry: undefined,
  output: {
    path: path.resolve('./docs/assets'),
    filename: '[name].bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel',
      exclude: /node_modules/
    }, { 
      test: /\.json$/, 
      loader: 'json' 
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!less?sourceMap')
    }, { 
      test: /\.(jpe?g|gif|png)$/, 
      loader: 'url-loader?name=images/[name].[ext]'
    }, { 
      test: /\.(eot|ttf|svg|woff2?)(\?.*)?$/, 
      loader: 'url-loader?name=fonts/[name].[ext]'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new ExtractTextPlugin('bundle.css')
  ]
};


export default baseConfig;
