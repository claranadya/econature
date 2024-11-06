const About = () => {
    return (
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
    );
  };

  export default About;