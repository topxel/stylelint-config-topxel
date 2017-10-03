var merge = require('merge');

module.exports = {
  plugins: ['stylelint-order'],
  rules: merge(
    require('./rules/possibleErrors')
    require('./rules/limitLanguageFeatures')
    require('./rules/style')
    require('./rules/plugins/order')
  )
},
