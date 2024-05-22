import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { IconContext } from 'react-icons';
import { BiPlay, BiPause } from 'react-icons/bi';
import Video from '../../../../assets/Video/video.mp4';

import classNames from 'classnames/bind';
import styles from './ShortVideo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeXmark, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ShortVideos() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState([0, 0]);
    const [currentTimeSec, setCurrentTimeSec] = useState();
    const [duration, setDuration] = useState([0, 0]);
    const [durationSec, setDurationSec] = useState('0');
    const [muteVideo, setMuteVideo] = useState(false);

    const sec2Min = (sec) => {
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        return {
            min: min,
            sec: secRemain,
        };
    };

    useEffect(() => {
        const { min, sec } = sec2Min(videoRef.current.getDuration());
        setDurationSec(videoRef.current.getDuration());
        setDuration([min, sec]);

        console.log(videoRef.current.getCurrentTime());
        const interval = setInterval(() => {
            const { min, sec } = sec2Min(videoRef.current.getCurrentTime());
            setCurrentTimeSec(videoRef.current.getCurrentTime());
            setCurrentTime([min, sec]);
        }, 1000);

        return () => clearInterval(interval);
    }, [isPlaying]);

    const handlePlay = () => {
        if (isPlaying) {
            // videoRef.current.pause();
            setIsPlaying(false);
        } else {
            // videoRef.current.play();
            setIsPlaying(true);
        }
    };
    return (
        <div className={cx('container')}>
            <div className={cx('playerContainer')}>
                {/* <video className={cx('videoPlayer')} ref={videoRef} src={Video} controls autoplay /> */}
                <ReactPlayer
                    // controls
                    className={cx('videoPlayer')}
                    width={'100%'}
                    height={'100%'}
                    ref={videoRef}
                    url={Video}
                    playing={isPlaying}
                    // loop={true}
                    muted={muteVideo}
                />
                <div className={cx('controlsContainer')}>
                    <div className={cx('controls')}>
                        {isPlaying ? (
                            <button className={cx('controlButton')} onClick={handlePlay}>
                                <IconContext.Provider value={{ color: 'white', size: '2em' }}>
                                    <BiPause />
                                </IconContext.Provider>
                            </button>
                        ) : (
                            <button className={cx('controlButton')} onClick={handlePlay}>
                                <IconContext.Provider value={{ color: 'white', size: '2em' }}>
                                    <BiPlay />
                                </IconContext.Provider>
                            </button>
                        )}

                        <div className={cx('duration')}>
                            {muteVideo ? (
                                <button className={cx('controlButton')} onClick={() => setMuteVideo(false)}>
                                    <FontAwesomeIcon className={cx('Volume-mute')} icon={faVolumeXmark} />
                                </button>
                            ) : (
                                <button className={cx('controlButton')} onClick={() => setMuteVideo(true)}>
                                    <FontAwesomeIcon className={cx('Volume-high')} icon={faVolumeHigh} />
                                </button>
                            )}
                        </div>
                        {/* <IconContext.Provider value={{ color: 'white', size: '2em' }}>
                            <BiSkipNext />
                        </IconContext.Provider> */}
                        {/* <div className={cx('duration')}>
                            {currentTime[0]}:{currentTime[1]} / {duration[0]}:{duration[1]}
                        </div> */}
                    </div>
                    <input
                        type="range"
                        min="0"
                        max={durationSec}
                        default="0"
                        value={currentTimeSec}
                        className={cx('timeline')}
                        onChange={(e) => {
                            videoRef.current.currentTime = e.target.value;
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ShortVideos;
