import React from 'react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a4a5e 0%, #2a7d66 100%)',
        color: '#fff',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decorative elements */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'rgba(135, 206, 250, 0.3)',
          borderRadius: '50%',
          transform: 'translateY(-50%)'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 107, 61, 0.3)',
          borderRadius: '50%'
        }}></div>
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{ flex: '1', maxWidth: '500px' }}>
            <p style={{
              fontSize: '16px',
              marginBottom: '20px',
              opacity: 0.9
            }}>
              Learn New Skills & Popular Courses
            </p>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '20px',
              lineHeight: '1.2'
            }}>
              For Every Student,<br />
              <span style={{ color: '#ff6b3d' }}>Every Classroom.</span>
            </h1>
            <p style={{
              fontSize: '18px',
              marginBottom: '30px',
              opacity: 0.8,
              lineHeight: '1.6'
            }}>
              Dramatically supply transparent deliverables before backward comp internal or "organic" sources. Competently leverage other.
            </p>
            <button style={{
              background: '#ff6b3d',
              color: '#fff',
              padding: '15px 32px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}>
              Explore Courses
            </button>
          </div>
          <div style={{ flex: '1', textAlign: 'center', position: 'relative' }}>
            <img 
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=400" 
              alt="Student" 
              style={{
                maxWidth: '400px',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}
            />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section style={{
        background: '#fff',
        padding: '80px 0',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#ff6b3d',
            fontSize: '16px',
            marginBottom: '10px',
            fontWeight: '600'
          }}>
            What We Offer
          </p>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '50px',
            color: '#2a2a2a'
          }}>
            For Your Future Learning.
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            {[
              {
                icon: '📚',
                title: 'Online Courses',
                desc: 'Interactively provide access world class materials for unique catalysts for change my coardicat.'
              },
              {
                icon: '👨‍🏫',
                title: 'Expert Trainer',
                desc: 'Interactively provide access world class materials for unique catalysts for change my coardicat.'
              },
              {
                icon: '🎓',
                title: 'Get Certificate',
                desc: 'Interactively provide access world class materials for unique catalysts for change my coardicat.'
              },
              {
                icon: '⏰',
                title: 'Life Time Access',
                desc: 'Interactively provide access world class materials for unique catalysts for change my coardicat.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#2a7d66',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '32px'
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: '#2a2a2a'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  fontSize: '14px'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Courses Section */}
      <section style={{
        background: '#f8f9fa',
        padding: '80px 0',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '60px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            flex: '1',
            minWidth: '300px',
            position: 'relative'
          }}>
            <div style={{
              position: 'relative',
              display: 'inline-block'
            }}>
              <img 
                src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&w=400" 
                alt="About Courses" 
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: '#ff6b3d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px'
              }}>
                🌍
              </div>
            </div>
          </div>
          
          <div style={{
            flex: '1',
            minWidth: '300px'
          }}>
            <p style={{
              color: '#ff6b3d',
              fontSize: '16px',
              marginBottom: '15px',
              fontWeight: '600'
            }}>
              About Our Courses
            </p>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#2a2a2a',
              lineHeight: '1.2'
            }}>
              Explore Thousands of Creative Classes.
            </h2>
            <p style={{
              color: '#666',
              fontSize: '16px',
              lineHeight: '1.6'
            }}>
              Dramatically supply transparent deliverables before backward comp internal or "organic" sources. Competently leverage other.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;