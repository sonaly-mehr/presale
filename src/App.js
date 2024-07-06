import Footer from "./components/layout/Footer";
import Hero from "./components/layout/Hero/Hero";
import About from "./components/layout/Home/About";
import Faq from "./components/layout/Home/Faq";
import FeaturedIn from "./components/layout/Home/FeaturedIn";
import HowToBuy from "./components/layout/Home/HowToBuy";
import Platform from "./components/layout/Home/Platform";
import PresalePrice from "./components/layout/Home/PresalePrice";
import Roadmap from "./components/layout/Home/Roadmap";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedIn/>
      <About/>
      <Platform/>
      <PresalePrice/>
      <HowToBuy/>
      <Roadmap/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
