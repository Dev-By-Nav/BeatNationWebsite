import React from 'react';
import Navbar from '../Components/Navbar';
import ReactPlayer from 'react-player';
import video from '../assets/video.mp4';
import Hero from '../Components/Hero';

function Home() {
  return (
    <div>
      <Navbar />
      
      <div className=" ">
        <ReactPlayer
          url={video}
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          className="video-background"
        />
        <Hero />
      </div>
    </div>
  );
}

export default Home;

