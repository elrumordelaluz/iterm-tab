const {promisify} = require('util')
const child_process = require('child_process')
const exec = promisify(child_process.exec)

const args = process.argv

const open = (cmd, {close = false, delayAfterRun = 0, splitTab = false}) => `osascript -e '
  if application "iTerm2" is running then
    tell application "iTerm2"
      ${
        splitTab
            ?
            `
            # Split pane
            tell current session of current window
                split ${splitTab} with default profile
            end tell
            # Exec commands
            tell second session of current tab of current window
                write text "${cmd.replace(/"/g, '\\"')}"
            end tell
            ${
                close
                    ? `
                    tell second session of current tab of current window
                        write text (unique ID)
                    ${Number.isInteger(close) ? `delay ${close}` : ''}
                        close
                    end tell
                    `
                    : ''
            }
           `
            :
            `
            tell current window
                create tab with default profile
                tell current session
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
            `
    }
        ${delayAfterRun ? `delay ${delayAfterRun}` : ''}
        ${!splitTab ? `end tell` : ''} 
    end tell
  else
    activate application "iTerm2"
  end if
'`

const itermTab = async (cmd, {close, delayAfterRun, splitTab} = {}, options) => {
    try {
        switch (splitTab) {
            case 'vertically':
                splitTab='vertically';
                break;
            case 'horizontally':
                splitTab = 'horizontally'
                break;
            default: splitTab=false;
                    break;
        }
        return await exec(open(cmd, {close, delayAfterRun, splitTab}), options)
    } catch (err) {
        process.exit(0)
        console.log({err})
    }
}

if (args.length > 2) {
    itermTab(args.slice(2).join(' '))
    process.exit(0)
}

module.exports = itermTab
