import React from 'react';
import 'bulma/css/bulma.css'

const Message = (props) => {
  return (
    <article className={`message ${props.className}`}>
      <div className='message-header'>
        <p>{props.title}</p>
        <button className='delete' aria-label='delete'></button>
      </div>
      <div className='message-body'>
        {props.children}
      </div>
    </article>
  )
}

  export default Message;