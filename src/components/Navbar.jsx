import {useState} from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }
  
    return (
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#1B5E20',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '20px' // Added margin to move logo right
        }}>
          <a href="#beranda" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            econature.
          </a>
          <button onClick={toggleMenu} style={{
            display: 'none',
            '@media (max-width: 768px)': {
              display: 'block'
            }
          }}>
            <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
          </button>
        </div>
  
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginRight: '40px', // Added margin to shift menu left
          color: 'white'
        }}>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '0.5rem',
            margin: 0,
            padding: 0
          }}>
            <li><a href="#beranda" className="hover:text-gray-300">BERANDA</a></li>
            <li style={{borderLeft: '1px solid #fff', height: '20px', margin: '0 10px'}}></li>
            <li><a href="#tentang-kami" className="hover:text-gray-300">TENTANG KAMI</a></li>
            <li style={{borderLeft: '1px solid #fff', height: '20px', margin: '0 10px'}}></li>
            <li><a href="#kontak" className="hover:text-gray-300">KONTAK</a></li>
            <li style={{borderLeft: '1px solid #fff', height: '20px', margin: '0 10px'}}></li>
            <li><a href="#fitur" className="hover:text-gray-300">FITUR</a></li>
            <li style={{borderLeft: '1px solid #fff', height: '20px', margin: '0 10px'}}></li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-cart2" viewBox="0 0 16 16"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/></svg></li>
            <li style={{borderLeft: '1px solid #fff', height: '20px', margin: '0 10px'}}></li>
            <li><a href="#masuk" className="hover:text-gray-300">MASUK</a></li>
            <li style={{borderLeft: '1px solid #fff', height: '20px', margin: '0 10px'}}></li>
            <li><a href="#daftar" className="hover:text-gray-300">DAFTAR</a></li>
          </ul>
        </div>
      </nav>
    )
  }

export default Navbar;
