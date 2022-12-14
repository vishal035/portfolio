import type { NextPage } from 'next';
import Head from 'next/head';
import MainBackGround from '../components/Background/MainBackground';
import NavBar from '../components/Header/Navbar';
import HeroSection from '../components/HeroSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - VK</title>
        <meta name="description" content="On the way to learnin" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <main className="absolute z-0 top-0 left-0 w-screen h-screen bg-primary-black overflow-hidden">
        <MainBackGround />
        <section className="absolute top-0 left-0 w-screen h-screen">
          <NavBar />
          <HeroSection />
        </section>
      </main>
    </>
  );
};

export default Home;
