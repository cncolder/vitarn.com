'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _env = require('../lib/env');

var _env2 = _interopRequireDefault(_env);

var _compress = require('./compress');

var _compress2 = _interopRequireDefault(_compress);

var _conditionalGet = require('./conditional-get');

var _conditionalGet2 = _interopRequireDefault(_conditionalGet);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _etag = require('./etag');

var _etag2 = _interopRequireDefault(_etag);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _react = require('./react');

var _react2 = _interopRequireDefault(_react);

var _responseTime = require('./response-time');

var _responseTime2 = _interopRequireDefault(_responseTime);

var _serveStatic = require('./serve-static');

var _serveStatic2 = _interopRequireDefault(_serveStatic);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = require('../lib/debug')('app:middlewares:index');

var middlewaresForApp = [_responseTime2.default, _logger2.default, _compress2.default, _conditionalGet2.default, _etag2.default, _serveStatic2.default, _react2.default, _routes2.default];

if (_env2.default.local) {
  middlewaresForApp = [require('./webpack-dev').default, require('./webpack-hot').default].concat(middlewaresForApp);
}

exports.default = _koaConvert2.default.compose(middlewaresForApp);