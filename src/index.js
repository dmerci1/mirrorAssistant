import { app, BrowserWindow, Menu, MenuItem, Tray } from 'electron';
import { enableLiveReload } from 'electron-compile';

const path = require('path');

let mainWindow;
let trayWindow;
let tray;

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
    height: 500,
    frame: false,
    resizable: false,
    show: false,
  });
  trayWindow.loadURL(`file://${__dirname}/tray.html`);

  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
const iconPath = path.join(__dirname, `./assets/${iconName}`);
 tray = new Tray(iconPath);
  tray.on('click', (event, bounds) => {
    const { x, y } = bounds;
    const { height, width } = trayWindow.getBounds();
    if (trayWindow.isVisible()) {
      trayWindow.hide();
    } else {
      const yPosition = process.platform === 'darwin' ? y : y - height;
      trayWindow.setBounds({
        x: x - width / 2,
        y: yPosition,
        height,
        width
      });
      trayWindow.show();
    }
  });
}

const template = [
  {
    label: 'Options',
    submenu: [
      {
        role: 'toggledevtools',
      },
      {
        role: 'reload',
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
