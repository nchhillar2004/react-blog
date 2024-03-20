import React from 'react'
import './FooterTextView.css';


function FooterTextView({text}) {
  return (
    <div className='FooterTextView'>
        <p>{text}</p>
    </div>
  )
}

export default FooterTextView