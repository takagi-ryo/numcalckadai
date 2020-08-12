module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    Vue: true
  },
  'extends': [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
