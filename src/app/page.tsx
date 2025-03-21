import CallToAction from "@/sections/call-to-action";
import Faq from "@/sections/faq";
import Features from "@/sections/features";
import Hero from "@/sections/hero";
import Integrations from "@/sections/integrations";
import Introduction from "@/sections/introduction";
import LogoTicker from "@/sections/logo-ticker";
import Navbar from "@/sections/navbar";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
      <Faq />
      <CallToAction />
    </>
  );
};

export default Home;
