import Features from '@/sections/features';
import Hero from '@/sections/hero';
import Introduction from '@/sections/introduction';
import LogoTicker from '@/sections/logo-ticker';
import Navbar from '@/sections/navbar';
import React from 'react'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
    </>
  );
}

export default Home