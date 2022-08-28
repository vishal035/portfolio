import Link from 'next/link';
import React, { useState } from 'react';
import MenuOverLay from '../../Menu/MenuOverlay';

const NavBar = () => {
  const [menuOpen, SetMenuOpen] = useState(false);
  const menuOnClickHandler = () => {
    SetMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="min-h-4 flex items-center p-4 transition-all ease-in-out">
        <div className="flex-1 z-20 text-white p-2 uppercase text-xl font-bold ">
          <Link href="/" className="">
            VK
          </Link>
        </div>
        <div className="flex-none z-20">
          <button
            className={`px-4 py-2  text-white`}
            onClick={menuOnClickHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
              // style={{ rotate: `${menuOpen ? '90deg' : '0deg'}` }}
              // transform={`${menuOpen ? 'rotate(90deg)' : "rotate('0deg')"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
        <MenuOverLay menuOpen={menuOpen} />
      </div>
    </>
  );
};

export default NavBar;
