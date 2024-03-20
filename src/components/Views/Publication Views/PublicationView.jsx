import React from 'react'
import './PublicationView.css'

function PublicationView(props) {
  return (
    <div className='PublicationView'>
        <p>{props.precontent}<span>{props.highlight}</span>{props.postcontent}</p>
        <time>{props.time}</time>
    </div>
  )
}

export default PublicationView