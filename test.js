const itermTab = require('./')

const init = async () => {
  await itermTab(`cd .. && echo "Command with persisting tab…"`, 'hola')
  await itermTab(`echo "Command will close in 3 secs"`, 'ciao', 3)
  await itermTab(`echo "Command will close immediately"`, 'ciao', true)
}
init()
