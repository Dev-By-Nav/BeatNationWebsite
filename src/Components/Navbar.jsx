import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navbarVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0 },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0 },
  };

  const lineVariants = {
    hidden: { width: '50%', left: '25%' },
    visible: { width: '100%', left: '0%' },
  };

  return (
    <motion.nav initial='hidden' animate='visible' variants={navbarVariants}>
      <div
        className={`flex justify-between items-center h-28 min-w-full mx-auto px-12 text-white  ${
          nav ? 'sticky top-0' : ''
        } z-50`}
      >
        <Link to='/'>
          <motion.img
            src={logo}
            alt=''
            className='h-36 w-auto'
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </Link>
        <ul
          className={`hidden md:flex font-semibold cursor-pointer text-bn-gold text-lg ${
            nav ? 'hidden' : ''
          }`}
        >
          <motion.li
            className='p-4 hover:text-white font-medium'
            variants={linkVariants}
          >
            <Link to='/'>Home</Link>
          </motion.li>
          <motion.li
            className='p-4 hover:text-white font-medium'
            variants={linkVariants}
          >
            <Link to='/gallery'>Gallery</Link>
          </motion.li>
          <motion.li
            className='p-4 hover:text-white font-medium'
            variants={linkVariants}
          >
            <Link to='/services'>Services</Link>
          </motion.li>

          <motion.li
            className='p-4 hover:text-white font-medium flex-row'
            variants={linkVariants}
          >
            <Link to='/contact-us'>Contact Us</Link>
          </motion.li>
        </ul>
        <div
          onClick={handleNav}
          className='block md:hidden cursor-pointer text-[#d4af37] hover:text-[#ad345c] mr-4'
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <motion.div
          className={`${
            nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-bn-navy ease-in-out duration-500 md:hidden'
              : 'fixed left-[-100vw] z-50'
          }`}
          variants={navbarVariants}
        >
          <motion.ul className='p-4 cursor-pointer text-[#d4af37] font-semibold'>
            <motion.li
              className='p-4 border-b hover:text-white border-bn-gold font-medium'
              variants={linkVariants}
            >
              <Link to='/'>Home</Link>
            </motion.li>
            <motion.li
              className='p-4 border-b hover:text-white border-bn-gold font-medium'
              variants={linkVariants}
            >
              <Link to='/gallery'>Gallery</Link>
            </motion.li>
            <motion.li
              className='p-4 border-b hover:text-white border-bn-gold font-medium'
              variants={linkVariants}
            >
              <Link to='/services'>Services</Link>
            </motion.li>

            <motion.li
              className='p-4 hover:text-white font-medium flex-row'
              variants={linkVariants}
            >
              <Link to='/contact-us'>Contact Us</Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
      <motion.hr
        className='text-bn-gold'
        style={{
          border: '1px solid ',
          margin: '0 0',
          position: 'sticky',
          top: '60px',
          zIndex: 49,
        }}
        initial='hidden'
        animate='visible'
        variants={lineVariants}
        transition={{ duration: 2 }} // Set your desired animation duration
      />
    </motion.nav>
  );
};

export default Navbar;
