import React, { Component } from 'react'
import CoolButton from './CoolButton.js'
import FormField from './FormField.js'

class Form extends Component {
  render() {
    return (
      <div className='form'>
        <FormField label='Name' type='text' placeholder='e.g Alex Smith' />
        <FormField label='Email' type='email' placeholder='e.g. alexsmith@gmail.com' />
        <FormField label='Password' type='password' placeholder='e.g. t645w32ghv!65' />
        <CoolButton className='is-small is-success'>Submit</CoolButton>
      </div>
    );
  }
}

export default Form;