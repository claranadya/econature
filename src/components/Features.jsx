import React from 'react';
const Features = () => {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-8">
          <div class="container">
            <div className="w-20 h-20 mx-auto mb-4">
              <img src="/images/daurulang.png" alt="Daur Ulang" className="w-full h-full" />
              <h3 className="text-xl font-semibold w-40">Daur Ulang</h3>
            </div>
          </div>
          <div class="container">
            <div className="w-20 h-20 mx-auto mb-4">
              <img src="/images/nanampohon.png" alt="Penanaman Pohon" className="w-full h-full" />
              <h3 className="text-xl font-semibold w-40">Penanaman Pohon</h3>
            </div> 
          </div>
        </div>
      </div>
    );
  };

  export default Features;
  