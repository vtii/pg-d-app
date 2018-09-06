// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {remote} = require('electron')

document.getElementById('minimize-button').addEventListener('click', () => {
  remote.getCurrentWindow().minimize();
});

document.getElementById('min-max-button').addEventListener('click', () => {
  const currentWindow = remote.getCurrentWindow()
  if(currentWindow.isMaximized()) {
    currentWindow.unmaximize();
  } else {
    currentWindow.maximize();
  }
});

document.getElementById('close-button').addEventListener('click', () => {
  remote.app.quit();
});