'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaShoppingCart, FaSignInAlt } from 'react-icons/fa';
import { TypewriterEffectSmooth } from '../ui/typewriter-effect';
import Menu from './Menu';

const Header = () => {
  const words = [
    { text: 'Experience ' },
    { text: 'Effortless ' },
    { text: 'Shopping ' },
    { text: 'With ' },
    { text: 'CodeCart',className: 'text-green-600' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 shadow-lg transition-all duration-300 bg-white text-gray-800">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold flex items-center gap-2 hover:text-blue-500"
          >
            <span>🛒</span> CodeCart
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Menu/>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-14 left-0 w-full bg-gray-900 text-white shadow-lg md:hidden">
              <ul className="flex flex-col items-start gap-4 px-4 py-6">
                <li>
                  <Link
                    href="/cart"
                    className="flex items-center gap-2 text-lg px-4 py-2 hover:bg-gray-700 rounded-md"
                  >
                    <FaShoppingCart />
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signin"
                    className="flex items-center gap-2 text-lg px-4 py-2 hover:bg-gray-700 rounded-md"
                  >
                    <FaSignInAlt />
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Centered Typewriter Effect */}
      <div className="flex items-center justify-center h-32">
        <TypewriterEffectSmooth
          words={words}
          className="text-center text-2xl sm:text-4xl font-semibold text-blue-600"
        />
      </div>
    </header>
  );
};

export default Header;
