module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'comma-dangle': 0,
  },
};
