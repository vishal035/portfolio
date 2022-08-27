import Link from 'next/link';
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
          : 'fixed left-[-150%]'
      }
    >
      <ul className="relative top-20 flex flex-col md:items-center text-8xl font-bold">
        <li className="py-4 px-2 tracking-widest hover:underline transition-all ease-in-out hover:text-primary-green">
          <Link href="/">Home </Link>
        </li>
        <li className="py-4 px-2 tracking-widest hover:underline transition-all ease-in-out hover:text-primary-green">
          <Link href="/about">About</Link>
        </li>
        <li className="py-4 px-2 tracking-widest hover:underline transition-all ease-in-out hover:text-primary-green">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="py-4 px-2 tracking-widest hover:underline transition-all ease-in-out hover:text-primary-green">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="py-4 px-2 tracking-widest hover:underline transition-all ease-in-out hover:text-primary-green">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuOverLay;
