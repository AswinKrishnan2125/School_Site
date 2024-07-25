import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-20">
      <div className='navbar flex items-center justify-between p-4 bg-blue-600 text-white'>
        <div className="logo flex items-center space-x-4 fixed top-0 left-0 p-4 bg-blue-600 w-full md:static md:p-0 z-30">
          <img src="/logo.svg" alt="Logo" className="h-10 w-10" />
          <h1 className="text-lg md:text-xl font-bold">Springdale Public School</h1>
          <div className="md:hidden absolute right-4 top-4">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`links ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative md:top-0 top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent p-5 md:p-0`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
          <li className="hover:underline"><Link to="/">Home</Link></li>
            <li className="hover:underline"><Link to="/">About Us</Link></li>
            <li className="hover:underline"><Link to="/academics">Academics</Link></li>
            <li className="hover:underline"><Link to="/admission">Admissions</Link></li>
            <li className="hover:underline"><Link to="/faculty">Faculty</Link></li>
            <li className="hover:underline"><Link to="/students">Students</Link></li>
            <li className="hover:underline"><Link to="/gallery">Gallery</Link></li>
            <li className="hover:underline"><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
