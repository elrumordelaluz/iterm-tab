const itermTab = require('./')

const init = async () => {
  await itermTab(`echo "my command"`)
  await itermTab(`echo "my command 2"`)
}
init()
