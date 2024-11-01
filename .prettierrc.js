/** @type {import('prettier').Config} */
const config = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  htmlWhitespaceSensitivity: 'ignore',

  plugins: ['prettier-plugin-packagejson', 'prettier-plugin-organize-imports'],

  overrides: [
    {
      files: 'tsconfig*.json',
      options: {
        parser: 'jsonc',
      },
    },
  ],
}

export default config
