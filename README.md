# DDG shared eslint configuration

This is a shared eslint configuration used across several DDG projects.

## How to set up your project with this config

- This config is meant to be used with ESLint 9+ AND Prettier, so make sure you are using those in your project.
- add a dev NPM dependency: `github:duckduckgo/eslint-config#<GIT_COMMIT_OR_TAG>`
- in your `eslint.config.js`, import this config and put it in the configuration array. You probably want it after other "recommended" configs, and before project-specific rules.

  ```js
  import someConfig from "some-other-config-you-use";
  import ddgConfig from '@duckduckgo/eslint-config'
  export default [
      someConfig,
      ...ddgConfig,
      {
          rules: {
              // your project-specific rules here
          },
      }
  ];
  ```

## Prettier is required
This config disables ESLint formatting rules (through [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier/)), so you are expected to rely on [Prettier](https://prettier.io/) to do the formatting. Make sure you have Prettier set up in your project.
Currently we don't have a shared Prettier config, but we recommend using this one:
```json
{
    "singleQuote": true,
    "printWidth": 140,
    "tabWidth": 4
}
```

## ESLint plugins
This config **already includes** the following plugins, so you don't need to install them explicitly:
- [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n)
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)
- [`eslint-plugin-promise`](https://github.com/eslint-community/eslint-plugin-promise)
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier/)

It also includes **recommended** configuration from [`@eslint/js`](https://www.npmjs.com/package/@eslint/js) (but not for other plugins).

## TypeScript
This config does not include TypeScript-specific rules, and does not depend on [`typescript-eslint`](https://typescript-eslint.io/). The reason for that is that typescript plugin disables some standard JS rules, and this would mess things up for pure-JS projects. If you are using TypeScript, you can add `typescript-eslint` to your project and configure it separately. You can check existing DDG projects for examples.
