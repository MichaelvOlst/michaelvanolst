module.exports = {
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  'env': {
    'browser': true,
    'es2021': true,
    'amd': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [ 'react' ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [ 1, { extensions: [ '.js' ] } ],
    'react/prop-types': 'off',
    'indent': [ 'error', 2 ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ],
    'comma-dangle': [ 'error', { arrays: 'always-multiline', objects: 'always-multiline', imports: 'always-multiline', exports: 'always-multiline', functions: 'always-multiline' } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'no-multi-spaces': [ 'error' ],
    'no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 0, maxEOF: 0 } ],
  },
};
