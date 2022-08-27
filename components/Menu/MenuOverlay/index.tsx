import React from 'react';

interface IPropsType {
  menuOpen: boolean;
}

const MenuOverLay = ({ menuOpen }: IPropsType) => {
  return (
    <nav
      className={
        menuOpen
          ? 'fixed top-0 left-0 w-full h-full z-10 backdrop-blur-3xl text-white ease-in-out duration-300'
          : 'fixed left-[-100%]'
      }
    >
      <ul className="relative top-20 flex flex-col text-8xl font-bold">
        <li className="py-4 px-2 tracking-widest hover:underline transition-all ease-in-out hover:text-primary-green">
          <a href="#">Home</a>
        </li>
        <li className="py-4 px-2 tracking-widest hover:underline transition-all ease-in-out hover:text-primary-green">
          <a href="#">About</a>
        </li>
        <li className="py-4 px-2 tracking-widest hover:underline transition-all ease-in-out hover:text-primary-green">
          <a href="#">Projects</a>
        </li>
        <li className="py-4 px-2 tracking-widest hover:underline transition-all ease-in-out hover:text-primary-green">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuOverLay;
