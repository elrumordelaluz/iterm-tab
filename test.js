const itermTab = require('./')

const init = async () => {
  await itermTab(`cd .. && echo "Command with persisting tab…"`)
  await itermTab(`echo "Command will close in 3 secs"`, 3)
  await itermTab(`echo "Command will close immediately"`, true)
}
init()
