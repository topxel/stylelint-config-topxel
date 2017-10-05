# stylelint-config-topxel

Topxel's shareable rules and configuration for [stylelint](https://stylelint.io/): a mighty, modern CSS linter and fixer that helps you avoid errors and enforce consistent conventions in your stylesheets.

Use it as is or as a foundation for your own custom stylint configuration.

&nbsp;

## Installation

Install `stylelint` and `stylelint-config-topxel` either with Yarn or npm:

**With Yarn**

```bash
yarn add --dev stylelint stylelint-config-topxel
```

**With npm**

```bash
npm install --save-dev stylelint stylelint-config-topxel
```

&nbsp;

## Setup
Topxel's shareable stylelint rules are bundled in `stylelint-config-topxel` package. To enable these rules add a `stylelint` property in your `package.json` or create a `.stylelintrc` file in the root directory. Although we encourage using the first method to avoid having hidden files in your project. See the [stylelint configuration docs](https://stylelint.io/user-guide/configuration/) for more details.

```json
{
  "stylelint": {
    "extends": "stylelint-config-topxel"
  }
}
```

&nbsp;

## Using the linter in the CLI

You can run stylelint by adding a custom linting script to your `package.json`. Keep in mind that you must provide the specific relative path where your css files are located. See the [stylelint CLI docs](https://stylelint.io/user-guide/cli/) for more details.

```json
{
  "scripts": {
    "stylelint": "stylelint 'example/styles/*.css'"
  }
}
```

**Running the script with Yarn**

```bash
yarn run stylelint
```

**Running the script with npm**

```bash
npm run stylelint
```

&nbsp;

## Using the linter with your favourite code editor

Running the linter in the CLI is great but it doesn't provide instant feedback while you are writing your code. That's why we always encourage our team to extend the code editor with some tools that can help with this task.

Any of the extensions bellow will read your config from `package.json` or `.stylelintrc` and start live linting your css files inside the editor, so no further configuration is needed.

### Atom

Use the `apm` command to install [linter](https://atom.io/packages/linter) and [linter-stylelint](https://atom.io/packages/linter-stylelint) Atom packages. If the `apm` command is not available in your shell, check that the `Atom Shell Commands` are installed.

```bash
apm install linter linter-stylelint
```

### VSCode

1. Run [Install extension](https://code.visualstudio.com/docs/editor/extension-gallery#_install-an-extension) command from [Command Palette](https://code.visualstudio.com/Docs/editor/codebasics#_command-palette).
2. Search and choose `stylelint`.
3. Enable the linter in the VS Code [settings](https://code.visualstudio.com/docs/getstarted/settings), while disabling the built-in CSS and SCSS linter:

```json
{
  "stylelint.enable": true,
  "css.validate": false,
  "scss.validate": false
}
```

### Sublime Text

Use [Package Control](https://packagecontrol.io/installation) to install the linter plugin.

1. In Sublime Text, bring up the [Command Palette](http://docs.sublimetext.info/en/sublime-text-3/extensibility/command_palette.html) and type `install`. Select `Package Control: Install Package`.
2. When the list of available packages appears, type `linter` and select `SublimeLinter`.
3. Repeat step 1 and when the package list appears again, type `stylelint` and select `SublimeLinter-contrib-stylelint`.

&nbsp;

## Extending the config

If you want to extend or override some of the rules in this configuration, simply add a `"rules"` key to your config. See the [stylelint rules configuration docs](https://stylelint.io/user-guide/configuration/#rules) for more details.

For example, to override the rule `string-quotes` from double to single and turn off the `number-leading-zero` rule:

```json
{
  "extends": "stylelint-config-topxel",
  "rules": {
    "string-quotes": "single",
    "number-leading-zero": null
  }
}
```
&nbsp;

## License

Copyright (c) 2017 [Topxel](https://github.com/topxel) - Licensed under the [MIT License](./LICENSE).
