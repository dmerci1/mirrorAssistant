import React from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import Auth from './Authentication/Auth';





export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Auth />
      </BrowserRouter>
    );
  }
}
