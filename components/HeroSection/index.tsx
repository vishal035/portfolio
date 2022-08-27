import React from 'react';
import Button from '../Buttons/Default';

const HeroSection = () => {
  return (
    <main className="z-10 mt-8 w-full h-full flex flex-col items-center">
      <section className="ralative h-2/4 w-full flex flex-col items-center text-white ">
        <h1 className="relative top-4 font-black text-6xl tracking-wider md:text-8xl md:tracking-widest">
          Hi
        </h1>
        <h2 className="relative top-8 font-bold text-3xl md:text-6xl tracking-widest md:tracking-[10px]">
          I&apos;m Vishal Kumar
        </h2>
        <h3 className="relative top-10 text-4xl md:text-6xl font-bold tracking-widest md:tracking-[10px]">
          A Self Taught
        </h3>
        <h4 className="relative top-16 text-4xl md:text-6xl font-semibold tracking-normal md:tracking-wider">
          FullStack Developer
        </h4>
        <p className="relative top-16 tracking-normal md:tracking-[7px]">
          on the way to become Senior of MySelf 🔥
        </p>
      </section>
      <section className="relative w-full h-full flex flex-col justify-center items-center">
        <Button />
      </section>
    </main>
  );
};

export default HeroSection;
