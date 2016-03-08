'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _env = require('../lib/env');

var _env2 = _interopRequireDefault(_env);

var _i18n = require('../lib/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(_class).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var lang = this.props.lang;

      var __ = (0, _i18n2.default)(lang);
      var title = __('ViTarn');

      var head = _react2.default.createElement(
        'head',
        null,
        _react2.default.createElement('meta', { charSet: 'utf-8' }),
        _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
        _react2.default.createElement('meta', { name: 'description', content: '' }),
        _react2.default.createElement('meta', { name: 'keywords', content: '' }),
        _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }),
        _react2.default.createElement(
          'title',
          null,
          title
        ),
        _react2.default.createElement('meta', { name: 'renderer', content: 'webkit' }),
        _react2.default.createElement('meta', { httpEquiv: 'Cache-Control', content: 'no-siteapp' }),
        _react2.default.createElement('meta', { name: 'format-detection', content: 'telephone=no' }),
        _react2.default.createElement('meta', { name: 'msapplication-tap-highlight', content: 'no' }),
        _react2.default.createElement('link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }),
        _react2.default.createElement('meta', { name: 'mobile-web-app-capable', content: 'yes' }),
        _react2.default.createElement('link', { rel: 'icon', sizes: '192x192', href: '/img/app-icon72x72@2x.png' }),
        _react2.default.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }),
        _react2.default.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }),
        _react2.default.createElement('meta', { name: 'apple-mobile-web-app-title', content: title }),
        _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', href: '/img/app-icon72x72@2x.png' }),
        _react2.default.createElement('meta', { name: 'msapplication-TileImage', content: '/img/app-icon72x72@2x.png' }),
        _react2.default.createElement('meta', { name: 'msapplication-TileColor', content: '#0e90d2' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/animate.min.css' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/bootstrap.min.css' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/font-awesome.min.css' }),
        _env2.default.deploy ? _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/client.css' }) : _react2.default.createElement('style', null)
      );

      var body = _react2.default.createElement(
        'body',
        { id: 'page-top' },
        this.props.children,
        _react2.default.createElement('script', { src: '/js/jquery.min.js' }),
        _react2.default.createElement('script', { src: '/js/bootstrap.min.js' }),
        _react2.default.createElement('script', { src: '/js/jquery.easing.min.js' }),
        _react2.default.createElement('script', { src: '/js/jquery.fittext.js' }),
        _react2.default.createElement('script', { src: '/js/jquery.qrcode.min.js' }),
        _react2.default.createElement('script', { src: '/js/wow.min.js' }),
        _react2.default.createElement('script', { src: '/js/vendor.js' }),
        _react2.default.createElement('script', { src: '/js/client.js' })
      );

      return _react2.default.createElement(
        'html',
        { className: 'no-js' },
        head,
        body
      );
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;