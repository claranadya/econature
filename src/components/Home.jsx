import React from 'react';

const news = [
  {
    id: 1,
    title: 'Daur Ulang Sampah Plastik',
    date: '10 Oktober, 2024',
    comments: '123 Komentar',
    image: '/images/daur.png',
    featured: true
  },
  {
    id: 2,
    title: 'Gerakan Menanam 1 Juta Pohon untuk Masa Depan Hijau',
    date: '29 September, 2024',
    image: '/images/masadepan.png'
  },
  {
    id: 3,
    title: 'Kampanye Anti Plastik Sekali Pakai Solusi untuk Bumi Lebih Bersih',
    date: '29 September, 2024',
    image: '/images/kampanye.png'
  }
];

const donationAmounts = [
  5000, 10000, 25000, 50000, 75000, 100000, 200000
];

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
      <div className="py-16 ">
        <div className="max-w-7xl mx-auto grid grid-cols-6 gap-4 justify-center">
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
            <h2 className="text-3xl font-bold text-[#66BB6A] mb-4">Tentang Kami</h2>
            <p className="text-gray-600 mb-6">
            Selamat datang di Econature!
            <p>Kami percaya perubahan besar dimulai dari hal kecil. Bersama-sama menciptakan dunia yang lebih bersih, mari tingkatkan kesadaran akan dampak plastik sekali pakai dan beralih ke solusi ramah lingkungan.</p><br />
            <p>Dengan program komunitas yang seru, acara yang menarik, dan seminar yang penuh inspirasi, Anda dapat belajar sambil bersenang-senang. Bergabunglah dengan kami, dukung kampanye lingkungan, dan jadilah bagian dari perubahan positif untuk bumi kita. Bersama kita bisa, mewujudkan masa depan yang hijau untuk generasi bangsa!</p>

            </p>
            <button className="bg-[#66BB6A] text-white px-6 py-2 rounded hover:bg-green-700">
              LEBIH LANJUT
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-[500px] mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/nanam.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Bersama Wujudkan Dunia Lebih Baik
            </h1>
            <p className="text-lg opacity-90">
              Setiap donasi Anda membantu mengurangi sampah plastik dan menjaga alam kita tetap lestari. Bersama, kita bisa mewujudkan masa depan yang lebih bersih dan hijau.
            </p>
          </div>
          <div className="lg:w-1/2 bg-white/10 backdrop-transparent rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-[#FFFFFF]">Jumlah Donasi</h2>
            <div className="grid grid-cols-4 gap-3 mb-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  className="p-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:border-green-500 transition-colors"
                >
                  {amount.toLocaleString()}
                </button>
              ))}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Lainnya"
                  className="w-full p-2 rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                />
              </div>
            </div>
            <button className="w-full bg-[#66BB6A] text-white py-3 rounded-md hover:bg-green-600 transition-colors font-medium">
              MULAI DONASI
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white py-20">
        <div className="container mx-auto">
        <h2 className="text-[#66BB6A] mb-2">Ayo gabung bersama !</h2>
        <h1 className="text-3xl font-bold">Kegiatan Econature</h1><br />
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("/images/sejutapohon.png")' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Hari Sejuta Pohon</h3>
                <p className="text-gray-700 mb-4">29 Juni, 2024 · 08.00 - 14.00</p>
                <p className="text-gray-700">Surabaya, Jawa Timur, Indonesia</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("/images/bersih.png")' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Aksi Bersih-bersih Pantai</h3>
                <p className="text-gray-700 mb-4">03 Maret, 2024 · 07.00 - 12.00</p>
                <p className="text-gray-700">Pantai Karangan, Surabaya, Indonesia</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("/images/peduli.png")' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Hari Peduli Sampah Nasional</h3>
                <p className="text-gray-700 mb-4">10 April, 2024 · 08.00 - 15.00</p>
                <p className="text-gray-700">Kota Jambi, Jambi, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[#66BB6A] mb-2">Baca Informasi & Berita terbaru kami</h2>
          <h1 className="text-3xl font-bold">Informasi & Berita</h1>
        </div>
        <button className="bg-[#66BB6A] text-white px-6 py-2 rounded-md hover:bg-green-600">
          LEBIH LANJUT
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="col-span-1 lg:col-span-1">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src={news[0].image} 
              alt={news[0].title}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                <span>{news[0].date}</span>
                <span>{news[0].comments}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{news[0].title}</h3>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-1 space-y-6">
          {news.slice(1).map((item) => (
            <div key={item.id} className="flex gap-4 bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-32 h-32 object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <h3 className="font-bold mt-2">{item.title}</h3>
                </div>
                <button className="text-[#66BB6A] hover:text-green-600 text-sm flex items-center gap-1 font-semibold">
                  BACA SELENGKAPNYA
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-black text-white py-20 flex justify-center items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">KENAPA ECONATURE?</h2>
        <p className="text-lg mb-8">
          Bergabung dengan Econature untuk aksi nyata menjaga lingkungan, kumpulkan poin dan reward, serta nikmati acara edukatif dan acara eksklusif yang mendukung masa depan lebih hijau.
        </p>
        <button className="bg-[#66BB6A] hover:bg-green-600 text-white font-bold py-3 px-6 rounded">
          DAFTAR KEANGGOTAAN
        </button>
      </div>
      </div><br />
      <div className="container mx-auto px-4 text-center">
        <div>
          <h2 className="text-[#66BB6A] mb-2">Dukung Kami dengan Menjadi Bagian</h2>
          <h1 className="text-3xl font-bold">EcoNusa</h1>
          <br />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center px-4">
            <img src="/images/badak.png" alt="Partner in Conservation" />
          </div>
          <div className="flex items-center justify-center px-4">
            <img src="/images/komodo.png" alt="Warrior" />
          </div>
          <div className="flex items-center justify-center px-4">
            <img src="/images/bali.png" alt="Support" />
          </div>
          <div className="flex items-center justify-center px-4">
            <img src="/images/raflesia.png" alt="Ambassador" />
          </div>
        </div>
      </div><br />
    </div>
  );
};

export default Home;