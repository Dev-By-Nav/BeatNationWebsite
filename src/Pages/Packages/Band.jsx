import React from 'react';
import Navbar from '../../Components/Navbar';
import ReactPlayer from 'react-player';
import video from '../../assets/video.mp4';
import img1 from '../../assets/Gallery/image1.jpeg';
import img2 from '../../assets/Gallery/image2.jpeg';
import img3 from '../../assets/Gallery/image3.jpeg';
import img4 from '../../assets/Gallery/image4.jpeg';
import img5 from '../../assets/Gallery/image5.jpeg';
import img6 from '../../assets/Gallery/image6.jpeg';
import img7 from '../../assets/Gallery/image7.jpeg';
import img8 from '../../assets/Gallery/image8.jpeg';

function Band() {
  return (
    <div className='bg-bn-navy h-full w-full overflow-hidden'>
      <Navbar />

      <h1 className="text-2xl font-bold mb-4 mt-0 text-bn-gold font-montserrat flex flex-col items-center justify-center p-8">Package 1</h1>


      <div className='flex justify-center'>

        <ReactPlayer
          url={video}
          playing={true}
          loop={true}
          muted={true}
          width="75%"
          height="75%"
          className="video-background"
        />
      </div>

      
      <div className='flex flex-col items-center justify-center p-8'>
          <h1 className="text-2xl font-bold mb-4 mt-0 text-bn-gold font-montserrat">What's Included</h1>

          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <img src={img3} alt="" className="h-96 w-96 mb-8 md:mb-0 md:mr-8" />

            <ul className='text-white text-left'>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Experienced DJ</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Experienced Host</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Professional Sound System</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Turntables & Mixer</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">4x Computer Controlled Moving Lights</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">4x Gloss Pillars</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Haze Machine (Dependent on Venue Allowance)</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">£10m Public Liability Insurance</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">PAT Testing Certificate</li>
              <li className="py-2 border-b mx-10 mt-3 font-medium font-raleway">Tailored Music for your Event Stage (Optional Extra)</li>
            </ul>
          </div>
        </div>


      <div className='flex flex-col pt-10'>
        <div className="flex flex-wrap justify-center">
          <img src={img2} alt="" className="h-44 w-1/2 md:w-1/4 p-2 hover:scale-[1.03]" />
          <img src={img1} alt="" className="h-44 w-1/2 md:w-1/4 p-2 hover:scale-[1.03]" />
          <img src={img3} alt="" className="h-44 w-1/2 md:w-1/4 p-2 hover:scale-[1.03]" />
          <img src={img4} alt="" className="h-44 w-1/2 md:w-1/4 p-2 hover:scale-[1.03]" />
          <img src={img5} alt="" className="h-44 w-1/2 md:w-1/4 p-2 hover:scale-[1.03]" />
          <img src={img6} alt="" className="h-44 w-1/2 md:w-1/4 p-2 hover:scale-[1.03]" />
          <img src={img7} alt="" className="h-44 w-1/2 md:w-1/4 p-2 hover:scale-[1.03]" />
          <img src={img8} alt="" className="h-44 w-1/2 md:w-1/4 p-2 hover:scale-[1.03]" />
        </div>


      </div>
    </div>
  );
}

export default Band;
