import React from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='relative py-4 text-red-600 border-t-2 border-black text-center font-bold text-sm'>
      <div>Copyright © Valorant-Wiki</div>
      <button
        onClick={scrollToTop}
        className='absolute bottom-2 right-2 text-xl font-bold text-red-600 rounded-xl px-4 py-2 border-2 hover:bg-red-600 hover:text-white transition-all duration-700'
      >
        <FaArrowUp/>
      </button>
    </div>
  );
};

export default Footer;
