import React from 'react'
import ReactDOMServer from 'react-dom/server'
import __ from '../lib/i18n'


export default class extends React.Component {
  render() {
    const title = __('ViTarn')
    const head = (
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

        <title>{ title }</title>

        {/* Set render engine for 360 browser */}
        <meta name="renderer" content="webkit" />

        {/* No Baidu Siteapp */}
        <meta httpEquiv="Cache-Control" content="no-siteapp" />

        {/* Disable telephone detection */}
        <meta name="format-detection" content="telephone=no" />

        {/* Disable tap highlight */}
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/img/favicon.png" />

        {/* Add to homescreen for Chrome on Android */}
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" sizes="192x192" href="/img/app-icon72x72@2x.png" />

        {/* Add to homescreen for Safari on iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={ title } />
        <link rel="apple-touch-icon-precomposed" href="/img/app-icon72x72@2x.png" />

        {/* Tile icon for Win8 (144x144 + tile color) */}
        <meta name="msapplication-TileImage" content="/img/app-icon72x72@2x.png" />
        <meta name="msapplication-TileColor" content="#0e90d2" />

        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
      </head>
    )

    const body = (
      <body id="page-top">
        {this.props.children}

        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/jquery.easing.min.js"></script>
        <script src="/js/jquery.fittext.js"></script>
        <script src="/js/jquery.qrcode.min.js"></script>
        <script src="/js/wow.min.js"></script>
        <script src="/js/vendor.js"></script>
        <script src="/js/client.js"></script>
      </body>
    )

    return (
      <html className="no-js">
        {head}
        {body}
      </html>
    )
  }
}
