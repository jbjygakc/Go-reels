import React from 'react'
import './VideoCard.css'
import { useState, useRef } from 'react';
import VideoHeader from './VideoHeader.jsx';
import VideoFooter from './VideoFooter.jsx';


function VideoCard(props) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (isVideoPlaying) {
            //stop
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
        else {
            // play 
            videoRef.current.play();
            setIsVideoPlaying(true);
        }

    }
    return (
        <div className='videocard'>
            <VideoHeader />
            <video
                ref={videoRef}
                onClick={onVideoPress}
                className='video_player'
                src={props.url}
                alt='Reel Video'
                loop
            />
            <VideoFooter
                channel={props.channel}
                avatarsrc={props.avatarsrc}
                song={props.song}
                url={props.url}
                likes={props.likes}
                shares={props.shares} />
        </div>
    )
}

export default VideoCard;
