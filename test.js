const itermTab = require('./')

const init = async () => {
  await itermTab(`cd .. && echo "my command"`, 'hola')
  await itermTab(`echo "my command 2"`, 'ciao')
}
init()
