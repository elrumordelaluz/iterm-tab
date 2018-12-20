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

itermTab(command, tabName, close)

#### command

Type: `String`

#### tabName

Type: `String`

#### close

Closes tab immediately or after n seconds. Useful to launch persistent services like `mongod`.

Type: `Boolean|Number`

Default: `false`

## Example

Take a look into [this example](https://github.com/elrumordelaluz/iterm-tab/blob/master/test.js) running two instances of `iterm-tab`
