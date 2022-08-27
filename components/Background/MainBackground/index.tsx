import React from 'react';

const MainBackGround = () => {
  return (
    <div className="relative z-0 w-full h-full mix-blend-difference blur-3xl select-none">
      <div className="absolute top-5 left-5 w-32 h-32 rounded-full bg-primary-purple animate-rotateByOrigin-Right delay-300"></div>
      <div className="absolute top-5 right-5 w-20 h-20 rounded-full bg-primary-voilet animate-rotateByOrigin-Left delay-500"></div>
      <div className="absolute top-16 left-5 w-64 h-64  bg-primary-green rounded-full animate-rotateByOrigin-Left delay-700"></div>
      <div className="absolute bottom-8 left-5 w-44 h-44  bg-primary-green rounded-full animate-rotateByOrigin-Bottom delay-700"></div>
      <div className="absolute bottom-64 right-5 w-56 h-56 rounded-full bg-primary-green-light animate-rotateByOrigin-Right delay-1000"></div>
    </div>
  );
};

export default MainBackGround;
