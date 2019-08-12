/* eslint-disable global-require */
const merge = require('merge');

module.exports = {
  processors: ['stylelint-processor-styled-components'],
  plugins: ['stylelint-order'],
  rules: merge(
    require('./rules/possibleErrors'),
    require('./rules/limitLanguageFeatures'),
    require('./rules/style'),
    require('./rules/plugins/order')
  ),
  syntax: 'scss'
};
