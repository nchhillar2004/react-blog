import React from 'react'
import './Footer.css';
import FooterOptionsView from '../Views/Footer/Footer Options View/FooterOptionsView';
import FooterHeadingView from '../Views/Footer/Footer Heading View/FooterHeadingView';
import FooterTextView from '../Views/Footer/Footer Text View/FooterTextView';

function Footer() {
  return (
    <div className="footer">
      <div className="Footercontainer">
        <FooterHeadingView heading='Nishant Chhillar'/>
        <FooterTextView text='BCA Student'/>
        <FooterTextView text='Maharshi Dayanand University, Rohtak'/><br></br>
        <FooterOptionsView name='Linkedin' link='https://in.linkedin.com/in/nishant-chhillar-177b7b278'/>
        <FooterOptionsView name='Github' link='https://github.com/nchhillar2004'/>
        <FooterOptionsView name='Mail' link='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpddJdTFcvNHgkjwRJFrDZVWWNTrRgDVwPZWGWjxMzKHMtfwKfWNpFPpktPbLWNbJBsfqB'/>
        <FooterOptionsView name='View Vlog' link='videos.html'/>
        <FooterOptionsView name='Back to top' link='#'/>
        <hr></hr>
        <FooterTextView text='Copyright @2024, All rights reserved.'/>
      </div>
    </div>
  )
}

export default Footer