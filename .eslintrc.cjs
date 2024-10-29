module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "i18next"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-restricted-syntax': [
      'error', "Literal[value=/\\bsemantic-ui-react\\b/i]"
    ],
    'react-hooks/exhaustive-deps': 'off',
    "i18next/no-literal-string": 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    "@typescript-eslint/no-explicit-any": "off",
    "no-extra-boolean-cast": "off",
    "no-unused-vars": "off",
    "no-unsafe-optional-chaining": "off",
    "no-console": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ]
  },
}
