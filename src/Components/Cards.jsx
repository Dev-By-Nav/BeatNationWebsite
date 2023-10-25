import React from 'react';
import img1 from '../assets/Gallery/image1.jpeg';
import img2 from '../assets/Gallery/image2.jpeg';
import img3 from '../assets/Gallery/image3.jpeg';
import img4 from '../assets/Gallery/image4.jpeg';
import img5 from '../assets/Gallery/image6.jpeg';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='flex flex-col w-full justify-center overflow-x-hidden py-10'>
      <Link to='/package1'>
        <div className="text-center py-10 hover:scale-105">
          <img src={img1} alt="" className="w-full max-w-[300px] h-[200px] mx-auto" />

          <div className=" py-3 mx-auto">
            <p className='text-bn-gold text-xl font-semibold font-montserrat'>Package 1</p>
          </div>
        </div>
      </Link>

      <Link to='/package2'>
        <div className="text-center py-10 hover:scale-105">
          <img src={img2} alt="" className="w-full max-w-[300px] h-[200px] mx-auto" />

          <div className=" py-3 mx-auto">
            <p className='text-bn-gold text-xl font-semibold font-montserrat'>Package 2</p>
          </div>
        </div>
      </Link>

      <Link to='/package3'>
        <div className="text-center py-10 hover:scale-105">
          <img src={img3} alt="" className="w-full max-w-[300px] h-[200px] mx-auto" />

          <div className=" py-3 mx-auto">
            <p className='text-bn-gold text-xl font-semibold font-montserrat'>Package 3</p>
          </div>
        </div>
      </Link>

      <Link to='/package4'>
        <div className="text-center py-10 hover:scale-105">
          <img src={img4} alt="" className="w-full max-w-[300px] h-[200px] mx-auto" />

          <div className=" py-3 mx-auto">
            <p className='text-bn-gold text-xl font-semibold font-montserrat'>Package 4</p>
          </div>
        </div>
      </Link>

      <Link to='/custom-package'>
        <div className="text-center py-10 hover:scale-105">
          <img src={img4} alt="" className="w-full max-w-[300px] h-[200px] mx-auto" />

          <div className=" py-3 mx-auto">
            <p className='text-bn-gold text-xl font-semibold font-montserrat'>Custom Package</p>
          </div>
        </div>
      </Link>

      <Link to='/band'>
        <div className="text-center py-10 hover:scale-105">
          <img src={img5} alt="" className="w-full max-w-[300px] h-[200px] mx-auto" />

          <div className=" py-3 mx-auto">
            <p className='text-bn-gold text-xl font-semibold font-montserrat'>Band Baaja</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Cards;
