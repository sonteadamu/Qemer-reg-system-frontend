import React from 'react';

function About() {
  return (
    <section style={{
      display: 'flex',
      flexWrap: 'wrap',
      padding: '50px 20px',
      alignItems: 'center',
      backgroundColor: '#F4F4F4',
    }}>
      <div style={{ flex: 1, minWidth: '300px', padding: '20px' }}>
        <h2>Explore Thousands of Creative Classes</h2>
        <p>
          Dramatically supply transparent deliverables before backward comp internal or organic sources.
        </p>
      </div>
      <div style={{ flex: 1, minWidth: '300px', padding: '20px' }}>
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Library" style={{ width: '100%', borderRadius: '10px' }} />
      </div>
    </section>
  );
}

export default About;