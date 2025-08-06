import React from 'react';

function Hero() {
  return (
    <section style={{
      backgroundColor: '#2A7D66',
      padding: '60px 20px',
      color: '#fff',
      position: 'relative',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
        For Every Student, Every Classroom
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        Dramatically supply transparent deliverables before backward comp internal or organic sources.
      </p>
      <button style={{
        backgroundColor: '#FF5A5F',
        padding: '12px 30px',
        borderRadius: '25px',
        border: 'none',
        fontSize: '1rem',
        color: '#fff',
        cursor: 'pointer'
      }}>Explore Courses</button>
    </section>
  );
}

export default Hero;