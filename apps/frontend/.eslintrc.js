module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:compat/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'tailwindcss',
    'simple-import-sort',
    'jest',
    'promise',
    'compat',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    // Override default ESLint and Airbnb rules
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-import-module-exports': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring
    'react/require-default-props': 'off', // Allow non-defined react props as undefined
    'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
    'react-hooks/exhaustive-deps': 'off', // Incorrectly report needed dependency with Next.js router
    '@next/next/no-img-element': 'off', // Not using next/image with SSG mode
    '@next/next/link-passhref': 'off', // Only needed when the child of Link wraps an <a> tag
    '@typescript-eslint/comma-dangle': 'off', // Avoid conflict between ESLint and Prettier
    '@typescript-eslint/consistent-type-imports': 'error', // Ensure `import type` is used when necessary
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ], // Overrides Airbnb and enables restricted syntax
    'import/prefer-default-export': 'off', // Named export is easier to refactor
    'tailwindcss/no-custom-classname': 'off', // Disabled for easier use of custom Tailwind classes
    'simple-import-sort/imports': 'error', // Enforce import sorting
    'simple-import-sort/exports': 'error', // Enforce export sorting
    'unused-imports/no-unused-imports': 'error', // Remove unused imports
    'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // TypeScript specific rules
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      webpack: {
        config: require.resolve(
          './.app-configs/configs/webpack.config.eslint.ts',
        ),
      },
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
