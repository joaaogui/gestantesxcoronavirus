module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: ['off', 2],
    'vue/require-default-prop': 'off',
    'no-unused-vars': 'warn',
    'no-new': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/no-unused-components': 'warn',
    'no-multiple-empty-lines': 'warn',
    'vue/html-closing-bracket-spacing': 'off',
    'space-before-function-paren': 'off',
    'object-curly-spacing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'quotes': 'off',
    'vue/valid-v-for': 'warn',
    'comma-dangle': 'warn'
  }
}
