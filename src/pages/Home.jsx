import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";



function Home() {
  return (
    <div className="px-8 py-2">
      <NavBar />
      <Hero />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Home;
