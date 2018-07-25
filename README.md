# iterm-tab

Open iterm tab and run a command programmatically

## Install

```
yarn add iterm-tab
```

## Usage

```
const itermTab = require('iterm-tab')

itermTab(`cd .. && echo "my command"`, 'hola')
  .then(() => console.log('yay'))
```

## API

itermTab(command, tabName)

#### command

Type: `String`

#### tabName

Type: `String`

## Example

Take a look into [this example](https://github.com/elrumordelaluz/iterm-tab/blob/master/test.js) running two instances of `iterm-tab`
