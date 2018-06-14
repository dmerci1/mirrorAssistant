import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
      <div>
      <h1>Sign In Form</h1>
      <form>
        <fieldset>
          <label>Email</label>
        </fieldset>
        <fieldset>
          <label>Password</label>
        </fieldset>
        <Link to="/">Redux Auth</Link>

      </form>
      </div>
    );
  }
}

export default Signup;
