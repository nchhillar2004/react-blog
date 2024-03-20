import React from 'react'
import Gif from '../../../assets/code-coding.gif';
import './Gif.css';
import './GifPhone.css';
import { siteConfig } from '../../../data/site';

function GifComponent() {
  return (
    <div className="gif">
        <div className="page_number2">
            <p id="page_1">00002</p>
        </div>
        <div className="alwayson">
          <h1>Always On</h1>
          <h2>{siteConfig.owner}</h2>
        </div>
        <div className="GifContainer">
            <img src={`${Gif}`} alt="Your GIF" loop/>
        </div>
        <div className="GifContentContainer">
          <p>I am a diligent first-year Bachelors of Computer Applications student at <a href='https://mdu.ac.in/'>Maharshi Dayanand University, Rohtak</a>, hailing from Bahadurgarh, Haryana, India. My unwavering passion for technology fuels my aspiration to become a proficient software developer. Eager to harness my skills and knowledge to innovate in the ever-evolving tech world.</p>
        </div>
        HERE
    </div>
  )
}

export default GifComponent