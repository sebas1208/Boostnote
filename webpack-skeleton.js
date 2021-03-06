const webpack = require('webpack')
const path = require('path')
const NodeTargetPlugin = require('webpack/lib/node/NodeTargetPlugin')

var config = {
  entry: {
    main: './browser/main/index.js',
    finder: './browser/finder/index.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
    alias: {
      'lib': path.resolve(__dirname, 'lib'),
      'browser': path.resolve(__dirname, 'browser')
    }
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new NodeTargetPlugin()
  ],
  externals: [
    'electron',
    'socket.io-client',
    'md5',
    'superagent',
    'superagent-promise',
    'lodash',
    'markdown-it',
    'moment',
    'highlight.js',
    'markdown-it-emoji',
    'fs-jetpack',
    '@rokt33r/markdown-it-math',
    '@rokt33r/sanitize-html',
    'markdown-it-checkbox'
  ]
}

module.exports = config

