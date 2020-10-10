import React from 'react';
import './video.css';

let iframeSource = process.env.YOUTUBE_IFRAME_SOURCE || "https://www.youtube.com/embed/5qap5aO4i9A"

function Video() {
  return (
    <div className="Video">
      <iframe width="560" height="315" src={iframeSource}
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  );
}

export default Video;
