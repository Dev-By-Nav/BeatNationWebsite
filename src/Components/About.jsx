import React from 'react'
import image from '../assets/logo2.png'

function About() {
  return (
    <div className="flex flex-col items-center justify-center  p-8">
  <h1 className="text-2xl font-bold mb-4 mt-0 text-bn-gold font-montserrat">About Us</h1>
  <div className="flex flex-col md:flex-row items-center justify-center">
    <div className="md:pr-4">
      <img
        className="rounded-lg shadow-md h-60 w-auto"
        src={image}
        alt="Your Image"
      />
    </div>
    <div className="w-3/4 md:w-1/2 md:pl-4 mt-4 md:mt-0 text-center md:text-left">
      <p className='font-raleway text-white'>
      At Beat Nation, we live and breathe the rhythm of Punjabi beats, and our passion is to infuse your parties and weddings with the pulsating energy of the vibrant Punjabi music scene. Committed to delivering unparalleled music services, we take pride in transforming your ideas into a sonic reality. Whether you envision a simple, intimate gathering or a grand, production-scale celebration, Beat Nation has you covered. We understand the heartbeat of Punjabi culture and bring it to life through our music services. Join us in creating unforgettable moments where every beat resonates with the joy and spirit of your special occasions.
      </p>
    </div>
  </div>
</div>
  )
}

export default About