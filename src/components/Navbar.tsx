import React, { useState } from 'react';

// Assuming 'logo' is imported correctly
import logo from "../assets/FratelloLogoblack.webp"
import { Link } from '@tanstack/react-router';
function Navbar() {
    // 1. Define state to manage the menu's open/close status
    const [isOpen, setIsOpen] = useState(false);

    return (
        // 'top-0' ensures the sticky element sticks to the very top
        <nav className='bg-white w-full shadow-xl  shadow-gray-600/50  sticky top-0 z-50'>
            <div className='flex items-center justify-between px-4'>
                <Link to='/'>
                  <img className='w-20 p-5' src={logo} alt='fratelloLogo' />
                </Link>

                <button
                    className='md:hidden p-3 rounded focus:outdivne-none focus:ring-2 focus:ring-gray-400'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <div
                    className={`
            ${isOpen ? 'block' : 'hidden'} 
            absolute top-full left-0 w-full bg-white shadow-md 
            md:relative md:flex md:w-auto md:shadow-none 
            flex-col md:flex-row gap-6 mx-auto font-medium p-4 md:p-0
          `}
                >
                    <div className="py-1 group cursor-pointer">
                        <Link to='/'>Home</Link>
                        <hr className="w-3/5 m-auto border-none h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300" />
                    </div>

                    <div className="py-1 group cursor-pointer">
                        Products
                        <hr className="w-3/5 m-auto border-none h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300" />
                    </div>

                    <div className="py-1 group cursor-pointer">
                        About
                        <hr className="w-3/5 m-auto border-none h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300" />
                    </div>

                    <div className="py-1 group cursor-pointer">
                        <Link to='/contact'>Contact</Link>
                        
                        <hr className="w-3/5 m-auto border-none h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300" />
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;