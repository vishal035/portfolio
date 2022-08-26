import React from 'react';

const Button = () => {
  return (
    <div className="relative hover:-translate-x-1 hover:-translate-y-1 active:translate-y-0 active:translate-x-0 transition-all ease-in-out">
      <a
        href="#"
        className="px-12 py-6 tracking-widest bg-primary-black text-primary hover:bg-primary-black hover:text-primary "
      >
        Resume
      </a>
    </div>
  );
};

export default Button;
