const itermTab = require('./')

const init = async () => {
  await itermTab(`cd .. && echo "Command with persisting tab…"`)
  await itermTab(`cd .. && echo "Command with persisting tab and delay…"`, {
    delayAfterRun: 5,
  })
  await itermTab(`echo "Command will close in 3 secs"`, { close: 3 })
  await itermTab(`echo "Command will close immediately"`, {
    close: true,
  })
}
init()
