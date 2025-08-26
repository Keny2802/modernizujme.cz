import { useState } from "react";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Products from "./components/Products";
import Team from "./components/Team";
import Footer from "./components/Footer"
import './App.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <Header />
      <MobileHeader isOpen={isOpen} toggleMenu={toggleMenu} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About scrollToSection={scrollToSection} />
      <Pricing />
      <Products />
      <Team />
      <Footer />
    </>
  );
};


export default App;