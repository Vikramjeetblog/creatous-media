import React, { useEffect } from "react";

// Spotlight Components
import Navbar from "../components/spotlight/Navbar";
import Hero from "../components/spotlight/Hero";
import FeatureStrip  from "../components/spotlight/FeatureStrip";
import Editorial from "../components/spotlight/Editorial";
import Submission from "../components/spotlight/Submission";
import About from "../components/spotlight/About";

const Spotlight = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeatureStrip/>
         <Editorial/>
        <Submission />
        <About/>
      </main>

    
    </>
  );
};

export default Spotlight;