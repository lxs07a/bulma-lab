import React, { Component } from 'react'
import 'bulma/css/bulma.css'

import Navbar from './Navbar.js'
import Form from './Form.js'

class Signup extends Component {
  render() {
    return (
      <div className='signup'>
        <Navbar/>
        <Form/>
      </div>
    );
  }
}

export default Signup;