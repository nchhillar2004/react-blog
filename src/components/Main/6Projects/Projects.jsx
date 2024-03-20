import React from 'react'
import PostView from '../../Views/Posts Views/PostView';
import './Projects.css';
import './ProjectsPhone.css';
import { projects } from '../../../data/projects';

function Publications() {
    const Source = 'Source Code';
    const Visit = 'Live Preview';
  return (
    <div className='Projects'>
        <div className="page_number6">
                    <p id="page_6">00006</p>
              </div>
        <div className="PostsTitle">
          <p>Projects by Nishant Chhillar</p>
          <h1>Projects</h1>
        </div>
        <div className="PostsContainer">
          {projects.map((project, index) => (
            <PostView key={index} {...project} />
          ))}
        </div>
    </div>
  )
}

export default Publications