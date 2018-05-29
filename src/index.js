import { app, BrowserWindow, Menu, MenuItem } from 'electron';
import { enableLiveReload } from 'electron-compile';
import windowManager from 'electron-window-manager';

/*const { app, BrowserWindow, Menu } = electron;
app.on('ready', () => {
  new BrowserWindow({});
});
*/

let mainWindow;
let trayWindow;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

function createTrayWindow() {
  trayWindow = new BrowserWindow({
    width: 300,
    height: 300,
    title: 'tray window',
  });
  trayWindow.loadURL(`file://${__dirname}/tray.html`);
}

const template = [
  {
    label: 'File',
    submenu: [
      {
        role: 'toggledevtools',
      },
      {
        label: 'Show Icon',
        click() { createTrayWindow(); }
      },
    ],
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();

  }
});
