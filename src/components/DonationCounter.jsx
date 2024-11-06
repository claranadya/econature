import React from 'react';
const DonationCounter = () => {
    return (
      <div className="bg-cover bg-center py-16" style={{ backgroundImage: "url('/images/nanam.png')" }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Jumlah Donasi!
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[5000, 10000, 25000, 50000, 100000, 200000].map((amount) => (
              <button
                key={amount}
                className="bg-white bg-opacity-20 text-white py-2 px-4 rounded hover:bg-opacity-30"
              >
                {amount.toLocaleString()}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default DonationCounter;