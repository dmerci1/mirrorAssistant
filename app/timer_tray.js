const electron = require('electron');
const { Tray, app, Menu } = electron;

class TimerTray extends Tray {
  constructor(iconPath, trayWindow) {
    super(iconPath);

    this.trayWindow = trayWindow;

    this.setToolTip('Timer App');
    this.on('click', this.onClick.bind(this));
    this.on('right-click', this.onRightClick.bind(this));
  }

  onClick(event, bounds) {
    // Click event bounds
    const { x, y } = bounds;

    // Window height and width
    const { height, width } = this.mainWindow.getBounds();

    if (this.trayWindow.isVisible()) {
      this.trayWindow.hide();
    } else {
      const yPosition = process.platform === 'darwin' ? y : y - height;
      this.trayWindow.setBounds({
        x: x - width / 2,
        y: yPosition,
        height,
        width
      });
      this.trayWindow.show();
    }
  }

  onRightClick() {
    const menuConfig = Menu.buildFromTemplate([
      {
        label: 'Quit',
        click: () => app.quit()
      }
    ]);
    this.popUpContextMenu(menuConfig);
    }
  }
    export default TimerTray;
