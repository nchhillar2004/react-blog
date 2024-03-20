import React from 'react'
import logo from "../../../assets/logo.png";
import './Resume.css';

function Resume() {
  return (
    <div className="cvComponent">
      <div className="page_number8">
                    <p id="page_8">00008</p>
              </div>
      <div className="cv_container">
        <a href="./Resume.pdf" download = "Nishant_Chhillar_Resume.pdf">Download CV</a><br></br>
        HEERE
            <div className="body_logo" target="_blank">
                <a href="https://nishantchhillar.tech">
                    <img src={`${logo}`} alt="logo"></img>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Resume;