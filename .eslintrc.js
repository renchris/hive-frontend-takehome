module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  plugins: [
    'react',
  ],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    semi: ['error', 'never'],
    'react/function-component-definition': [1, {
      namedComponents: 'arrow-function',
    }],
    'react/jsx-props-no-spreading': [1, {
      html: 'ignore',
    }],
    'no-use-before-define': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx'] },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
}
