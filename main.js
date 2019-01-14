// Modules to control application life and create native browser window
import { app, BrowserWindow, ipcMain } from 'electron'
import { getFrames } from './src/video'
import { getJsonFrame } from './src/json'
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
export let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600, /*icon: 'assets/500x500.png',*/ 'web-preferences': { 'direct-write': false, 'subpixel-font-scaling': false } })

  // and load the index.html of the app.
  mainWindow.loadFile('dist/src-react/index.html')

  // Open the DevTools.
  if (process.env.ENV === 'dev') {
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.setMenu(null) // disable menu
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Sends the frame (currentFrame) to the front-end. Var currentFrame is an integer
// from 0 to the index of the last frame.
function sendFrame(currentFrame) {
  console.log("\tFrame: ", currentFrame)
  if (fileObj.video !== '') {
    console.log("Not implimented")
    //frames = getFrames(fileObj.video)
    //mainWindow.webContents.send('currentFrame', frames[currentFrame])
  }
  if (fileObj.json !== '') {
    getJsonFrame(fileObj.json).then( val => {
      jsonArr = val
      mainWindow.webContents.send('currentJsonFrame', jsonArr[currentFrame]) // Sends the current JSON object to the frontend
      mainWindow.webContents.send('frameIDX', currentFrame)
    })
  }
}

let fileObj = {'video': '', 'json': ''} // Init all paths to ''
let currentFrame = 0  // Init starting frame to index 0
let jsonArr = null
let totalFrameLen = 0
/*
if ((videoFrames !== null) && (jsonFrames !== null)) {
  if (jsonFrames === videoFrames) {
    console.log("Video Frame and JSON frame count match! ", jsonFrames)
  }else {
    console.log("Frame length mismatch.\n\tVideo Frames: ", videoFrames, "\n\tJSON Frames: ", jsonFrames)
  }
}*/

ipcMain.on('newModFiles', (e, newFileObj) => {
  fileObj = newFileObj
  mainWindow.webContents.send('modFiles', fileObj)
  getJsonFrame(fileObj.json).then( val => {
    jsonArr = val
    totalFrameLen = jsonArr.length - 1
    console.log("JSON successfully read. Total length is ", totalFrameLen)
    mainWindow.webContents.send('totalFrameLen', totalFrameLen)
  })
  sendFrame(currentFrame)
})

ipcMain.on('changeFrame', (e, newFrame) => {
  currentFrame = newFrame
  sendFrame(currentFrame)
})

// need to wait for react to finishing building Dom
ipcMain.on('windowDoneLoading', () => {
  currentFrame = 0
  sendFrame(currentFrame)
  mainWindow.webContents.send('totalFrameLen', totalFrameLen)
  mainWindow.webContents.send('modFiles', fileObj)
})