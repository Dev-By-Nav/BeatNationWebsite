import React from 'react'
import Navbar from '../Components/Navbar'
import Images from '../Components/Images'
import Footer from '../Components/Footer';


function Gallery() {
  return (
    <div className='bg-bn-navy h-full'>
      <Navbar />
      <Images />
      <Footer />
    </div>
  )
}

export default Gallery