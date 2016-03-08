'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var log = require('debug')('app:lib:i18n');

var locale = exports.locale = {
  'Welcome': '欢迎',

  'ViTarn': '维坦',

  'Page Not Found': '找不到页面',
  'Something\'s fishy here.': '什么鬼.',
  'The page you were trying to reach doesn\'t exist.': '你所搜寻的页面不存在.',
  'Why': '为什么',
  ' might this be happening?': '会发生这种情况?',
  'http://en.wikipedia.org/wiki/HTTP_404': 'http://baike.baidu.com/subview/1629577/8000618.htm',

  'Toggle navigation': '切换导航',
  'Web design': '网页设计',
  'Wechat platform': '微信平台',
  'App develop': 'App开发',
  'About': '关于',
  'Services': '服务',
  'Portfolio': '作品',
  'Contact': '联系',

  'Make science and technology more simple': '让科技更简单',
  'Information technology will be anytime, anywhere in the future. Like the air.': '信息技术终将如同空气一样随时随地围绕着您.',
  'Find Out More': '探索更多',

  'We\'ve got what you need!': '我们知您所需!',
  'We can help you build better website, manage sns network.': '我们帮你建立与众不同的网站, 管理社交网络.',
  'Get Started!': '现在开始!',

  'At Your Service': '愿为您效劳',
  'Remarkable Quality': '卓越品质',
  'We are all OCD-like young people. We are more focus on quality than you.': '我们是一群有如强迫症一般的年轻人, 我们比您更关心品质.',
  'Ready to Ship': '随时待命',
  'You can join our design and development process to see what happened about your product.': '诚邀您参与到我们的设计和开发过程中来, 亲眼见证您的产品如何成长.',
  'Up to Date': '保持更新',
  'We update dependencies to keep things fresh.': '我们不断更新时刻保持产品新鲜.',
  'Made with Love': '用心创造',
  'We have to make your products with love these days!': '我们对您的产品视如己出.',

  'Wechat shop': '微商城',
  'Event': '活动',
  'Bao Bao': '包包',
  'Hao Duo Tong Shu': '好多童书',
  '"I love the blue sky" children drawings poll': '"我爱蓝天"儿童绘画投票',

  'We make more cool projects everydays.': '更多精彩内容不断补充.',

  'Let\'s Get In Touch!': '请与我联系',
  'Ready to start your next project with us? That\'s great! Give us a call or send us an email and we will get back to you as soon as possible!': '准备好和我们一起启动您的下一个项目了? 太棒了! 给我们打个电话或者发封邮件, 我们会尽快答复您!',

  regexp: [[/User already exists with name (.+)/, '用户名 $1 已存在']]
};

exports.default = function (literal, value) {
  // placeholder empty object
  if (!literal) return '';

  // one by one
  var label = locale && locale[literal];
  if (label && !value) return label;

  // regexp replace
  var regexp = locale.regexp.find(function (arr) {
    return arr[0].test(literal);
  });
  if (regexp) return literal.replace(regexp[0], regexp[1]);

  // missing
  log('miss', literal);
  return literal;
};