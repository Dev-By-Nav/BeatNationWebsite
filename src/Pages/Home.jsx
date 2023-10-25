import React from 'react';
import Navbar from '../Components/Navbar';
import ReactPlayer from 'react-player';
import video from '../assets/video.mp4';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Review from '../Components/Review';

function Home() {
  return (
    <div className='bg-bn-navy h-full'>
      <Navbar />
      
      <div className="bg-bn-navy">
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

      {/* Additional content */}
      <div className='bg-bn-navy h-full'>

        <About />
        <Review />
      </div>
    </div>
  );
}

export default Home;
