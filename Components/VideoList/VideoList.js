import React from 'react';
import { connect } from 'react-redux';
import './VideoList.css';

import VideoListEntry from '../VideoListEntry/VideoListEntry';

const VideoList = ({videos}) => {
  const mappedVideos = videos.map(video => {
    return <VideoListEntry key={video.etag} video={video}/>
  });

  return (
    <div className="video-list">
      {mappedVideos}
    </div>
  )
}



const mapStateToProps = (state, ownProps) => {
  return {
    videos: state.videoList
  }
}

export default connect(mapStateToProps, null)(VideoList);