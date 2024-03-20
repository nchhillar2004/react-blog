import React from 'react'
import PostView from '../../Views/Posts Views/PostView';
import './Skills.css';
import './SkillsPhone.css';
import { skills } from '../../../data/skills';

function Skills() {
  const Read = 'Read More';
  return (
    <div className='Skills'>
        <div className="page_number5">
                    <p id="page_5">00005</p>
              </div>
        <div className="SkillsTitle">
          <p>Nishant Chhillar</p>
          <h1>Skills</h1>
        </div>
        <div className="SkillsContainer">
          {skills.map((skill, index) => (
            <PostView key={index} {...skill} />
          ))}
        </div>
    </div>
  )
}

export default Skills