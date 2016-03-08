'use strict';

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = require('./lib/debug')('app:app');

/**
 * app
 */

/**
 * import
 */

var app = new _koa2.default();

/**
 * app setup
 */

// use following snippet to make migration easier.
// https://github.com/gyson/koa-convert#migration
var _appUse = app.use;
app.use = function (mw) {
  return _appUse.call(app, (0, _koaConvert2.default)(mw));
};

/**
 * app settings
 */

app.proxy = true;
app.keys = ['vtrn'];

/**
 * app middlewares
 */

app.use(_middlewares2.default);

/**
 * server
 */

var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, function () {
  log('Server listening at http://' + HOST + ':' + PORT);
});