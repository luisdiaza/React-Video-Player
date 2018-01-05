import React from 'react';//Go find the library called react installed as a dependency and assign it to the variable named React
import VideoListItem from './video_list_item';//Explicitly requests permission to access the code within the video_list_item module

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return(
     <VideoListItem
       onVideoSelect = {props.onVideoSelect}
       key = {video.etag}
       video = {video} />
   );
  });

  return (
    <ul className = "col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
