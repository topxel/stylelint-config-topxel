// For more info: https://stylelint.io/user-guide/rules/#possible-errors

module.exports = {
  // disallow invalid hex colors
  'color-no-invalid-hex': true,

  // disallow duplicate font family names
  'font-family-no-duplicate-names': true,

  // disallow an unspaced operator within calc functions
  'function-calc-no-unspaced-operator': true,

  /** disallow direction values in linear-gradient() calls that are not valid
   *  according to the standard syntax.
   */
  'function-linear-gradient-no-nonstandard-direction': true,

  // disallow (unescaped) newlines in strings
  'string-no-newline': true,

  // disallow unknown units
  'unit-no-unknown': true,

  // disallow redundant values in shorthand properties
  'shorthand-property-no-redundant-values': true,

  // disallow unknown properties
  'property-no-unknown': [true, { checkPrefixed: true }],

  // disallow !important within keyframe declarations
  'keyframe-declaration-no-important': true,

  // disallow duplicate properties within declaration blocks
  'declaration-block-no-duplicate-properties': [
    true,
    { ignore: 'consecutive-duplicates' }
  ],

  /** disallow longhand properties that can be combined into one shorthand
   *  property
   */
  'declaration-block-no-redundant-longhand-properties': true,

  /** disallow shorthand properties that override related longhand properties
   *  within declaration blocks
   */
  'declaration-block-no-shorthand-property-overrides': true,

  // disallow empty blocks
  'block-no-empty': true,

  // disallow unknown pseudo-class selectors
  'selector-pseudo-class-no-unknown': true,

  // disallow unknown pseudo-element selectors
  'selector-pseudo-element-no-unknown': true,

  // disallow unknown type selectors
  'selector-type-no-unknown': true,

  // disallow unknown media feature names
  'media-feature-name-no-unknown': true,

  // disallow unknown at-rules
  'at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: [
        'at-root',
        'content',
        'debug',
        'each',
        'else',
        'error',
        'extend',
        'for',
        'function',
        'if',
        'include',
        'mixin',
        'return',
        'warn',
        'while'
      ]
    }
  ],

  // disallow empty comments
  'comment-no-empty': true,

  // limit the depth of nesting
  'max-nesting-depth': 3,

  /** disallow selectors of lower specificity from coming after overriding
   *  selectors of higher specificity
   */
  'no-descending-specificity': true,

  // disallow duplicate selectors
  'no-duplicate-selectors': true,

  // disallow empty sources
  'no-empty-source': true,

  // disallow extra semicolons
  'no-extra-semicolons': true,

  // disallow double-slash comments (//...) which are not supported by CSS
  'no-invalid-double-slash-comments': true,

  // disallow unknown animations
  'no-unknown-animations': true
};
