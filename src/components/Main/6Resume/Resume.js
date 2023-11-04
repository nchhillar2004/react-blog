import React from 'react'
import logo from "../../../assets/logo.png";
import './Resume.css';
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';

function Resume() {
  return (
    <div className="cvComponent">
      <div className="page_number7">
                    <p id="page_7">00007</p>
              </div>
      <div className="cv_container">
        <a href="./Resume.pdf" download = "Nishant_Chhillar_Resume.pdf">Download CV</a><br></br>
        <SouthRoundedIcon className='DownIcon'/>
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