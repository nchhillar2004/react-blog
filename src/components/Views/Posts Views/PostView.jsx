import React from "react";
import "./PostView.css";

function PostView(props) {
  return (
    <div className="postView">
      <div className="postImage">
        <img src={`${props.image}`} alt={`${props.title}`}></img>
      </div>
      <div className="">
      <div className="postTitle">
        <h2>{props.title}</h2>
      </div>
      <div className="postContent">
        <p>{props.content}</p>
      </div></div>
      <div className="BottomContent">
        <a href={`${props.read}`} target="blank">
          <button className="ReadMore">Read more &#x2197;</button>
        </a>
        <div className="postTime">
          <time>{props.time}</time>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default PostView;
