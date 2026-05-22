// Home.jsx

import React, { useEffect } from "react";

// Components
import Hero from "../components/Hero";
import Services from "../components/Services";
import Magazine from "../components/Magazine";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Project from "../components/Project";
import About from "../components/About";
const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Magazine />
      <Portfolio />
      <About/>
      <Contact />
      <Project/>
    </>
  );
};

export default Home;