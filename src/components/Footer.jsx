import React from 'react';
const Footer = () => {
    return (
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#9CCC65] font-semibold mb-4">Tentang Econature</h3>
            <p className="text-[#FFFFFF]">
            Mewujudkan masa depan hijau bersama. Dukung kampanye ramah lingkungan dan mulailah langkah kecil menuju bumi yang lebih bersih dan berkelanjutan!
            </p><br />
            <a href="#" class="bg-[#66BB6A] hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block">
                LEBIH LANJUT
            </a>
          </div>
          <div>
            <h3 className="text-[#9CCC65] font-semibold mb-4">Hubungi Kami</h3>
            <p className="text-[#FFFFFF]">Email: support@econature.com</p>
            <p className="text-[#FFFFFF]">Telepon: +62 812-3456-7890</p>
          </div>
         
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-[#9CCC65]">Ikuti Kami</h3>
            <div className="space-y-4">
              <a href="https://instagram.com/econatureofficial" className="flex items-center space-x-3 hover:text-[#ACEB98] transition-colors">
                <i className="bi bi-instagram text-2xl"></i>
                <span>EconatureOfficial</span>
              </a>
              <a href="https://facebook.com/econature.official" className="flex items-center space-x-3 hover:text-[#ACEB98] transition-colors">
                <i className="bi bi-facebook text-2xl"></i>
                <span>Econature.Official</span>
              </a>
              <a href="https://youtube.com/econaturechannel" className="flex items-center space-x-3 hover:text-[#ACEB98] transition-colors">
                <i className="bi bi-youtube text-2xl"></i>
                <span>EconatureChannel</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center">
        <div className="text-3xl font-bold">econature.</div>
      <div className="text-sm">
        All Rights Reserved of Econature © 2024, Design & Developed By: Econature
      </div>
        </div>
      </footer>
    );
  };

  export default Footer;
  