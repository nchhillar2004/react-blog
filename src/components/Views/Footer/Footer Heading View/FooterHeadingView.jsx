import React from 'react'
import './FooterHeadingView.css';

function FooterHeadingView({heading}) {
  return (
    <div className="FooterHeadingView">
        <p>{heading}</p>
    </div>
  )
}

export default FooterHeadingView