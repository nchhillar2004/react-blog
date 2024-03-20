import React from 'react'
import './Tools.css';
import './ToolsPhone.css';

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
            <a href='https://react.dev'>Learn React HERE</a>
        </div>
        <div className="ToolsContainer"> 
            <img src='https://cloud.appwrite.io/v1/storage/buckets/654e20b545bf9be170de/files/654e2251d7a86763a583/view?project=654e1e78768f34eac437&mode=admin' alt="Your GIF" loop/>
        </div>
    </div>
  )
}

export default Tools