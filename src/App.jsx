import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import About from './components/About';
// import DonationCounter from './components/DonationCounter';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home />
      {/* <Hero />
      <Features />
      <About />
      <div className="bg-gray-100">
        <DonationCounter />
      </div> */}
      <Footer />
    </div>
  );
};

export default App;