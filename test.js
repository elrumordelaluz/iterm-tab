const itermTab = require('./')

const init = async () => {

  await itermTab(`cd .. && echo "Command with persisting tab…"`)
  await itermTab(`cd .. && echo "Command splits tab vertically"`,{
    splitTab:'vertically'
  })
  await itermTab(`cd .. && echo "Command splits tab horizontally and will close in 2 secs"`,{
    splitTab:'horizontally', close:2
  })
  await itermTab(`cd .. && echo "Command with persisting tab and delay…"`, {
    splitTab:false, delayAfterRun:1
  })
  await itermTab(`echo "Command will close in 3 secs"`, { close: 3 })
  await itermTab(`echo "Command will close immediately"`, {
    close: true,
  })
}
init();
