module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', '@vue/airbnb', '@vue/prettier', '@vue/typescript'],
  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    'import/order': 0,
    'import/no-named-as-default': 0,
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/require-default-prop': 'off',
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }],
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'consistent-return': 'off',
    'no-return-await': 'off',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    'no-unresolved': 'off',
    'no-dupe-else-if': 0,
    'no-import-assign': 0,
    'no-setter-return': 0,
    'no-unused-vars': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', 'src/stories/**', 'tests/**'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
