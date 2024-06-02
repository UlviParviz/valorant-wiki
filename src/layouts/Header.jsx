import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-5 text-2xl px-4 border-b-2 border-black flex justify-between items-center transition-all duration-1000 ${
        scrollPosition > 30 ? 'fixed w-full top-0 left-0 bg-white z-50 shadow-lg' : ''
      }`}
    >
      <Link to={'/'} className='text-red-600 font-bold'>Valorant-Wiki</Link>
      <div className='justify-center items-center gap-2.5 text-[18px] font-bold text-red-600 md:flex hidden'>
        <Link to={'/'}>Home</Link>
        <Link to={'/maps'}>Maps</Link>
        <Link to={'/weapons'}>Weapons</Link>
      </div>
      <div className='md:hidden'>
        <BurgerMenu />
      </div>
    </div>
  );
}

export default Header;
