'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _autoprefixer = require('autoprefixer');

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _package = require('./package.json');

var _package2 = _interopRequireDefault(_package);

var _env = require('./lib/env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var join = function join(p) {
  return _path2.default.join(__dirname, p);
};
var version = _package2.default.version;

exports.default = {
  entry: {
    client: _env2.default.local ? [
    /**
     * https://github.com/glenjamin/webpack-hot-middleware#config
     *
     * path - The path which the middleware is serving the event stream on
     * timeout - The time to wait after a disconnection before attempting to reconnect
     * overlay - Set to false to disable the DOM-based client-side overlay.
     * reload - Set to true to auto-reload the page when webpack gets stuck.
     * noInfo - Set to true to disable informational console logging.
     * quiet - Set to true to disable all console logging.
     */
    'webpack-hot-middleware/client?reload=true&overlay=false', 'style!./client/less/index.less', './client'] : ['file?name=css/client.css!extract!./client/less/index.less', './client']
  },
  // vendor: [
  //   './client/css/animate.min.css',
  //   './client/css/bootstrap.min.css',
  //   './client/css/font-awesome.min.css',
  //   './client/js/jquery.min.js',
  //   './client/js/bootstrap.min.js',
  //   './client/js/jquery.easing.min.js',
  //   './client/js/jquery.fittext.js',
  //   './client/js/jquery.qrcode.min.js',
  //   './client/js/wow.min.js',
  // ],
  output: {
    path: join('./public/'),
    filename: 'js/[name].js'
  },
  // publicPath: '/js/',
  devtool: _env2.default.local ? 'inline-source-map' : [],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.babel', '.jsx']
  },
  module: {
    noParse: [/jquery|min/, /img/],
    loaders: [{
      test: /\.(babel|jsx?)$/,
      include: /client|lib/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0', 'react'],
        cacheDirectory: true,
        plugins: ['transform-runtime']
      }
    }, {
      test: /\.less$/,
      loader: 'css!postcss!less?noIeCompat'
    }, {
      test: /\.(jpg)$/,
      loader: 'url',
      query: {
        limit: 10 * 1000, // 10kb
        minetype: 'application/font-woff'
      }
    }, {
      test: /\.woff(2)?/,
      loader: 'url',
      query: {
        limit: 10 * 1000, // 10kb
        minetype: 'application/font-woff'
      }
    }, {
      test: /\.(ttf)/,
      loader: 'url',
      query: {
        limit: 10 * 1000, // 10kb
        minetype: 'application/octet-stream'
      }
    }, {
      test: /\.(eot|svg)/,
      loader: 'file',
      query: {
        name: 'fonts/[name].[ext]'
      }
    }]
  },
  postcss: function postcss() {
    return [_autoprefixer2.default];
  },
  plugins: [new _webpack2.default.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'js/vendor.js'
  }), new _webpack2.default.optimize.OccurrenceOrderPlugin(true)].concat(_env2.default.local ? [new _webpack2.default.DefinePlugin({
    'process.env': {
      NODE_ENV: (0, _stringify2.default)('development'),
      VERSION: (0, _stringify2.default)(version)
    }
  }), new _webpack2.default.HotModuleReplacementPlugin(), new _webpack2.default.NoErrorsPlugin()] : [new _webpack2.default.DefinePlugin({
    'process.env': {
      NODE_ENV: (0, _stringify2.default)('production'),
      VERSION: (0, _stringify2.default)(version)
    }
  }), new _webpack2.default.optimize.DedupePlugin(), new _webpack2.default.optimize.UglifyJsPlugin({
    minimize: true,
    sourceMap: false,
    compressor: {
      warnings: false
    }
  })])
};