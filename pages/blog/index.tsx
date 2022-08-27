import Head from 'next/head';
import React from 'react';
import MainBackGround from '../../components/Background/MainBackground';
import BlogCategories from '../../components/Blogs/BlogCategories';
import BlogLists from '../../components/Blogs/BlogLists';
import NavBar from '../../components/Header/Navbar';

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blog - VK</title>
        <meta name="description" content="On the way to learnin" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <main className="absolute z-0 top-0 left-0 w-screen h-screen bg-primary-black overflow-hidden">
        <MainBackGround />
        <section className="absolute top-0 left-0 w-screen h-screen">
          <NavBar />
          <div className="flex items-center justify-center">
            <h1 className="text-3xl text-primary-green mix-blend-difference">
              Currently On Progress
            </h1>
          </div>
          <BlogCategories />
          <BlogLists />
        </section>
      </main>
    </>
  );
};

export default Blogs;
