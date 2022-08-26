import React from 'react';
import Button from '../Buttons/Default';

const HeroSection = () => {
  return (
    <main className="relative  w-full h-full flex flex-col items-center">
      <section className="ralative h-2/4 w-full flex flex-col items-center text-primary mix-blend-difference ">
        <h1 className="relative top-4 font-black text-6xl tracking-wider">
          Hi
        </h1>
        <h2 className="relative top-8 font-bold text-4xl tracking-widest">
          I&apos;m Vishal Kumar
        </h2>
        <h3 className="relative top-8 text-4xl font-bold tracking-widest">
          A Self Taught
        </h3>
        <h4 className="relative top-16 text-4xl font-semibold tracking-widest">
          FullStack Developer
        </h4>
        <p className="relative top-16 tracking-[2.2px]">
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
