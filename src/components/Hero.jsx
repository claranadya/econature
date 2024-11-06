import React from 'react';
const Hero = () => {
    return (
      <div className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-2xl font-bold text-white mb-4">
            Yuk Gabung Bersama
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ECONATURE
            </h1>
          <p className="text-white text-lg mb-8">
          Kurangi plastik, tambahkan senyuman untuk Bumi kita!
          </p>
          <button className="bg-[#66BB6A] text-white px-8 py-3 rounded-lg w-fit hover:bg-green-700">
            MULAI
          </button>
        </div>
      </div>
    );
  };

  export default Hero;