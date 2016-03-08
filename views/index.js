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

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
      var __ = (0, _i18n2.default)(this.props.lang);

      return _react2.default.createElement(
        _layout2.default,
        { lang: this.props.lang },
        _react2.default.createElement(
          'nav',
          { id: 'mainNav', className: 'navbar navbar-default navbar-fixed-top' },
          _react2.default.createElement(
            'div',
            { className: 'container-fluid' },
            _react2.default.createElement(
              'div',
              { className: 'navbar-header' },
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1' },
                _react2.default.createElement(
                  'span',
                  { className: 'sr-only' },
                  __('Toggle navigation')
                ),
                _react2.default.createElement('span', { className: 'icon-bar' }),
                _react2.default.createElement('span', { className: 'icon-bar' }),
                _react2.default.createElement('span', { className: 'icon-bar' })
              ),
              _react2.default.createElement(
                'a',
                { className: 'navbar-brand page-scroll', href: '#page-top' },
                __('ViTarn')
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
              _react2.default.createElement(
                'ul',
                { className: 'nav navbar-nav' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'page-scroll', href: '/web' },
                    __('Web design')
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'page-scroll', href: '/wechat' },
                    __('Wechat platform')
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'page-scroll', href: '/app' },
                    __('App develop')
                  )
                )
              ),
              _react2.default.createElement(
                'ul',
                { className: 'nav navbar-nav navbar-right' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'page-scroll', href: '#about' },
                    __('About')
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'page-scroll', href: '#services' },
                    __('Services')
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'page-scroll', href: '#portfolio' },
                    __('Portfolio')
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'page-scroll', href: '#contact' },
                    __('Contact')
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'header',
          { style: { backgroundImage: "url('../img/header.jpg')" } },
          _react2.default.createElement(
            'div',
            { className: 'header-content' },
            _react2.default.createElement(
              'div',
              { className: 'header-content-inner' },
              _react2.default.createElement(
                'h1',
                null,
                __('Make science and technology more simple')
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'p',
                null,
                __('Information technology will be anytime, anywhere in the future. Same as air.')
              ),
              _react2.default.createElement(
                'a',
                { href: '#about', className: 'btn btn-primary btn-xl page-scroll' },
                __('Find Out More')
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'bg-primary', id: 'about' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-lg-8 col-lg-offset-2 text-center' },
                _react2.default.createElement(
                  'h2',
                  { className: 'section-heading' },
                  __('We\'ve got what you need!')
                ),
                _react2.default.createElement('hr', { className: 'light' }),
                _react2.default.createElement(
                  'p',
                  { className: 'text-faded' },
                  __('We can help you build better website, manage sns network.')
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#services', className: 'btn btn-default btn-xl page-scroll' },
                  __('Get Started!')
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'services' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-lg-12 text-center' },
                _react2.default.createElement(
                  'h2',
                  { className: 'section-heading' },
                  __('At Your Service')
                ),
                _react2.default.createElement('hr', { className: 'primary' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-lg-3 col-md-6 text-center' },
                _react2.default.createElement(
                  'div',
                  { className: 'service-box' },
                  _react2.default.createElement('i', { className: 'fa fa-4x fa-diamond wow bounceIn text-primary' }),
                  _react2.default.createElement(
                    'h3',
                    null,
                    __('Remarkable Quality')
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'text-muted' },
                    __('We are all OCD-like young people. We are more focus on quality than you.')
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-lg-3 col-md-6 text-center' },
                _react2.default.createElement(
                  'div',
                  { className: 'service-box' },
                  _react2.default.createElement('i', { className: 'fa fa-4x fa-paper-plane wow bounceIn text-primary', 'data-wow-delay': '.1s' }),
                  _react2.default.createElement(
                    'h3',
                    null,
                    __('Ready to Ship')
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'text-muted' },
                    __('You can join our design and development process to see what happened about your product.')
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-lg-3 col-md-6 text-center' },
                _react2.default.createElement(
                  'div',
                  { className: 'service-box' },
                  _react2.default.createElement('i', { className: 'fa fa-4x fa-newspaper-o wow bounceIn text-primary', 'data-wow-delay': '.2s' }),
                  _react2.default.createElement(
                    'h3',
                    null,
                    __('Up to Date')
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'text-muted' },
                    __('We update dependencies to keep things fresh.')
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-lg-3 col-md-6 text-center' },
                _react2.default.createElement(
                  'div',
                  { className: 'service-box' },
                  _react2.default.createElement('i', { className: 'fa fa-4x fa-heart wow bounceIn text-primary', 'data-wow-delay': '.3s' }),
                  _react2.default.createElement(
                    'h3',
                    null,
                    __('Made with Love')
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'text-muted' },
                    __('We have to make your products with love these days!')
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'no-padding', id: 'portfolio' },
          _react2.default.createElement(
            'div',
            { className: 'container-fluid' },
            _react2.default.createElement(
              'div',
              { className: 'row no-gutter' },
              _react2.default.createElement(
                'div',
                { className: 'col-lg-4 col-sm-6' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://bao--bao.com', target: '_blank', className: 'portfolio-box' },
                  _react2.default.createElement('img', { src: 'img/portfolio/bao--bao.com.jpg', className: 'img-responsive', alt: '' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'portfolio-box-caption' },
                    _react2.default.createElement(
                      'div',
                      { className: 'portfolio-box-caption-content' },
                      _react2.default.createElement(
                        'div',
                        { className: 'project-category text-faded' },
                        __('Web design')
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'project-name' },
                        __('Bao Bao')
                      )
                    ),
                    _react2.default.createElement('div', { className: 'qrcode', 'data-qrtext': 'http://bao--bao.com' })
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-lg-4 col-sm-6' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://haoduotongshu.com', target: '_blank', className: 'portfolio-box' },
                  _react2.default.createElement('img', { src: 'img/portfolio/haoduotongshu.com.jpg', className: 'img-responsive', alt: '' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'portfolio-box-caption' },
                    _react2.default.createElement(
                      'div',
                      { className: 'portfolio-box-caption-content' },
                      _react2.default.createElement(
                        'div',
                        { className: 'project-category text-faded' },
                        __('Web design')
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'project-name' },
                        __('Hao Duo Tong Shu')
                      )
                    ),
                    _react2.default.createElement('div', { className: 'qrcode', 'data-qrtext': 'http://haoduotongshu.com' })
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-lg-4 col-sm-6' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://kdt.im/09kxHKmEj', target: '_blank', className: 'portfolio-box' },
                  _react2.default.createElement('img', { src: 'img/portfolio/haoduotongshu-youzan.jpg', className: 'img-responsive', alt: '' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'portfolio-box-caption' },
                    _react2.default.createElement(
                      'div',
                      { className: 'portfolio-box-caption-content' },
                      _react2.default.createElement(
                        'div',
                        { className: 'project-category text-faded' },
                        __('Wechat shop')
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'project-name' },
                        __('Hao Duo Tong Shu')
                      )
                    ),
                    _react2.default.createElement('div', { className: 'qrcode', 'data-qrtext': 'http://kdt.im/09kxHKmEj' })
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-lg-4 col-sm-6' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://haoduotongshu.com/poll/outlets', target: '_blank', className: 'portfolio-box' },
                  _react2.default.createElement('img', { src: 'img/portfolio/i-love-the-blue-sky.jpg', className: 'img-responsive', alt: '' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'portfolio-box-caption' },
                    _react2.default.createElement(
                      'div',
                      { className: 'portfolio-box-caption-content' },
                      _react2.default.createElement(
                        'div',
                        { className: 'project-category text-faded' },
                        __('Event')
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'project-name' },
                        __('"I love the blue sky" children drawings poll')
                      )
                    ),
                    _react2.default.createElement('div', { className: 'qrcode', 'data-qrtext': 'http://haoduotongshu.com/poll/outlets' })
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'aside',
          { className: 'bg-dark' },
          _react2.default.createElement(
            'div',
            { className: 'container text-center' },
            _react2.default.createElement(
              'div',
              { className: 'call-to-action' },
              _react2.default.createElement(
                'h2',
                null,
                __('We make more cool projects everydays.')
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'contact' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-lg-8 col-lg-offset-2 text-center' },
                _react2.default.createElement(
                  'h2',
                  { className: 'section-heading' },
                  __('Let\'s Get In Touch!')
                ),
                _react2.default.createElement('hr', { className: 'primary' }),
                _react2.default.createElement(
                  'p',
                  null,
                  __('Ready to start your next project with us? That\'s great! Give us a call or send us an email and we will get back to you as soon as possible!')
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-lg-4 col-lg-offset-2 text-center' },
                _react2.default.createElement('i', { className: 'fa fa-phone fa-3x wow bounceIn' }),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'tel:123-4567-8900' },
                    '123-4567-8900'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-lg-4 text-center' },
                _react2.default.createElement('i', { className: 'fa fa-envelope-o fa-3x wow bounceIn', 'data-wow-delay': '.1s' }),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'mailto:feedback@vitarn.com' },
                    'feedback@vitarn.com'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'aside',
          { className: 'bg-dark' },
          _react2.default.createElement(
            'div',
            { className: 'container text-center' },
            _react2.default.createElement(
              'div',
              { className: 'call-to-action' },
              _react2.default.createElement(
                'p',
                null,
                'Copyright 2015 ViTarn.com'
              )
            )
          )
        )
      );
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;