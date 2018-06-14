import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';

 class Auth extends Component {
   render() {
    return (
      <div>
        <Link to="/">Auth Router</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <Route path="/" />
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
      </div>
    );
 }
}

export default Auth;
