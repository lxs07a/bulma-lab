import React, { Component } from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import Container from './components/Container.js'

import Signup from './components/Signup.js'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Signup/>
        <Container/>
      </div>
    );
  }
}

export default App;
