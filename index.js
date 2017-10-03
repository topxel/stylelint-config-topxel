var merge = require('merge');

module.exports = {
  plugins: ['stylelint-order'],
  rules: merge(require('./rules/general'))
},
