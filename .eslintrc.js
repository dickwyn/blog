module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
      },
    ],
  },
  plugins: ['prettier'],
  env: {
    jest: true,
    node: true,
  },
};
