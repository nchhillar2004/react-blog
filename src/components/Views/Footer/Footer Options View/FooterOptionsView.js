import React from 'react'
import './FooterOptionsView.css';

function FooterOptionsView({name, link}) {
  return (
    <div className="footerOptionsView">
        <p><a href={`${link}`}>{name}</a></p>
    </div>
  )
}

export default FooterOptionsView