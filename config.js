'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ms = require('ms');

var _ms2 = _interopRequireDefault(_ms);

var _env = require('./lib/env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opts = {
  compress: {
    // filter: function(content_type) {
    //   return /text/i.test(content_type)
    // },
    // threshold: 2048,
    // flush: require('zlib').Z_SYNC_FLUSH
  },

  etag: {
    // weak: false,
  },

  serveStatic: {
    root: './public',
    // defer: true,
    maxAge: (0, _ms2.default)('1 day')
  },

  // defer: false,
  // hidden: false,
  // index: 'index.html',
  react: {
    path: './views',
    extname: '.js',
    doctype: '<!DOCTYPE html>',
    cache: _env2.default.deploy,
    beautify: _env2.default.local
  }
};

if (_env2.default.deploy) {
  opts.serveStatic.maxAge = (0, _ms2.default)('1 month');
}

exports.default = opts;