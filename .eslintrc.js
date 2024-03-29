module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    // '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eol-last':'off',
    'no-useless-escape':'off',
    'no-unused-vars':'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
