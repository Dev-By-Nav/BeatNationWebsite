import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav>
      <div
        className={`flex justify-between items-center h-28 min-w-full mx-auto px-12 text-white  ${
          nav ? 'sticky top-0' : ''
        } z-50`}
      >
        <Link to='/'>
          <img src={logo} alt='' className='h-36 w-auto' />
        </Link>
        <ul className={`hidden md:flex font-semibold cursor-pointer text-bn-gold text-lg ${nav ? 'hidden' : ''}`}>
          <li className='p-4 hover:text-white font-medium'>
            <Link to='/'>Home</Link>
          </li>
          <li className='p-4 hover:text-white font-medium'>
            <Link to='/gallery'>Gallery</Link>
          </li>
          <li className='p-4 hover:text-white font-medium'>
            <Link to='/services'>Services</Link>
          </li>
         
          <li className='p-4 hover:text-white font-medium flex-row'>
            <Link to='/contact-us'>Contact Us</Link>
          </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden cursor-pointer text-[#d4af37] hover:text-[#ad345c] mr-4'>
           {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div
          className={`${
            nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-bn-navy ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] z-50'
          }`}
        >
          <ul className='p-4 cursor-pointer text-[#d4af37] font-semibold'>
            <li className='p-4 border-b hover:text-white border-bn-gold font-medium'>
              <Link to='/'>Home</Link>
            </li>
            <li className='p-4 border-b hover:text-white border-bn-gold font-medium'>
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li className='p-4 border-b hover:text-white border-bn-gold font-medium'>
              <Link to='/services'>Services</Link>
            </li>
            
            <li className='p-4 hover:text-white font-medium flex-row'>
              <Link to='/contact-us'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className='text-bn-gold' style={{ border: '1px solid ', margin: '0 0', position: 'sticky', top: '60px', zIndex: 49 }} />
    </nav>
  );
};

export default Navbar;


