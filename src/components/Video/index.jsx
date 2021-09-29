import React from 'react';
import './Video.scss'
import videoig from '../../images/video.png'
import vdobj5 from '../../images/video-object-05.png'
import vdobj4 from '../../images/video-object-04.png'
import vdobj3 from '../../images/video-object-03.png'
import vdobj1 from '../../images/video-object-01.png'
import vdobj7 from '../../images/video-object-07.png'
import vdobj6 from '../../images/video-object-06.png'
import vdobj9 from '../../images/video-object-09.png'
import vdobj8 from '../../images/video-object-08.png'


function Video() {
    return (
        <div className="video">
            <span className="title">what happened</span>
            <span className="description">How to create mobile-optimized videos in minutes. Not a designer,
                every team makes a lot of videos Can be trimmed. Take the first </span>
            <div className="see-more">
                see more
            </div>
            <img src={vdobj5} alt="video-object-05" className="video-object-05" />
            <img src={vdobj4} alt="video-object-04" className="video-object-04" />
            <img src={vdobj3} alt="video-object-03" className="video-object-03" />
            <img src={vdobj1} alt="video-object-01" className="video-object-01" />
            <img src={videoig} alt="video" className="videobg" />
            <img src={vdobj7} alt="video-object-07" className="video-object-07" />
            <img src={vdobj6} alt="video-object-06" className="video-object-06" />
            <img src={vdobj9} alt="video-object-09" className="video-object-09" />
            <img src={vdobj8} alt="video-object-08" className="video-object-08" />
        </div>
    );
}

export default Video;