import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero/Hero";
import FeaturedIn from "./FeaturedIn";
import About from "./About";
import Platform from "./Platform";
import PresalePrice from "./PresalePrice";
import HowToBuy from "./HowToBuy";
import Roadmap from "./Roadmap";
import Faq from "./Faq";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedIn />
      <About />
      <Platform />
      <PresalePrice />
      <HowToBuy />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
