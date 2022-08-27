import React from 'react';

const BlogCardBase = () => {
  return (
    <div className="mx-auto my-8 py-6 pl-4 pr-12 bg-black rounded-md items-center flex h-fit w-11/12">
      <div className="rounded-md h-[360px] w-[640px]"></div>
      <a href={`#`}>
        <span className="text-3xl w-2/3 text-white p-4 font-bold cursor-pointer">
          {'Article Title'}
          <div className="text-white font-normal text-lg tracking-wider leading-relaxed">
            {'Article Description'}
          </div>
          <div className="w-full" />
          <span className="font-bold text-base text-primary-green-1 after:content-['→'] after:ml-3.5 after:font-bold after:text-lg hover:after:ml-5 after:text-primary-green-1">
            Read more
          </span>
        </span>
      </a>
    </div>
  );
};

export default BlogCardBase;
