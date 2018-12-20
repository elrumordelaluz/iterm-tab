const { promisify } = require('util')
const child_process = require('child_process')
const exec = promisify(child_process.exec)

const args = process.argv

const open = (cmd, name, close = false) => `osascript -e '
  if application "iTerm2" is running then
    tell application "iTerm2"
      tell current window
        create tab with default profile
        tell current session
          set name to "${name}"
          write text "${cmd.replace(/"/g, '\\"')}"
        end tell
        ${
          close
            ? `
        tell current tab
          tell current session
            write text (unique ID)
          end tell
          ${Number.isInteger(close) ? `delay ${close}` : ''}
          close
        end tell
        `
            : ''
        }
      end tell
    end tell
  else
    activate application "iTerm2"
  end if
'`

const itermTab = async (cmd, name, close, options) => {
  try {
    return await exec(open(cmd, name, close), options)
  } catch (err) {
    process.exit(0)
    console.log({ err })
  }
}

if (args.length > 2) {
  itermTab(args.slice(2).join(' '))
  process.exit(0)
}

module.exports = itermTab
