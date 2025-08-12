// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import qemerLogo from './images/Final-Sticky1.png';

function Header() {
  return (
    <header style={{
      backgroundColor: '#fff',
      padding: '15px 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Left side - Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <img 
            src={qemerLogo} 
            alt="QEMER SOFTWARE Logo" 
            style={{ height: '40px', width: 'auto' }} 
          />
        </div>

        {/* Center - Navigation */}
        <nav style={{ 
          display: 'flex', 
          gap: '30px',
          alignItems: 'center'
        }}>
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Courses', path: '/courses' },
            { name: 'Blog', path: '/blog' }
          ].map((item, index) => (
            <Link 
              key={index}
              to={item.path}
              style={{
                color: '#333',
                textDecoration: 'none',
                fontSize: '22px', // Increased font size
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side - User Icons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <div style={{
            display: 'flex',
            gap: '15px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              👤
            </div>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              🔔
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;