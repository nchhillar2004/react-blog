import React from 'react'
import GifComponent from './2Gif/GifComponent';
import Tools from './3tools/Tools';
import AboutMe from './4About Me/AboutMe';
import Skills from './5Skills/Skills';
import Publications from './6Publication/Publications';
import Resume from './6Resume/Resume';
import './Body.css';

function Body() {
  return (
    <div className="body">
        <GifComponent/>
        <Tools/>
        <AboutMe/>
        <Skills/>
        <Publications/>
        <Resume />
    </div>
  )
}

export default Body