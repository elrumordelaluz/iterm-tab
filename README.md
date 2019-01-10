# iterm-tab

Open iterm tab and run a command programmatically

## Install

```
yarn add iterm-tab
```

## Usage

```
const itermTab = require('iterm-tab')

itermTab(`cd .. && echo "my command"`)
  .then(() => console.log('yay'))
```

## API

itermTab(command, options)

#### command

The command to execute after open the new tab

Type: `String`

#### options

Type: `Object`

##### options.close

Closes tab immediately or after n seconds. Useful to launch persistent services like `mongod`.

Type: `Boolean|Number`

Default: `false`

##### options.delayAfterRun

Wait numbero of seconds before let continue the tasks.

Type: `Number`

Default: `0`

## Example

Take a look into [this example](https://github.com/elrumordelaluz/iterm-tab/blob/master/test.js) running two instances of `iterm-tab`
