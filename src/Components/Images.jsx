// Images.js
import React from 'react';
import { images, textContent } from '../Content';

function Images() {
  return (
    <div className='max-w-[90vw] mx-auto columns-1 xs:columns-2 md:columns-3 lg:columns-4 xl:columns-5 space-y-4 py-6'>

      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} className='hover:scale-105 transform-gpu' />
      ))}
    </div>
  );
}

export default Images;
