import React from 'react'
import './PostView.css';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

function PostView({image, title, content, time, date, button,read}) {
  return (
    <div className='postView'>
        <div className="postImage">
            <img src={`${image}`} alt={`${title}`}></img>
        </div>
        <div className="postTitle">
            <h2>{title}</h2>
        </div>
        <div className="postContent">
            <p>{content}</p>
        </div>
        <div className="BottomContent">
            <a href={`${read}`} target='blank'>
                <button className='ReadMore'>{button}<ArrowOutwardRoundedIcon fontSize='small'/></button>
            </a>
            <div className="postTime">
                <time>{time}</time>
                <p>{date}</p>
            </div>
        </div>
    </div>
  )
}

export default PostView