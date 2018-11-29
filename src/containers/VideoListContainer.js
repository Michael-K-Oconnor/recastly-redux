import React from 'react';
import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';


const mapStateToProps = (state, ownProps) => {
    return {
        videos: state.videoList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleVideoListEntryTitleClick: () => dispatch(changeVideo)
    }
}

var VideoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;



