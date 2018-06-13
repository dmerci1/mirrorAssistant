import React, { Component } from 'react';
import { Button } from 'react-bootstrap';




class TrayWindow extends Component {
  render() {
    return (
      <div>
        <h3>Tray Window</h3>
        <Button bsStyle="danger" bsSize="large" block>Launch Mirror</Button>
      </div>
    );
  }
}

export default TrayWindow;
