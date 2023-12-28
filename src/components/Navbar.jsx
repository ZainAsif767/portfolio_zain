/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navlink } from '../constants'
import { logo, menu, close } from '../assets'

export const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav className={`${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* go to logo.com for own custom logo and use it here */}
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Zain <span className='sm:block hidden'>Asif</span></p>
        </Link>
      </div>
    </nav>
  )
}
