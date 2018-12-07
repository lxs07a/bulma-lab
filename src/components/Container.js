import React from 'react';
import Message from './Message.js';
import 'bulma/css/bulma.css'
import './Container.css'

const Container = () => {
  return (
    <div className="container">
      <Message className='is-info' title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  )
}

  export default Container;