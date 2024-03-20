import React from 'react'
import image from '../../../assets/image.jpg';
import './AboutMe.css';
import './AboutMePhone.css';

function AboutMe() {
  return (
    <div className='AboutMe'>
        <div className="page_number4">
            <p id="page_4">00004</p>
        </div>
        <div className="FrameContainer">
          <div className="Frame">
            <img src={`${image}`} alt='Profile Pic'></img>
            <h2><a href='https://in.linkedin.com/in/nishant-chhillar-177b7b278'>View Linkedin<br></br>Profile</a></h2>
          </div>
        </div>
        <div className="AboutContainer">
            <p>I'm deeply passionate about exploring new programming languages and staying at the forefront of emerging technologies. I thrive on creating valuable applications and websites, constantly seeking to innovate and improve. My ultimate goal is to carve a meaningful path in the technology field, where I can leverage my skills to make a positive impact and contribute to the ever-evolving landscape of digital innovation.</p>
        </div>
        HERE
    </div>
  )
}

export default AboutMe