import React from 'react'
import './Tools.css';
import './ToolsPhone.css';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import react from '../../../assets/react.png';

function Tools() {
  return (
    <div className="tools">
        <div className="page_number3">
            <p id="page_3">00003</p>
        </div>
        <div className="ToolsContentContainer">
            <h2>React</h2>
            <p>My website harnesses the power of React, a dynamic and versatile framework, combined with the elegance and functionality of Material-UI. This winning combination not only enhances user experience but also makes it accessible and effective, even for beginners.</p>
            <br></br>
            <a href='https://react.dev'>Learn React <ArrowOutwardRoundedIcon fontSize='small'/></a>
        </div>
        <div className="ToolsContainer"> 
            <img src={`${react}`} alt="Your GIF" loop/>
        </div>
    </div>
  )
}

export default Tools