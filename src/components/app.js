import React from 'react';
import BrowserWindow from 'react-electron-browser-window';

export default class App extends React.Component {

  render() {
    return (
      <div>
      <BrowserWindow title="Hello, World!" visible={true} />

      <h1>Sup!!</h1>
      </div>
    );
  }
}
