import Hero from '@/sections/hero';
import LogoTicker from '@/sections/logo-ticker';
import Navbar from '@/sections/navbar';
import React from 'react'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
    </>
  );
}

export default Home