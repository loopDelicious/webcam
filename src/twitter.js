import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './video.css';

let screenName = process.env.TWITTER_SCREEN_NAME || "petuniaGray"

function Twitter() {

  return (
    <div className="Twitter timeline">
        <TwitterTimelineEmbed
        // sourceType="profile"
        // screenName="petuniaGray"
        // sourceType="url"
        // url="https://twitter.com/petuniaGray"
        sourceType="likes"
        screenName={screenName}
        options={{height: 800}}
        />
    </div>
  );
}

export default Twitter;
