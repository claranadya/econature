import React from 'react';

const Home = () => {
  return (
    <div>
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
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/images/tentangkami.png" alt="About Econature" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
            <p className="text-gray-600 mb-6">
              Econature adalah komunitas peduli lingkungan yang bergerak dalam bidang konservasi dan pengelolaan sampah untuk menciptakan lingkungan yang lebih bersih.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              LEBIH LANJUT
            </button>
          </div>
        </div>
      </div>
      <div className="bg-cover bg-center py-16" style={{ backgroundImage: "url('/images/nanam.png')" }}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Bersama Wujudkan Dunia Lebih Baik</h2>
          <div className="grid grid-cols-4 gap-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Jumlah Donasi!</h2>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">5000</h3>
              <p className="text-gray-700">Sampah Plastik</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">10000</h3>
              <p className="text-gray-700">Pohon Ditanam</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">25000</h3>
              <p className="text-gray-700">Pengguna Aktif</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">50000</h3>
              <p className="text-gray-700">Donasi</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
              MULAI DONASI
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Kegiatan Econature</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/400x300")' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Hari Sejuta Pohon</h3>
                <p className="text-gray-700 mb-4">29 Juni, 2024 · 08.00 - 14.00</p>
                <p className="text-gray-700">Surabaya, Jawa Timur, Indonesia</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/400x300")' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Aksi Bersih-bersih Pantai</h3>
                <p className="text-gray-700 mb-4">03 Maret, 2024 · 07.00 - 12.00</p>
                <p className="text-gray-700">Pantai Karangan, Surabaya, Indonesia</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/400x300")' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Hari Peduli Sampah Nasional</h3>
                <p className="text-gray-700 mb-4">10 April, 2024 · 08.00 - 15.00</p>
                <p className="text-gray-700">Kota Jambi, Jambi, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-900 text-white py-20">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h1 class="text-4xl font-bold mb-4">Kenapa Econature?</h1>
                <p class="text-lg mb-8">
                Bergabung dengan Econature untuk aksi nyata menjaga lingkungan, kumpulkan poin dan reward, serta nikmati acara edukatif dan acara eksklusif yang mendukung masa depan lebih hijau.
                </p>
                <a href="#" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block">
                DAFTAR KEANGGOTAAN
                </a>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div>
                <img src="/partner-in-conservation.png" alt="Partner in Conservation" class="w-full" />
                <h3 class="text-lg font-bold mt-2">PARTNER IN CONSERVATION</h3>
                </div>
                <div>
                <img src="/support.png" alt="Support" class="w-full" />
                <h3 class="text-lg font-bold mt-2">SUPPORT</h3>
                </div>
                <div>
                <img src="/warrior.png" alt="Warrior" class="w-full" />
                <h3 class="text-lg font-bold mt-2">WARRIOR</h3>
                </div>
                <div>
                <img src="/ambassador.png" alt="Ambassador" class="w-full" />
                <h3 class="text-lg font-bold mt-2">AMBASSADOR</h3>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Home;