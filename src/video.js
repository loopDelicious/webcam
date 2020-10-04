import React from 'react';
import './video.css';

function Video() {
  return (
    <div className="Video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default Video;