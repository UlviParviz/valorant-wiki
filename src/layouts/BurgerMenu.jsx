import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=''>
      <button onClick={toggleMenu} className="focus:outline-none">
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={toggleMenu}
      />
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-30 shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button onClick={toggleMenu} className="focus:outline-none absolute top-4 right-4">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <nav className="flex flex-col items-start p-6 space-y-4 text-2xl font-bold text-red-600">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/maps" onClick={toggleMenu}>Maps</Link>
          <Link to="/weapons" onClick={toggleMenu}>Weapons</Link>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
