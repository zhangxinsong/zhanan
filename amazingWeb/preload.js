const { dialog, BrowserWindow } = require('electron').remote
const { shell } = require('electron');

messageBox = (options, callback) => {
    dialog.showMessageBox(BrowserWindow.getFocusedWindow(), options, index => {
        utools.showMainWindow()
        callback(index);
    })
}

open = url => {
    shell.openExternal(url);
}