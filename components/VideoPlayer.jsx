import React from 'react';
import styles from '../styles/VideoPlayer.module.css'; // Import your CSS module

const VideoPlayer = () => {
  return (
    <div className={styles.videoContainer}>
      <video className={styles.video} controls>
        <source src="/video/VID-20230829-WA0005.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
