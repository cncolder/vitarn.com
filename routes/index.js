'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaCompose = require('koa-compose');

var _koaCompose2 = _interopRequireDefault(_koaCompose);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = require('../lib/debug')('app:routes'); /**
                                                  * Routers
                                                  *
                                                  * Import all routers at here.
                                                  */

var router = new _koaRouter2.default().get('/', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:

            ctx.render('index', {
              env: {
                env: process.env.NODE_ENV
              },
              lang: ctx.acceptsLanguages('zh', 'en') || 'en'
            });
            ctx.status = 200;

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })),
      _this = undefined;
  return function (_x) {
    return ref.apply(_this, arguments);
  };
}());

var index = router.routes();

exports.default = (0, _koaCompose2.default)([index]);