let socket = io()
let connectFirst = true
socket.on('connect', () => {
  if (!connectFirst) {
    console.log('server re-connected')
    window.location.replace(window.location.href)
  } else {
    console.log('server connected')
    connectFirst = false
  }
})
