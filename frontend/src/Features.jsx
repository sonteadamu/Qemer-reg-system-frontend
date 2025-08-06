import React from 'react';

function Features() {
  const featuresData = [
    { icon: '🌐', title: 'Online Courses' },
    { icon: '🎓', title: 'Expert Trainer' },
    { icon: '📜', title: 'Get Certificate' },
    { icon: '⏱️', title: 'Life Time Access' },
  ];

  return (
    <section style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '50px 20px',
      backgroundColor: '#fff',
    }}>
      {featuresData.map((feature, index) => (
        <div key={index} style={{
          width: '200px',
          textAlign: 'center',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          borderRadius: '10px',
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{feature.icon}</div>
          <h3 style={{ fontSize: '1.2rem' }}>{feature.title}</h3>
        </div>
      ))}
    </section>
  );
}

export default Features;