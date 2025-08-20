import React from 'react';

function About() {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
    },
    hero: {
        background: 'linear-gradient(135deg, #1a4a5e 0%, #2a7d66 100%)',
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center',
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      maxWidth: '600px',
      margin: '0 auto',
      opacity: '0.9',
    },
    section: {
      padding: '60px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      textAlign: 'center',
      marginBottom: '40px',
      color: '#2c3e50',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginTop: '40px',
    },
    card: {
      background: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
    },
    cardIcon: {
      fontSize: '3rem',
      marginBottom: '20px',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#2c3e50',
    },
    cardText: {
      color: '#666',
      lineHeight: '1.6',
    },
    missionSection: {
      backgroundColor: '#f8f9fa',
      padding: '60px 20px',
    },
    missionContent: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
    },
    missionText: {
      fontSize: '1.2rem',
      color: '#555',
      lineHeight: '1.8',
      marginBottom: '30px',
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      marginTop: '50px',
    },
    valueCard: {
      background: 'white',
      padding: '25px',
      borderRadius: '8px',
      boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
    },
    valueTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#2a7d66 ',
    },
    teamSection: {
      padding: '60px 20px',
      backgroundColor: 'white',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    teamCard: {
      textAlign: 'center',
      padding: '20px',
    },
    teamImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      margin: '0 auto 20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      color: 'white',
    },
    teamName: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#2c3e50',
    },
    teamRole: {
      color: '#667eea',
      fontWeight: '500',
      marginBottom: '10px',
    },
    contactSection: {
        background: 'linear-gradient(135deg, #1a4a5e 0%, #2a7d66 100%)',
      color: 'white',
      padding: '60px 20px',
      textAlign: 'center',
    },
    contactTitle: {
      fontSize: '2.5rem',
      marginBottom: '20px',
    },
    contactText: {
      fontSize: '1.1rem',
      marginBottom: '30px',
      opacity: '0.9',
    },
    button: {
      background: '#ff6b3d',
      color: 'white',
      padding: '15px 30px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1.1rem',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>About Qemer</h1>
        <p style={styles.heroSubtitle}>
          Empowering education through innovative registration and management solutions
        </p>
      </section>

      {/* Mission Section */}
      <section style={styles.missionSection}>
        <div style={styles.missionContent}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.missionText}>
            At Qemer, we believe that education should be accessible, organized, and efficient. 
            Our mission is to streamline the registration process for educational institutions, 
            making it easier for students to enroll and for administrators to manage their programs.
          </p>
          <p style={styles.missionText}>
            We're committed to providing cutting-edge technology solutions that bridge the gap 
            between traditional education systems and modern digital requirements.
          </p>
        </div>
      </section>

      {/* What Makes Us The Best Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What Makes Us The Best</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={{...styles.cardIcon, color: '#667eea'}}>💻</div>
            <h3 style={styles.cardTitle}>7+ Years in Technology</h3>
            <p style={styles.cardText}>
              We have been working on technology for over 7 years.
            </p>
          </div>
          <div style={styles.card}>
            <div style={{...styles.cardIcon, color: '#2ecc71'}}>🎓</div>
            <h3 style={styles.cardTitle}>400+ Qualified Students</h3>
            <p style={styles.cardText}>
              We have qualified more than 400 students through the training we have provided.
            </p>
          </div>
          <div style={styles.card}>
            <div style={{...styles.cardIcon, color: '#e74c3c'}}>🏢</div>
            <h3 style={styles.cardTitle}>Institutional Training</h3>
            <p style={styles.cardText}>
              We have provided training to government and private institutions.
            </p>
          </div>
          <div style={styles.card}>
            <div style={{...styles.cardIcon, color: '#f1c40f'}}>🤝</div>
            <h3 style={styles.cardTitle}>Career Opportunities</h3>
            <p style={styles.cardText}>
              We are known for facilitating job opportunities and internship programs within our organization.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={styles.missionSection}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Values</h2>
          <div style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Innovation</h3>
              <p style={styles.cardText}>
                We continuously evolve our platform with the latest technologies to provide the best user experience.
              </p>
            </div>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Accessibility</h3>
              <p style={styles.cardText}>
                Education should be available to everyone. We design our systems to be inclusive and user-friendly.
              </p>
            </div>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Reliability</h3>
              <p style={styles.cardText}>
                Our robust infrastructure ensures that your registration system is always available when you need it.
              </p>
            </div>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Support</h3>
              <p style={styles.cardText}>
                We provide exceptional customer support to help you get the most out of our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      {/* Contact Section */}
      <section style={styles.contactSection}>
        <h2 style={styles.contactTitle}>Ready to Get Started?</h2>
        <p style={styles.contactText}>
          Join thousands of educational institutions that trust Qemer for their registration needs.
        </p>
        <a 
          href="/courses" 
          style={styles.button}
        
        >
          Explore Courses
        </a>
      </section>
    </div>
  );
}

export default About;